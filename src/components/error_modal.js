import React, { Component } from 'react';
import { Context } from './contexts/contexts'

class ErrorModal extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <Context.Consumer>
          {context => (
            <Error>{!context.state.display_form && context.state.error_message}</Error>
          )}

        </Context.Consumer>
      </div>
    );
  }
}

export default ErrorModal;

const Error = styled.h4`
color: ${DLF_Pink};
`