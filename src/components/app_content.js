import React, {Component} from 'react';
import TechSheetSidebar from './tech_sheet_sidebar';
import {Checkbox} from './styled/styled'

export default class AppContent extends Component{
    constructor(props){
    super(props)
        this.state={
            
        }
    }

    render(){
        return(
            <TechSheetSidebar/>
        );
    }
}
