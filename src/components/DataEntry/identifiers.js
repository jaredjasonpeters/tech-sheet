import React, { Fragment } from 'react'
import { Context } from '../Contexts/contexts'
import { SectionHeader, FlexInnerWrapper, Checkbox, InputLabel, $Input, Select, FlexOuterWrapper } from '../Styled/styled'

const Identifiers = (props) => (
    <Context.Consumer>
        {context => (
            <Fragment>
                <SectionHeader theme={context.state.theme_style} className='sh header'> IDENTIFIERS </SectionHeader>
                <FlexOuterWrapper>
                    <FlexInnerWrapper flex-dir="row">
                    <Checkbox blue onClick={context.state.handleCheck} checked={context.state.isAlist} />
                        <img src="http://a-listturf.org/wp-content/uploads/2016/12/ALIST-Logo-Small.png"
                            style={{
                                height: '70px',
                                width: '70px',
                                minWidth: '70px'
                            }}>
                        </img>

                        <InputLabel>Variety/Blend/Mixture: </InputLabel>
                        <Select id="species_name" flex='6' name="variety_blend_mixture" onChange={context.state.handleChange} >
                            <option>--Select</option>
                            <option value="Variety">Variety</option>
                            <option value="Blend">Blend</option>
                            <option value="Mixture">Mixture</option>
                        </Select>
                    
                        <InputLabel>Variety Name: </InputLabel>
                        <$Input
                            height="auto"
                            maxW='200px'
                            name="variety_name"
                            placeholder="Leah's Awesome Blend"
                            onChange={context.state.handleChange}
                            value={context.state.variety_name}
                            font-family="Nunito"
                            font-weight="800"
                        />
                    
                        <InputLabel>Species Name: </InputLabel>
                        <Select id="species_name" flex='6' name="species_name" placeholder="Select a Species" onChange={context.state.handleChange} >
                            <option>--Select</option>
                            <option value="Turf Type Tall Fescue">Turf Type Tall Fescue</option>
                            <option value="Perennial Ryegrass">Perennial Ryegrass</option>
                            <option value="Annual Ryegrass">Annual Ryegrass</option>
                            <option value="Festulolium">Festulolium</option>
                        </Select>
                    </FlexInnerWrapper>
                </FlexOuterWrapper>
            </Fragment>
        )}
    </Context.Consumer>
)

export default Identifiers







