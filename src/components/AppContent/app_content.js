import React, { Component, Fragment } from 'react';
import TechSheetSidebar from './Sidebar/tech_sheet_sidebar';
import { Context } from '../Contexts/contexts'
import DataEntryForm from './data_entry_form'
import { FlexOuterWrapper, FlexInnerWrapper } from '../Styled/styled'
import styled from 'styled-components';

export default class AppContent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <Context.Consumer>
                {context => (
                    <FlexOuterWrapper pad="50px 0">
                        <FlexInnerWrapper id="sidebar-container">
                            {!context.state.display_form && <TechSheetSidebar />}
                        </FlexInnerWrapper>
                        <FlexInnerWrapper>
                            {context.state.display_form && <DataEntryForm />}
                        </FlexInnerWrapper>
                    </FlexOuterWrapper>
                )}
            </Context.Consumer>
        );
    }
}



