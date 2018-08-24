import React, {Component} from 'react'
import NTEPtable from './NTEPtable'
import {AddTableButton} from './styled/styled'

export default class TableList extends Component {
    constructor(props){
        super(props)
        this.state = {
            arr: [],
            count: 0

        }
    }
    handleClick(e) {
        e.preventDefault()
        this.setState((prevState) => {
            var count = prevState.count+= 1
            var newArr = prevState.arr;
            newArr.push(count)

            return {
                arr: newArr,
                count: count
            }
        })
    }

    render(){
        let tables = this.state.arr.map(v=>v=(<NTEPtable key={`table-${v}`}/>))
        return(
            <div>
                <AddTableButton onClick={this.handleClick.bind(this)}>+</AddTableButton>
                {tables}
            </div>
        )
    }
}