import React, { Component } from 'react'
import NTEProw from './NTEProw'
import { $Input, InputLabel, $Label, DLF_Green } from './styled/styled'
import { IndexColor } from './../utils/utils'
import styled, { css } from 'styled-components'

export default class NTEPtable extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{
                flexGrow: 1,
                maxWidth: '45%',
                border: `5px solid ${IndexColor(this.props.count)}`,
                borderRadius: '5px',
                padding: '15px',
                marginBottom: '20px'
            }}>
                <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '90px',
                    background: IndexColor(this.props.count),
                    textAlign: 'center',
                    fontSize: '30px',
                    color: 'white',
                    fontFamily: 'Nunito, sans-serif'

                }}>{this.props.count}</div>
                <InputLabel style={{ marginBottom: '0px' }}>Title:</InputLabel>
                <$Input />
                <NTEProw/>
                <NTEProw/>
                <NTEProw/>
                <NTEProw/>
                <NTEProw/>
                <NTEProw/>
                <NTEProw/>
                <NTEProw/>
                <NTEProw label='LSD:' />
            </div>
        )
    }
}


