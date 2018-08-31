import React, { Component, Fragment } from 'react';

export default class TechSheetSidebar  extends Component {
    constructor(props){
        super(props)
        this.state = {
            techsheets: [
                'one',
                'tow',
                'three',
                'four',
                'five',
                'six'
            ]
        }
    }
    render() {
        return (
            <Fragment>
                <ul>
                    {this.state.techsheets.map(v=> <li key={`ts-${v}`}>{v}</li>)}
                </ul>
            </Fragment>
        );
    }
}