import React, { Component, Fragment } from 'react';
import { SectionHeader, FlexInnerWrapper, FlexOuterWrapper, $Input, $Label, Checkbox, SubmitButton } from '../Styled/styled'
import { DataContext } from '../Contexts/contexts'
import styled from 'styled-components'


class ImageSelector extends Component {
    constructor(props) {
        super(props)
        this.state = {
           
        }
    }

    render() {
        return (
            <DataContext.Consumer>
                {dataContext =>
                    <Fragment>
                        <SectionHeader theme={dataContext.state.theme_style} className='sh'> IMAGE SELECTOR </SectionHeader>
                        <FlexOuterWrapper flex-dir="row" justify="center">
                            {dataContext.state.image && <SelectedImage src={dataContext.state.image} alt='plant' />}
                            <SubmitButton
                                submit
                                onClick={dataContext.state.displayModal}
                                flex-grow="1"
                            >Select Image
                            </SubmitButton>

                        </FlexOuterWrapper>
                    </Fragment>
                }
            </DataContext.Consumer>
        );
    }
}

export default ImageSelector

const SelectedImage = styled.img`
width: 250px;
height: 250px;
align-self: center;
margin: 20px;
border-radius: 10px;
object-fit: cover;

`