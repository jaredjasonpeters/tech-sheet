import React, { Component, Fragment } from 'react'
import {Context} from './contexts/contexts'
import NTEPtable from './ntep_table'
import { AddTableButton, ResetButton, Wrapper, SectionHeader } from './styled/styled'

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
                <SectionHeader theme={context.state.theme_style} className='ntep_data_entry'>NTEP DATA ENTRY: </SectionHeader>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between'
                }}>
                <div style={{ width: '100%', margin: '10px 0 10px 0' }}>
                <Wrapper justify="center">
                <AddTableButton onClick={this.handleClick.bind(this)}>+</AddTableButton>
                <ResetButton onClick={this.removeTable.bind(this, context)}>-</ResetButton>
                </Wrapper>
                </div>
                {this.state.arr.map(v => (<NTEPtable key={`table-${v}`} name={`table-${v}`} count={v}/>))}
                </div>
                </Fragment>
            )}
            </Context.Consumer>
        )
    }
}