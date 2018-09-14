import React, {Fragment} from 'react'
import {SectionHeader, InputLabel, $TextArea} from '../Styled/styled'
import {Context} from '../Contexts/contexts'

const TextContent = (props) => (
    <Context.Consumer>
        {context => (
            <Fragment>
            <SectionHeader className="sh" theme={context.state.theme_style}> CONTENT </SectionHeader>
            
            <InputLabel> Quick Facts: </InputLabel>
            <$TextArea name='quick_facts' onChange={context.state.handleChange} value={context.state.quick_facts} />
            
            <InputLabel> Adaptation: </InputLabel>
            <$TextArea name='adaptation' onChange={context.state.handleChange} value={context.state.adaptation} />
            </Fragment>
        )}
    </Context.Consumer>
)

export default TextContent