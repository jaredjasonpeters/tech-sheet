import React, {Component} from 'react'
import styled, {css} from 'styled-components'

export default class ToleranceTable extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
            <Input type='range' name="turf_quality" min='1' max='9' step='1'/>
            <Input type='range' name="shade_tolerance" min='1' max='9' step='1'/>
            <Input type='range' name="cold_tolerance" min='1' max='9' step='1'/>
            <Input type='range' name="drought_tolerance" min='1' max='9' step='1'/>
            <Input type='range' name="traffic_tolerance" min='1' max='9' step='1'/>
            </div>
        );
    }
}

const Input = styled.input`
display: block;
margin: 20px auto 20px 10px;
height: 30px;
width: 50%;
border-radius: 5px;
`


