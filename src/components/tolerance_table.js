import React, {Component} from 'react'
import styled, {css} from 'styled-components'
import {InputLabel, InputWrapper, $Input, Value} from './styled/styled'

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
                    <InputLabel>Turf Quality</InputLabel>
                    <$Input type='range' name="turf_quality" value={this.state.turf_quality} min='1' max='9' step='1' onChange={this.handleSlide.bind(this)}/>
                    <Value value={this.state.turf_quality}>{this.state.turf_quality}</Value>
                </InputWrapper>
                <InputWrapper>
                    <InputLabel>Shade Tolerance</InputLabel>
                    <$Input type='range' name="shade_tolerance" value={this.state.shade_tolerance} min='1' max='9' step='1' onChange={this.handleSlide.bind(this)}/>
                    <Value value={this.state.shade_tolerance}>{this.state.shade_tolerance}</Value>
                </InputWrapper>
                <InputWrapper>
                    <InputLabel>Cold Tolerance</InputLabel>
                    <$Input type='range' name="cold_tolerance" value={this.state.cold_tolerance} min='1' max='9' step='1' onChange={this.handleSlide.bind(this)}/>
                    <Value value={this.state.cold_tolerance}>{this.state.cold_tolerance}</Value>
                </InputWrapper>
                <InputWrapper>
                    <InputLabel>Drought Tolerance</InputLabel>
                    <$Input type='range' name="drought_tolerance" value={this.state.drought_tolerance} min='1' max='9' step='1' onChange={this.handleSlide.bind(this)}/>
                    <Value value={this.state.drought_tolerance}>{this.state.drought_tolerance}</Value>
                </InputWrapper>
                <InputWrapper>
                    <InputLabel>Traffic Tolerance</InputLabel>
                    <$Input type='range' name="traffic_tolerance" value={this.state.traffic_tolerance} min='1' max='9' step='1' onChange={this.handleSlide.bind(this)}/>
                    <Value value={this.state.traffic_tolerance}>{this.state.traffic_tolerance}</Value>
                </InputWrapper>
            </div>
        );
    }
}

