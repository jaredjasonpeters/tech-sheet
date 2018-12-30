import React from "react";
import { FlexOuterWrapper, DLF_Green } from "../../Styled/";
import styled, { css } from "styled-components";
import { Mutation } from "react-apollo";
import { EDIT_TITLE_MUTATION } from "../../../resolvers/Mutations/edit_title_mutation";
import { Redirect } from "react-router-dom";
import { LoginConsumer } from "../../Providers/login_provider";
import { DataConsumer } from "../../Providers/data_provider";

export default function UserPanel() {
  
  //look at proper way to set-up initial state

    return (
      <LoginConsumer>
      {({title, editTitle, name, profile_image, logoutUser, isAuthenticated }) => {
        return (
          <DataConsumer>
          {({theme_style, }) => {
            var initTextColor = theme_style === "DLF_BLK" ? "black" : "white";
            return (
              <FlexOuterWrapper
              flex-dir="row"
              width="auto"
              align-self="flex-end"
              height="100%"
              pad="0 0 0 40px"
              >
              <FlexOuterWrapper flex-dir="row" height="100%">
          <ProfileImage
            src={profile_image}
            alt="80px by 80px image of user"
          />
          <UserName textColor={initTextColor}>{name}</UserName>
          <UserOptions textColor={initTextColor}>
          <Mutation
          mutation={EDIT_TITLE_MUTATION}
              variables={{ title }}
              onCompleted={editTitle}
              onError={({ graphQLErrors }) => {
                graphQLErrors.map(({ message }) =>
                this.setState({ error: message })
                );
              }}
              >
              {editTitleMutation => (
                <a onClick={editTitleMutation}>
                <li>Change Title</li>
                </a>
                )}
                </Mutation>
                <LogoutUser onClick={logoutUser}>LOGOUT</LogoutUser>
                {!isAuthenticated && <Redirect to="/" />}
                </UserOptions>
                <UserRole textColor={initTextColor}>
                {title.toUpperCase()}
                </UserRole>
                </FlexOuterWrapper>
                </FlexOuterWrapper>
                )
              }}
              </DataConsumer> 
              )
            }}
            </LoginConsumer>
              );
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
`;

const UserOptions = styled.ul`
flex-grow: 1
color: ${props => props.textColor || "black"}
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
`;
const UserName = styled.h2`
flex-grow: 1
color: ${props => props.textColor || "black"}
@import url('https://fonts.googleapis.com/css?family=Nunito:800,400');
font-family: 'Nunito', sans-serif;
font-size: 15px;
font-weight: 800;
margin-left: 20px;
`;

const UserRole = styled.h3`
color: ${props => props.textColor || "black"}
font-family: 'Michroma', sans-serif;
letter-spacing: 4px;
flex-grow: 1;
align-self: center
text-align: center
font-size: 10px;
`;
const LogoutUser = styled.h5`
  color: white;
  cursor: pointer;
`;
