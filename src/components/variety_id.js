import React, {Fragment} from 'react'
import {Context} from './contexts/contexts'
import {SectionHeader, Wrapper, Checkbox, InputLabel, $Input, Select} from './styled/styled'

const VarietyId = (props) => (
    <Context.Consumer>
        {context => (
            <Fragment>
                <SectionHeader theme={context.state.theme_style} className='header'> VARIETY ID </SectionHeader>
                <Wrapper>
                    <img src="http://a-listturf.org/wp-content/uploads/2016/12/ALIST-Logo-Small.png"
                    style={{
                        height: '70px',
                        width: '70px'
                    }}>
                    </img>
                    <Checkbox blue onClick={context.state.handleCheck} checked={context.state.isAlist} />
                </Wrapper>
                <Wrapper>
                    <InputLabel>Variety Name: </InputLabel>
                    <$Input flex='1' maxW='200px' name="variety_name" placeholder="Leah's Awesome Blend" onChange={context.state.handleChange} value={context.state.variety_name.toUpperCase()} />
                    <InputLabel>Species Name: </InputLabel>
                    <Select id="species_name" flex='6' name="species_name" placeholder="Select a Species" onChange={context.state.handleChange} >
                        <option>--Select an Option--</option>
                        <option value="Turf Type Tall Fescue">Turf Type Tall Fescue</option>
                        <option value="Perennial Ryegrass">Perennial Ryegrass</option>
                        <option value="Annual Ryegrass">Annual Ryegrass</option>
                        <option value="Festulolium">Festulolium</option>
                    </Select>
                </Wrapper>
            </Fragment>
        )}
    </Context.Consumer>
)

export default VarietyId