import React, { Component } from 'react'
import { $Form, SubmitButton } from './styled/styled'
import { formatName } from '../utils/utils'
import styled, { css } from 'styled-components'
import { Context } from './contexts/contexts'
import VarietyId from './variety_id'
import ToleranceTable from './tolerance_table'
import Content from './content'
import NTEPDataEntry from './ntep_data_entry'
import BottomInfo from './bottom_info'


class DataEntryForm extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        var form = document.getElementById('data-entry-form')
        setTimeout(() => {
            form.style.opacity = 1
        }, 1000)

    }

    render() {
        return (
            <Context.Consumer>
                {(context) => (
                    <$Form id="data-entry-form" >
                        <VarietyId />
                        <ToleranceTable />
                        <Content />
                        <NTEPDataEntry></NTEPDataEntry>
                        <BottomInfo />
                        <br />
                        <br />
                        <SubmitButton submit name='save_button' onClick={context.state.saveForm}> Save </SubmitButton>
                        <SubmitButton name='reset_button' onClick={context.state.reset}> Reset </SubmitButton>
                    </$Form>
                )}
            </Context.Consumer>
        )
    }
}

export default DataEntryForm

