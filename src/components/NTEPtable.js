import React, {Component} from 'react'
import NTEProw from './NTEProw'
import {$Input, $Label, DLF_Green} from './styled/styled'

export default class NTEPtable extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div style={{
                 border: `5px solid ${DLF_Green}`,
                 borderRadius: '5px',
                 padding: '50px',
                 marginBottom: '20px'
            }}>
                <$Label>Title:</$Label>
                <$Input/> 
                <NTEProw/>
                <NTEProw/>
                <NTEProw/>
                <NTEProw/>
                <NTEProw/>
                <NTEProw/>
                <NTEProw/>
                <NTEProw/>
                <NTEProw/>
            </div>
        )
    }
}