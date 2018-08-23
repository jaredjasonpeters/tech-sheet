import React, { Component } from 'react'
import {Input} from './styled-components/styled-components'


export default class NTEPEntry extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return(
            <Input type='text' data="variety_name"/>
        )
    }

}




