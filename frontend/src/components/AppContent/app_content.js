import React, { Component, Fragment } from 'react';
import TechSheetSidebar from './Sidebar/tech_sheet_sidebar';
import { DataContext } from '../Contexts/contexts'
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
            <DataContext.Consumer>
                {dataContext => (
                    <FlexOuterWrapper pad="50px 0">
                        <FlexInnerWrapper id="sidebar-container">
                            {!dataContext.state.display_form && <TechSheetSidebar dataContext={dataContext} />}
                        </FlexInnerWrapper>
                        <FlexInnerWrapper>
                            {dataContext.state.display_form &&
                                <div 
                                id="entry-form-wrapper"
                                style={{
                                    transition: 'opacity 1500ms cubic-bezier(.77,.18,.27,1.5)'
                                }}>
                                    <CloseDataEntry />
                                    <DataEntryForm />
                                </div>
                            }
                        </FlexInnerWrapper>
                    </FlexOuterWrapper>
                )}
            </DataContext.Consumer>
        );
    }
}

const CloseDiv = styled.div`
    width: 100%;
    color: #ce1141;
    font-size: 50px;
    cursor: pointer;
    text-align: center;
    background: white;
    opacity: 0;
    transition: font-size 200ms ease-in-out, opacity 400ms ease-in;
    &:hover {
        font-size: 60px;
    }
`

class CloseDataEntry extends Component {

    componentDidMount(){
        const CloseDiv = document.getElementById('close-div')
        setTimeout(() => {
            CloseDiv.style.opacity = 1
        }, 1750)
    }
    

    render(){
            return (
            <DataContext.Consumer>
                { dataContext =>
                    <CloseDiv id='close-div' onClick={dataContext.state.closeDataEntry}>
                        X
                    </CloseDiv>
                }
            </DataContext.Consumer>
        )
    }
}