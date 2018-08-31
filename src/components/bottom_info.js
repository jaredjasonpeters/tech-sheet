import React, {Component, Fragment} from 'react'
import {Context} from './contexts/contexts'
import {Wrapper, $Label, BIinput, SectionHeader} from './styled/styled'
const BottomInfo = (props) => {
    return (
        <Context.Consumer>
        {context=>(
            <Fragment>
                <SectionHeader theme={context.state.theme_style} className='bottom_info'>BOTTOM INFO: </SectionHeader>
                <Wrapper>
                    <$Label width="20%" center> Seeding Rate: </$Label>
                    <$Label width="20%" center> Establishment Rate: </$Label>
                    <$Label width="20%" center> Mowing Frequency: </$Label>
                    <$Label width="20%" center> Nitrogen Required: </$Label>
                    <$Label width="20%" center> Endophyte +: </$Label>
                </Wrapper>
                <Wrapper>
                    <BIinput name="seeding_rate" onChange={context.state.handleChange} value={context.state.seeding_rate}></BIinput>
                    <BIinput name="establishment_rate" onChange={context.state.handleChange} value={context.state.establishment_rate}></BIinput>
                    <BIinput name="mowing_frequency" onChange={context.state.handleChange} value={context.state.mowing_frequency}></BIinput>
                    <BIinput name="nitrogen_required" onChange={context.state.handleChange} value={context.state.nitrogen_required}></BIinput>
                    <BIinput name="endophyte_enhanced" onChange={context.state.handleChange} value={context.state.endophyte_enhanced}></BIinput>
                </Wrapper>
            </Fragment>
        )}
        </Context.Consumer>
    )
}

export default BottomInfo