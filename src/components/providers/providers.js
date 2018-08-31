import React, { Component } from 'react'
import { Context } from '../contexts/contexts'
import { Colors } from '../../utils/utils'

class TechSheetProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            theme_style: '',
            display_form: false,
            count: 0,
            isAlist: false,
            variety_name: '',
            species_name: '',
            sliders: {},
            tables: {},
            quick_facts: '',
            adaptation: '',
            seeding_rate: '',
            establishment_rate: '',
            mowing_frequency: '',
            nitrogen_required: '',
            endophyte_enhanced: '',
            toleranceSelected: false,
            error_message: null,

            chooseTheme: (e) => {
                var target = e.target
                target.style.color = Colors[name];
                var name = target.getAttribute('name')
                console.log(name)
                this.setState({ theme_style: name });
            },

            displayForm: () => {
                this.setState((prevState) => {
                    var newState = Object.assign(prevState)
                    newState['display_form'] = !prevState['display_form']
                    return newState
                })
            },

            handleCheck: () => {
                this.setState((prevState) => {
                    var newState = Object.assign(prevState)
                    var checked = newState.isAlist
                    return {
                        isAlist: !checked
                    }
                })
            },

            handleSubmit: (options, e) => {
                var count = 0;
                var inputs = [];
                for (let option in options) {
                    if (options[option] === true) {
                        inputs.push(option)
                        count++
                    }
                }

                if (count >= 4) {
                    this.setState({
                        sliders: inputs,
                        toleranceSelected: true,
                        error_message: null,
                    })
                } else {
                    this.setState({
                        error_message: '----You have to select at least (4) tolerance ratings----'
                    })
                }

            },

            handleChange: (e) => {
                var { name, value } = e.target
                if (value === "--Select an Option--") return
                this.setState((prevState) => {
                    var newState = Object.assign(prevState)
                    newState[name] = value
                    return newState
                })
            },

            handleCheck: () => {
                this.setState((prevState) => {
                    var newState = Object.assign(prevState)
                    var checked = newState.isAlist
                    return {
                        isAlist: !checked
                    }
                })
            },

            saveForm: () => {
                this.setState((prevState) => {
                    var newState = Object.assign(prevState)
                    var structured = {
                        header: {
                            a_list: this.state.isAlist,
                            variety_name: this.state.variety_name,
                            species_name: this.state.species_name
                        },
                        tolerance_table: {
                            info: this.state.sliders.map(v => [v, this.state[v]])
                        },
                        content: {
                            quick_facts: this.state.quick_facts,
                            adaptation: this.state.adaptation
                        },
                        ntep_data: {
                            info: this.state.tables
                        },
                        bottom_info: {
                            seeding_rate: this.state.seeding_rate,
                            establishment_rate: this.state.establishment_rate,
                            mowing_frequency: this.state.mowing_frequency,
                            nitrogen_required: this.state.nitrogen_required,
                            endophyte_enhanced: this.state.endophyte_enhanced
                        }
                    }
                    newState['form_data'] = structured
                    return newState
                })
                console.log(this.state.form_data)
            },

            reset: (e) => {
                e.preventDefault()
                this.setState({
                    count: 0,
                    isAlist: false,
                    variety_name: '',
                    species_name: '',
                    sliders: {},
                    tables: {},
                    quick_facts: '',
                    adaptation: '',
                    seeding_rate: '',
                    establishment_rate: '',
                    mowing_frequency: '',
                    nitrogen_required: '',
                    endophyte_enhanced: '',
                    toleranceSelected: false,
                    error_message: null
                })
            },

            addTable: (table) => {
                if (table.confirmed) return
                var { id, title, lines } = table
                var LSDFilled = table.lines.lsd.ntep_rating.filled
                var titleFilled = title !== ''
                var oneOfOursSelected = false
                var count = 0
                for (let row in lines) {
                    if (row !== 'lsd') {
                        if (lines[row].ntep_rating.filled && lines[row].variety_name.filled) {
                            count++
                        }
                        if (lines[row].proprietary) {
                            oneOfOursSelected = true
                        }
                    }
                }

                this.setState(prevState => {
                    var newState = Object.assign(prevState)

                    if (!table.confirmed && titleFilled && LSDFilled & oneOfOursSelected & count === 8) {
                        newState.tables[id] = table
                        table.confirmed = true
                        return newState
                    } else { return }

                })
            },

            removeTable: (count) => {
                this.setState(prevState => {
                    var newState = Object.assign(prevState)
                    newState.tables[`table-${count}`] = {}
                    return newState
                })
            }
        }
    }
    render() {
        return (
            <Context.Provider value={{ state: this.state }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export {
    TechSheetProvider,
}