import React, { Component, Fragment } from 'react'
import { FlexOuterWrapper, FlexInnerWrapper, DLF_Green } from '../../Styled/styled'
import styled, { css } from 'styled-components'
import {Colors} from '../../../utils/utils'


export default class UserPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: this.props.loginContext.state.name,
            user_role: 'Turf Scientist',
            profile_image_url: 'https://www.dlfpickseed.com/Files/Images/DLF_Pickseed_USA/Staff_Images/Leah_Brilman.jpg',
            user_options: [
                'Edit Account',
                'Change Image',
                'Change Title'
            ],
        }
    }

    render() {

        var initTextColor = this.props.dataContext.state.theme_style === 'DLF_BLK' ? 'black' : 'white';
       
        return (


            <FlexInnerWrapper flex-dir="row" width="auto" align-self="flex-end" height="100%" pad="0 0 0 40px">
                <FlexInnerWrapper flex-dir="row" height="100%">
                    <ProfileImage
                        src={this.state.profile_image_url}
                        alt="80px by 80px image of user" />
                    <UserName 
                        textColor={initTextColor}>
                        {this.state.name}
                    </UserName>
                    <UserOptions 
                        textColor={initTextColor}>
                        {this.state.user_options.map((v, i) => <a key={`link-${i}`}><li key={`option-${i}`}>{v}</li></a>)}
                    </UserOptions>
                    <UserRole 
                        textColor={initTextColor}>
                        {this.state.user_role.toUpperCase()}
                    </UserRole>
                </FlexInnerWrapper>
            </FlexInnerWrapper>

        )
    }
}


const ProfileImage = styled.img`
 flex-basis: auto;
 align-self: center;
width: 50px;
height: 50px;
border-radius: 90px;
object-fit: cover;
border: 3px solid white
transition: border 100ms;
&:hover 
    {
    border: 3px solid ${DLF_Green}
    }
`

const UserOptions = styled.ul`
flex-grow: 1
color: ${props => props.textColor || 'black'}
li {
    list-style-type: none
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 13px;
}
a {
    text-decoration: none;
    cursor: pointer;
    transition: transform 400ms;
}
a: hover {
    font-size: 16px;
    font-weight: 800;
    text-decoration: underline;
    transform: scale(1.4);
    position: relative;
    left: -10px;
    
}
`
const UserName = styled.h2`
flex-grow: 1
color: ${props => props.textColor || 'black'}
@import url('https://fonts.googleapis.com/css?family=Nunito:800,400');
font-family: 'Nunito', sans-serif;
font-size: 15px;
font-weight: 800;
margin-left: 20px;
`

const UserRole = styled.h3`
color: ${props => props.textColor || 'black'}
font-family: 'Michroma', sans-serif;
letter-spacing: 4px;
flex-grow: 1;
align-self: center
text-align: center
font-size: 10px;
`