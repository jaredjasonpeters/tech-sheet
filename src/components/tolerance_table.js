import React, {Component} from 'react'
import styled, {css} from 'styled-components'

export default class ToleranceTable extends Component {
    constructor(props){
        super(props);
        this.state = {
            turf_quality: 1,
            shade_tolerance: 1,
            cold_tolerance: 1,
            drought_tolerance: 1,
            traffic_tolerance: 1,
        }
    }

    handleSlide(e) {

        var {name, value} = e.target
    
        this.setState((prevState) => {
             var newState = Object.assign(prevState)
             newState[name] = value
             return newState
        })
    }
    

    render() {
        return (
            <div style={{display: 'block'}}>
                <InputWrapper>
                    <Input type='range' name="turf_quality" value={this.state.turf_quality} min='1' max='9' step='1' onChange={this.handleSlide.bind(this)}/>
                    <Value>{this.state.turf_quality}</Value>
                </InputWrapper>
                <InputWrapper>
                    <Input type='range' name="shade_tolerance" value={this.state.shade_tolerance} min='1' max='9' step='1' onChange={this.handleSlide.bind(this)}/>
                    <Value>{this.state.shade_tolerance}</Value>
                </InputWrapper>
                <InputWrapper>
                    <Input type='range' name="cold_tolerance" value={this.state.cold_tolerance} min='1' max='9' step='1' onChange={this.handleSlide.bind(this)}/>
                    <Value>{this.state.cold_tolerance}</Value>
                </InputWrapper>
                <InputWrapper>
                    <Input type='range' name="drought_tolerance" value={this.state.drought_tolerance} min='1' max='9' step='1' onChange={this.handleSlide.bind(this)}/>
                    <Value>{this.state.drought_tolerance}</Value>
                </InputWrapper>
                <InputWrapper>
                    <Input type='range' name="traffic_tolerance" value={this.state.traffic_tolerance} min='1' max='9' step='1' onChange={this.handleSlide.bind(this)}/>
                    <Value>{this.state.traffic_tolerance}</Value>
                </InputWrapper>
            </div>
        );
    }
}

const Input = styled.input`
flex-grow: 1;
margin: 20px auto 20px 10px;
height: 30px;
width: 40%;
border-radius: 5px;
`
const Value = styled.h1`
flex-grow: 1;
width: 40%;
margin-right: 100px;

@import url('https://fonts.googleapis.com/css?family=Nunito:800');
font-family: 'Nunito', sans-serif;
font-size: 30px;
text-align: right;
`
const InputWrapper = styled.div`
display: flex
height: auto;
width: 100%
`


