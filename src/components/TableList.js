import React, { Component } from 'react'
import NTEPtable from './NTEPtable'
import { AddTableButton } from './styled/styled'
import { randomColor } from './../utils/utils'

export default class TableList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            arr: [],
            count: 1
        }
    }
    handleClick(e) {
        e.preventDefault()
        if (this.state.count <= 8) {
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

    render() {
        let tables = this.state.arr.map(v => (<NTEPtable key={`table-${v}`} count={v} handleCheck={this.props.handleCheck} data={this.props.data} />))
        return (
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between'
            }} >
                <div style={{ width: '100%', marginBottom: '20px' }}>
                    <AddTableButton onClick={this.handleClick.bind(this)}>+</AddTableButton>
                </div>
                {tables}
            </ div>
        )
    }
}