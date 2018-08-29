import React, { Component } from 'react'
import {Context} from './contexts/contexts'
import NTEProw from './NTEProw'
import { $Input, InputLabel, $Label, DLF_Green } from './styled/styled'
import { IndexColor } from './../utils/utils'
import styled, { css } from 'styled-components'

export default class NTEPtable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            table: this.props.name,
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
        this.handleInput = this.handleInput.bind(this)
        this.setTitle = this.setTitle.bind(this)
    }
    
    handleInput(e) {
        var {name, value} =  e.target
        var row = e.target.getAttribute('data-row')
        var table = e.target.getAttribute('data-table')
        console.log(e.target)
       
        this.setState( prevState => {
            var newState = Object.assign(prevState)
            newState[row][name] = value
            return newState
           }
        )
    }

    getTable(e) {
        var {name, value} =  e.target
        var row = e.target.getAttribute('data-row')
        var table = e.target.getAttribute('data-table')
        console.log(e.target)
       
        this.setState( prevState => {
            var newState = Object.assign(prevState)
            newState[row][name] = value
            return newState
           }
        )
    }

    setTitle(e) {
        var {name, value} = e.target
        this.setState({
            title: value
        })
    }

    render() {
        return (
            <Context.Consumer>
            { context => (
            <div style={{
                flexGrow: 1,
                maxWidth: '45%',
                border: `5px solid ${IndexColor(this.props.count)}`,
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
               
                    <InputLabel style={{ marginBottom: '0px' }} onChange={this.setTitle} value={this.state.title}>Title:</InputLabel>
                    <$Input  name={this.state.title} handleInput={this.handleInput}/>
                    <NTEProw name="row_1" handleInput={this.handleInput} data-row={this.state.row_1} data-table={this.props.name}/>
                    <NTEProw name="row_2" handleInput={this.handleInput} data-row={this.state.row_2} data-table={this.props.name}/>
                    <NTEProw name="row_3" handleInput={this.handleInput} data-row={this.state.row_3} data-table={this.props.name}/>
                    <NTEProw name="row_4" handleInput={this.handleInput} data-row={this.state.row_4} data-table={this.props.name}/>
                    <NTEProw name="row_5" handleInput={this.handleInput} data-row={this.state.row_5} data-table={this.props.name}/>
                    <NTEProw name="row_6" handleInput={this.handleInput} data-row={this.state.row_6} data-table={this.props.name}/>
                    <NTEProw name="row_7" handleInput={this.handleInput} data-row={this.state.row_7} data-table={this.props.name}/>
                    <NTEProw name="row_8" handleInput={this.handleInput} data-row={this.state.row_8} data-table={this.props.name}/>
                    <NTEProw label="LSD:"  name="lsd" handleInput={this.handleInput} data-row={this.state.lsd} />
                
            </div>
        )}
        </Context.Consumer>
      )
    }
}


