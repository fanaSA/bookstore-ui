import React, { Component } from 'react'
import { Container, Grid,
    Header, Button, Input, 
    Divider, Select, Image, GridRow } 
    from 'semantic-ui-react'
import BookItem from '../item/BookItem';

const locations = [
    {key: "all", text: "South Africa", value: "all"},
    {key: "gp", text: "Gauteng", value: "gp"},
    {key: "mp", text: "Mpumalanga", value: "mp"}
]

export default class ContentContainer extends Component {
    
    render(){
        return (
            <Container textAlign="left">
                <Header as='h3'content='Find a Book' />
                <Divider/>
                <Input fluid 
                    icon={{ name: 'search', circular: true, link: true, inverted: true }} 
                    iconPosition="left"
                    placeholder="Search by ISBN, Title, Author..." 
                    onChange = {this.onInputChange}
                >
                    <Select options={locations} defaultValue="all" />
                    <input />
                    <Button type='submit'>Search</Button>
                </Input>
                <Grid container padded divided>
                    <Grid.Row>
                        <Grid.Column width={4}>
                            Filters
                            </Grid.Column>
                            <Grid.Column width={9}>
                                <BookItem />
                            </Grid.Column>
                            <Grid.Column width={3}>
                            Related Results/Alterbatives
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        )
    }
    
    onInputChange = (e) => console.log(e.target.value)
}