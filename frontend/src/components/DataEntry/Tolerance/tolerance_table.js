import React, {Component, Fragment} from 'react'
                import {DataContext} from '../../Contexts/contexts'
                import {SectionHeader, InputWrapper, InputLabel, $Input, Value, DLF_Pink} from '../../Styled/styled'
                import {formatName, errors} from '../../../utils/utils'
                import ToleranceSelection from '../Tolerance/tolerance_selection'

                const ToleranceTable = (props) => (
                    <DataContext.Consumer>
                    {context => (
                        <Fragment>
                        <SectionHeader theme={context.state.theme_style} className='sh tolerance_table'> TOLERANCE TABLE </SectionHeader>
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
                        {context.state.error_message === errors.tolerance_not_selected && <span style={{ width: '100%', textAlign: 'center', color: DLF_Pink, fontFamily: 'Nunito, sans-serif', fontWeight: 800, fontSize: '20px' }}>{context.state.error_message}</span>}
                        </Fragment>
                    )}
                    </DataContext.Consumer>
                )

export default ToleranceTable




