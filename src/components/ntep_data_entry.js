import React, { Component, Fragment } from 'react'
import NTEPtable from './NTEPtable'
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

    removeTable(e){
        e.preventDefault()
        if(this.state.count > 1){
            this.setState(prevState => {
                var count = prevState.count
                var newArr = prevState.arr;
                newArr.pop()
                count--
                return {
                    arr: newArr,
                    count: count
                }
            })
        }

        
    }

    render() {
        let tables = this.state.arr.map(v => (<NTEPtable key={`table-${v}`} count={v} handleCheck={this.props.handleCheck} data={this.props.data} />))
        return (
            <Fragment>
            <SectionHeader className='ntep_data_entry'>NTEP DATA ENTRY: </SectionHeader>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between'
            }}>
            <div style={{ width: '100%', margin: '10px 0 10px 0' }}>
            <Wrapper justify="center">
            <AddTableButton onClick={this.handleClick.bind(this)}>+</AddTableButton>
            <ResetButton onClick={this.removeTable.bind(this)}>-</ResetButton>
            </Wrapper>
            </div>
            {tables}
            </div>
            </Fragment>
        )
    }
}