import React, {Component} from 'react'
import {Context} from '../contexts/contexts'

class TechSheetProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Jared',
          isAlist: false,
            variety_name: '',
            species_name: '',
            sliders: [],
            quick_facts: '',
            adaptation: '',
            seeding_rate: '',
            establishment_rate: '',
            mowing_frequency: '',
            nitrogen_required: '',
            endophyte_enhanced: '',
            toleranceSelected: false,
            error_message: null,
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
            reset: (e) => {
                e.preventDefault()
                this.setState({
                    isAlist: false,
                    variety_name: '',
                    species_name: '',
                    sliders: [],
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