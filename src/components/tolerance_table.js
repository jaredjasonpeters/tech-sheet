import React, {Component, Fragment} from 'react'
                import {Context} from './contexts/contexts'
                import {SectionHeader, InputWrapper, InputLabel, $Input, Value, DLF_Pink} from './styled/styled'
                import {formatName} from '../utils/utils'
                import ToleranceSelection from './tolerance_selection'

                const ToleranceTable = (props) => (
                    <Context.Consumer>
                    {context => (
                        <Fragment>
                        <SectionHeader className='tolerance_table'> TOLERANCE TABLE </SectionHeader>
                        {context.state.toleranceSelected ?
                            (
                                context.state.sliders.map(v => (
                                        <InputWrapper key={v}>
                                        <InputLabel>{formatName(v)}</InputLabel>
                                        <$Input type='range' name={v} value={context.state[v] || 1} min='1' max='9' step='1' onChange={context.state.handleChange} />
                                        <Value value={context.state[v]}>{context.state[v]}</Value>
                                        </InputWrapper>
                                    )
                                )
                            )
                            : <ToleranceSelection/>
                        }                        
                        {context.state.error_message && <span style={{ width: '100%', textAlign: 'center', color: DLF_Pink, fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '20px' }}>{context.state.error_message}</span>}
                        </Fragment>
                    )}
                    </Context.Consumer>
                )

export default ToleranceTable




