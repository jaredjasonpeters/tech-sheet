import React, {Component} from 'react'
import styled, {css} from 'styled-components'
import {InputLabel, InputWrapper, $Input, Value} from './styled/styled'

export default class ToleranceTable extends Component {
    constructor(props){
        super(props);
    }


    render() {
        return (
            <div style={{display: 'block'}}>
                <InputWrapper>
                    <InputLabel>Turf Quality</InputLabel>
                    <$Input type='range' name="turf_quality" value={this.props.data.turf_quality} min='1' max='9' step='1' onChange={this.props.handleSlide}/>
                    <Value value={this.props.data.turf_quality}>{this.props.data.turf_quality}</Value>
                </InputWrapper>
                <InputWrapper>
                    <InputLabel>Shade Tolerance</InputLabel>
                    <$Input type='range' name="shade_tolerance" value={this.props.data.shade_tolerance} min='1' max='9' step='1' onChange={this.props.handleSlide}/>
                    <Value value={this.props.data.shade_tolerance}>{this.props.data.shade_tolerance}</Value>
                </InputWrapper>
                <InputWrapper>
                    <InputLabel>Cold Tolerance</InputLabel>
                    <$Input type='range' name="cold_tolerance" value={this.props.data.cold_tolerance} min='1' max='9' step='1' onChange={this.props.handleSlide}/>
                    <Value value={this.props.data.cold_tolerance}>{this.props.data.cold_tolerance}</Value>
                </InputWrapper>
                <InputWrapper>
                    <InputLabel>Drought Tolerance</InputLabel>
                    <$Input type='range' name="drought_tolerance" value={this.props.data.drought_tolerance} min='1' max='9' step='1' onChange={this.props.handleSlide}/>
                    <Value value={this.props.data.drought_tolerance}>{this.props.data.drought_tolerance}</Value>
                </InputWrapper>
                <InputWrapper>
                    <InputLabel>Traffic Tolerance</InputLabel>
                    <$Input type='range' name="traffic_tolerance" value={this.props.data.traffic_tolerance} min='1' max='9' step='1' onChange={this.props.handleSlide}/>
                    <Value value={this.props.data.traffic_tolerance}>{this.props.data.traffic_tolerance}</Value>
                </InputWrapper> 
            </div>
        );
    }
}

