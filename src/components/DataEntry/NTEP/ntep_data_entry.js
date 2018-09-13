import React, { Component, Fragment } from 'react'
import {Context} from '../../Contexts/contexts'
import NTEPtable from '../NTEP/ntep_table'
import { AddTableButton, ResetButton, Wrapper, SectionHeader } from '../../Styled/styled'

export default class NTEPDataEntry extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [],
            count: 1
        }
    }
    handleClick(e) {
        e.preventDefault()
        if (this.state.count <= 4) {
            this.setState((prevState) => {
                var count = prevState.count
                var newArr = prevState.arr;
                newArr.push(count++)

                return {
                    arr: newArr,
                    count: count
                }
            })
        }
    }

    removeTable(context,e){
        
        e.preventDefault()
        if(this.state.count > 1){
            this.setState(prevState => {
                var count = prevState.count - 1
                console.log(count)
                context.state.removeTable(count)
                
                var newArr = prevState.arr;
                newArr.pop()                   
               
                return {
                    arr: newArr,
                    count: count
                }
            })
           
        } 
    }

    render() {
        
        return (
            <Context.Consumer>
            {context => (
                <Fragment>
                <SectionHeader theme={context.state.theme_style} className='sh ntep_data_entry'>NTEP DATA ENTRY: </SectionHeader>
                <Wrapper justify="center">
                    <AddTableButton onClick={this.handleClick.bind(this)}>+</AddTableButton>
                    <ResetButton onClick={this.removeTable.bind(this, context)}>-</ResetButton>
                </Wrapper>
                <Wrapper >
                    {this.state.arr.map(v => (<NTEPtable key={`table-${v}`} name={`table-${v}`} count={v}/>))}
                </Wrapper>
                </Fragment>
            )}
            </Context.Consumer>
        )
    }
}