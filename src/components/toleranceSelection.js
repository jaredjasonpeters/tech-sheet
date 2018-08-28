import React, { Component, Fragment } from 'react'
import { $Label, Wrapper, SubmitButton, ResetButton, Checkbox, DLF_Green } from './styled/styled'

export default class ToleranceSelection extends Component {
    constructor(props) {
        super(props)
        this.state = {
            turf_quality: false,
            salinity_tolerance: false,
            shade_tolerance: false,
            cold_tolerance: false,
            drought_tolerance: false,
            wear_tolerance: false,
        }
        this.handleClick = this.handleClick.bind(this)
        this.handleReset = this.handleReset.bind(this)
    }

    handleClick(e) {
        e.preventDefault();
        var name = e.target.getAttribute('name')
        var key = name
        this.setState((prevState) => {
            var newState = Object.assign(prevState)
            newState[key] = !prevState[key]
            return newState
        })
    }

    handleReset(e) {
        this.setState({
            turf_quality: false,
            salinity_tolerance: false,
            shade_tolerance: false,
            cold_tolerance: false,
            drought_tolerance: false,
            wear_tolerance: false,
        })
    }

    render() {
        return (
            <Fragment>
                <form style={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'row',
                }}>
                    <Wrapper width='15%'>
                        <$Label margin="0 25px"> Turf Quality </$Label>
                        <Checkbox checked={this.state.turf_quality} name="turf_quality" onClick={this.handleClick} />
                        <span style={{ width: '10px' }}>|</span>
                    </Wrapper>
                    <Wrapper width='15%'>
                        <$Label margin="0 25px"> Salinity Tolerance </$Label>
                        <Checkbox checked={this.state.salinity_tolerance} name="salinity_tolerance" onClick={this.handleClick} />
                        <span style={{ width: '10px' }}>|</span>
                    </Wrapper>
                    <Wrapper width='15%'>
                        <$Label margin="0 25px"> Shade Tolerance </$Label>
                        <Checkbox checked={this.state.shade_tolerance} name="shade_tolerance" onClick={this.handleClick} />
                        <span style={{ width: '10px' }}>|</span>
                    </Wrapper>
                    <Wrapper width='15%'>
                        <$Label margin="0 25px"> Drought Tolerance </$Label>
                        <Checkbox checked={this.state.cold_tolerance} name="cold_tolerance" onClick={this.handleClick} />
                        <span style={{ width: '10px' }}>|</span>
                    </Wrapper>
                    <Wrapper width='15%'>
                        <$Label margin="0 25px"> Cold Tolerance </$Label>
                        <Checkbox checked={this.state.drought_tolerance} name="drought_tolerance" selected onClick={this.handleClick} />
                        <span style={{ width: '10px' }}>|</span>
                    </Wrapper>
                    <Wrapper width='15%'>
                        <$Label margin="0 25px"> Wear Tolerance </$Label>
                        <Checkbox checked={this.state.wear_tolerance} name="wear_tolerance" selected onClick={this.handleClick} />
                        <span style={{ width: '10px' }}>|</span>
                    </Wrapper>
                </form>
                <Wrapper justify="center">
                    <SubmitButton submit height="30px" width="auto" bottom="20px" fSize="14px" onClick={this.props.handleSubmit.bind(this, this.state)}>Populate Tables</SubmitButton>
                    <SubmitButton height="30px" width="auto" bottom="20px" fSize="14px" onClick={this.handleReset}>Clear Selection</SubmitButton>
                </Wrapper>
            </Fragment>
        )
    }
}