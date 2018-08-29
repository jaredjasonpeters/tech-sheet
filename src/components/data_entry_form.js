import React, { Component } from 'react'
import {$Form, SubmitButton} from './styled/styled'
import { formatName } from '../utils/utils'
import styled, { css } from 'styled-components'
import {Context} from './contexts/contexts'
import VarietyId from './variety_id'
import ToleranceTable from './tolerance_table'
import Content from './content'
import NTEPDataEntry from './ntep_data_entry'
import BottomInfo from './bottom_info'


const DataEntryForm = (props) => (
        <Context.Consumer>
        {(context) => (
            <$Form>
                <VarietyId/>
                <ToleranceTable/>
                <Content/>
                <NTEPDataEntry></NTEPDataEntry>
                <BottomInfo/>
                <br />
                <br />
                <SubmitButton submit name='save_button' onClick={context.state.saveForm}> Save </SubmitButton>
                <SubmitButton name='reset_button' onClick={context.state.reset}> Reset </SubmitButton>
            </$Form>
        )}
        </Context.Consumer>
)
    
export default DataEntryForm

