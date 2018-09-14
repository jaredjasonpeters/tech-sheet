import React, {Component} from 'react'

export default class TechSheetExample extends Component {
  render(){
    return (
      <div>
        <div>
          {this.props.techsheet.title} {this.props.techsheet.id}
        </div>
      </div>
    )
  }
}