import React, { Component } from 'react'
import { Card } from 'semantic-ui-react';


const items = [
    {
      header: 'R350.00',
      description: 'Leverage agile frameworks to provide a robust synopsis for high level overviews.',
      meta: 'Johannesburg, Gauteng',
    },
    {
      header: 'R500.00',
      description: 'Bring to the table win-win survival strategies to ensure proactive domination.',
      meta: 'Pretoria, Gauteng',
    },
    {
      header: 'R800.00',
      description:
        'Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.',
      meta: 'Soweto, Gauteng',
    },
  ]

 export default class BookItem extends Component{

    render(){
        return <Card.Group items={items} /> 
    }
 }