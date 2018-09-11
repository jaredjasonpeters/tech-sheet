import React, { Component, Fragment } from 'react';
import TechSheetSidebar from './tech_sheet_sidebar';
import { Context } from './contexts/contexts'
import DataEntryForm from './data_entry_form'
import { FlexOuterWrapper, FlexInnerWrapper } from './styled/styled'
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
                        {!context.state.display_form && <TechSheetSidebar />}
                        <FlexInnerWrapper>
                            {context.state.display_form && <DataEntryForm />}
                        </FlexInnerWrapper>
                    </FlexOuterWrapper>
                )}
            </Context.Consumer>
        );
    }
}


const FlexWrapper = styled.div`
flex-grow: 1
`


