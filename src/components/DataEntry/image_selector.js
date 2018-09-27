import React, {Component, Fragment} from 'react';
import { SectionHeader } from '../Styled/styled'
import { DataContext } from '../Contexts/contexts'

export default class ImageSelector extends Component{
    constructor(props){
    super(props)
        this.state={
            
        }
    }

    render(){
        return(
            <DataContext.Consumer>
                {dataContext => 
                <Fragment>
                 <SectionHeader theme={dataContext.state.theme_style} className='sh'> IMAGE SELECTOR </SectionHeader>
                 <h1>Image Selector goes Here!</h1>        
                </Fragment>
                }
            </DataContext.Consumer>
        );
    }
}