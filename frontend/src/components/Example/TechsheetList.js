import React, {Component} from 'react'
import TechSheetExample from './TechsheetExample.js'

export default class TechSheetList extends Component {
  render(){
    const techsheetsToRender = [
      {
        id: '1',
        title: 'hello',
      },
      {
        id: '2',
        title: 'bye'
      },
    ]
    return (
      <div>{techsheetsToRender.map(ts => <TechSheetExample key={ts.id} techsheet={ts}/>)}</div>
    )
  }
}