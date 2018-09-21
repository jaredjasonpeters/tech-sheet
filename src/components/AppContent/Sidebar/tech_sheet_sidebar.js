import React, { Component, Fragment } from 'react';
import styled from 'styled-components'
import { DataContext } from '../../Contexts/contexts'
import {DLF_Green} from '../../Styled/styled'

export default class TechSheetSidebar extends Component {
    constructor(props) {
        super(props)
        this.state = {
                theme_style: props.dataContext.state.theme_style,
                data: {
                    DLF_Pickseed_Pro_Turf: {
                        techsheets: [
                            'pro turf one',
                            'pro turf two',
                            'pro turf three',
                            'pro turf four',
                            'pro turf five',
                            'pro turf six',
                        ]  
                    },
                    DLF_Pickseed_Forage: {
                        techsheets: [
                            'forage one',
                            'forage two',
                            'forage three',
                            'forage four',
                            'forage five',
                            'forage six',
                        ]  
                    },
                    Seed_Research_of_Oregon: {
                        techsheets: [
                            'sro one',
                            'sro two',
                            'sro three',
                            'sro four',
                            'sro five',
                            'sro six',
                        ]  
                    },
                
                }
        }
    }

    componentDidMount() {

        var Sidebar = document.getElementById('sidebar-container');
        Sidebar.style.transition = 'none'
        Sidebar.style.opacity = 0;         
      

        setTimeout(() => {
            Sidebar.style.transition = 'opacity 750ms ease-in'
            Sidebar.style.opacity = 1
        }, 750)
    }

    componentDidUpdate(prevProps, prevState){
        const {theme_style} = prevProps.dataContext.state
       
        if(theme_style !== this.props.dataContext.state.theme_style) {
            var Sidebar = document.getElementById('sidebar-container');
            Sidebar.style.transition = 'none'
            Sidebar.style.opacity = 0;  
            
            setTimeout(() => {
                Sidebar.style.transition = 'opacity 750ms ease-in'
                Sidebar.style.opacity = 1
            }, 750)
        }
    }

    render() {

        
        return (
            <DataContext.Consumer>
                {context => (
                    context.state.theme_style !== 'DLF_BLK' &&
                    <SidebarContainer context={context.state.theme_style}>

                        {
                            this.state.data[context.state.theme_style].techsheets.map(v => 
                                    <a 
                                    href=""
                                    key={`ts_link-${v}`}>
                                        <li 
                                            key={`ts-${v}`}>
                                            {v.toUpperCase()}
                                        </li>
                                    </a>
                                )
                        } 
                        
                    </SidebarContainer>
                )}

            </DataContext.Consumer>
        );
    }
}

const SidebarContainer = styled.ul`
    width: 20%;
    flex-grow: 1;
    border: 3px solid white;
    font-family: Michroma, sans-serif;
    font-size: 14px;
    list-style-type: none;
    padding: 40px;
    border-radius: 5px;
    color: white;

    a {
        text-decoration: none;
        color: white;
        transition: transform 500ms;
    }

    a:hover {
        text-decoration: underline;
        transform: scale(1.4);
        position: relative;
        left: -10px;
    }


    li {
        margin: 10px 0 10px 0;
    }
`

