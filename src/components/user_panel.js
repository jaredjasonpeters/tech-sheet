import React, { Component, Fragment } from 'react'
import { Wrapper, DLF_Green } from './styled/styled'
import styled, { css } from 'styled-components'


export default class UserPanel extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Leah Brilman',
            user_role: 'Turf Scientist',
            profile_image_url: 'https://www.dlfpickseed.com/Files/Images/DLF_Pickseed_USA/Staff_Images/Leah_Brilman.jpg',
            user_options: [
                'Edit Account',
                'Change Image',
                'Change Title'
            ]
        }
    }

    render() {
        return (

            <UserPanelContainer>
                <Wrapper>
                    <ProfileImage src={this.state.profile_image_url} alt="80px by 80px image of user" />
                    <UserInfo>
                        <UserName>{this.state.name}</UserName>
                        <UserOptions>
                            {this.state.user_options.map((v, i) => <a key={`link-${i}`}><li key={`option-${i}`}>{v}</li></a>)}
                        </UserOptions>
                        <UserRole>{this.state.user_role}</UserRole>
                    </UserInfo>
                </Wrapper>
            </UserPanelContainer>

        )
    }
}

const UserPanelContainer = styled.div`
 
 height: 150px;
 width: 30%;
 background: rgba(0,50,25,0.15);
 border-radius: 0px 0px 0px 15px;
 flex-grow: 1;
 align-self: flex-start;
 padding: 20px 0 0px 50px;

 img:hover {
 border: 5px solid ${DLF_Green}
 }
`
const ProfileImage = styled.img`
 flex-basis: auto;
width: 80px;
height: 80px;
border-radius: 90px;
object-fit: cover;
border: 3px solid black
transition: border 100ms;
`

const UserInfo = styled.div`
flex-grow: 5
width: 50%;
height: 90px;
position: relative;
`
const UserOptions = styled.ul`
li {
    list-style-type: none
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
}
a {
    text-decoration: none;
    cursor: pointer;
    transition: color: 200ms;
}
a: hover {
    font-size: 20px;
    color: ${DLF_Green}
}
`
const UserName = styled.h2`
@import url('https://fonts.googleapis.com/css?family=Nunito:800,400');
font-family: 'Nunito', sans-serif;
font-size: 18px;
font-weight: 800;
margin-left: 20px;
`

const UserRole = styled.h3`
position: absolute
top: 0px; 
right: 30px;
font-family: 'Nunito', sans-serif;
`