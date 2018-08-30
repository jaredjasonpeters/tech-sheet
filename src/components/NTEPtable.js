import React, {Fragment, Component} from 'react'
import {Context} from './contexts/contexts'
import NTEProw from './NTEProw'
import { $Input, InputLabel, $Label, DLF_Green, SubmitButton, Wrapper} from './styled/styled'
import { IndexColor } from './../utils/utils'
import styled, { css } from 'styled-components'

export default class NTEPtable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            table: { 
                confirmed: false,
                id: this.props.name,
                title: '',
                row_1: {
                    variety_name: '',
                    ntep_rating: 1,
                },
                row_2: {
                    variety_name: '',
                    ntep_rating: 1,
                },
                row_3: {
                    variety_name: '',
                    ntep_rating: 1,
                },
                row_4: {
                    variety_name: '',
                    ntep_rating: 1,
                },
                row_5: {
                    variety_name: '',
                    ntep_rating: 1,
                },
                row_6: {
                    variety_name: '',
                    ntep_rating: 1,
                },
                row_7: {
                    variety_name: '',
                    ntep_rating: 1,
                },
                row_8: {
                    variety_name: '',
                    ntep_rating: 1,
                },
                lsd: {
                    ntep_rating: 0,
                }
              }
            }
        this.handleInput = this.handleInput.bind(this)
        this.handleCheck = this.handleCheck.bind(this)
        this.setTitle = this.setTitle.bind(this)
    }
    
    handleInput(e) {
        var {name, value} =  e.target
        var row = e.target.getAttribute('data-row')
        var table = e.target.getAttribute('data-table')
       
       
        this.setState( prevState => {
            var newState = Object.assign(prevState)
            newState.table[row][name] = value
            return newState
           }
        )
    }

    handleCheck(e) {
        var {name, value} = e.target
        var row = e.target.getAttribute('data-row')
        
        this.setState((prevState) => {
            var newState = Object.assign(prevState)
            newState.table[row]['proprietary'] = !prevState.table[row]['proprietary']
            return newState
        })
    }


    setTitle(e) {
        var {name, value} = e.target
        this.setState(prevState => {
            var newState = Object.assign(prevState)
            newState.table.title = value
            return newState
        })
    }

    render() {
        return (
            <Context.Consumer>
            { context => (
            <Fragment>
            <div style={{
                flexGrow: 1,
                maxWidth: '45%',
                border: `5px solid ${this.state.table.confirmed ? DLF_Green : 'black'}`,
                borderRadius: '5px',
                padding: '15px',
                marginBottom: '10px',
                marginRight: '10px'
            }}>
                <div className="table-number-circle" style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '90px',
                    background: IndexColor(this.props.count),
                    textAlign: 'center',
                    fontSize: '20px',
                    color: 'white',
                    fontFamily: 'Nunito, sans-serif',
                    marginBottom: '30px'

                }}>{this.props.count}</div>
                                 
                    <InputLabel style={{ marginBottom: '0px' }}>Title:</InputLabel>
                    <$Input  name="title" onChange={this.setTitle} value={this.state.table.title}/>
                    <NTEProw name="row_1" handleCheck={this.handleCheck} handleInput={this.handleInput} data-row={this.state.table.row_1} data-table={this.props.name} checked={this.state.table.row_1.proprietary}/>
                    <NTEProw name="row_2" handleCheck={this.handleCheck} handleInput={this.handleInput} data-row={this.state.table.row_2} data-table={this.props.name} checked={this.state.table.row_2.proprietary}/>
                    <NTEProw name="row_3" handleCheck={this.handleCheck} handleInput={this.handleInput} data-row={this.state.table.row_3} data-table={this.props.name} checked={this.state.table.row_3.proprietary}/>
                    <NTEProw name="row_4" handleCheck={this.handleCheck} handleInput={this.handleInput} data-row={this.state.table.row_4} data-table={this.props.name} checked={this.state.table.row_4.proprietary}/>
                    <NTEProw name="row_5" handleCheck={this.handleCheck} handleInput={this.handleInput} data-row={this.state.table.row_5} data-table={this.props.name} checked={this.state.table.row_5.proprietary}/>
                    <NTEProw name="row_6" handleCheck={this.handleCheck} handleInput={this.handleInput} data-row={this.state.table.row_6} data-table={this.props.name} checked={this.state.table.row_6.proprietary}/>
                    <NTEProw name="row_7" handleCheck={this.handleCheck} handleInput={this.handleInput} data-row={this.state.table.row_7} data-table={this.props.name} checked={this.state.table.row_7.proprietary}/>
                    <NTEProw name="row_8" handleCheck={this.handleCheck} handleInput={this.handleInput} data-row={this.state.table.row_8} data-table={this.props.name} checked={this.state.table.row_8.proprietary}/>
                    <NTEProw label="LSD:"  name="lsd" handleInput={this.handleInput} data-row={this.state.table.lsd} />
                    <Wrapper justify="center">
                    <SubmitButton submit width="150px" max="150px" height="40px" onClick={context.state.addTable.bind(context,this.state.table)}>Confirm</SubmitButton> 
                    </Wrapper>                
                    </div>
                
                </Fragment>
        )}
        </Context.Consumer>
      )
    }
}


