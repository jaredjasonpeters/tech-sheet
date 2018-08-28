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