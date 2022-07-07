import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'react';

class EditRast extends React.Component {
    emptyItem ={
        Id: '',
        Ort: '',
        PLZ: '',
        Strasse: '',
        Hausnummer: '',
    };

    constructor(props) {
        super(props);
        this.state ={
            item: this.emptyItem
        };
        this.handleChange =this.handleChange(this);
        this.handleSubmit = this.handleSubmit(this);
    }

    async componentDidMount() {
        if(this.props.match.params.id !== 'new'){
            const location = await (await fetch(`/locations/${this.props.match.params.id}`)).json();
            this.setState({item: location});
        }
    }

    handleChange(event) {
        const target =event.target;
        const value = target.value;
        const location = target.location;
        let item = {...this.state.item};
        item[location] = value;
        this.setState({item});
    }
    async handleSubmit (event) {
        event.preventDefault();
        const {item} = this.state;

        await fetch('/locations' + (item.Id ? '/' + item.Id : ''), {

            method: (item.Id) ? 'PUT' : 'POST', 
            headers: {
                'Accept' : 'application/json',
                'Content-Type' : 'application/json'

            },
            body: JSON.stringify(item),

        });
        this.props.history.push('/locations');
    }

    render(){
        const {item} = this.state;
        const title = <h2>{item.Id ? 'Edit Location' : 'Add Location'}</h2>
    
    return <div>
        {title}
        <Form onSubmit ={this.handleSubmit}>
            <FormGroup>
                <Label for = "ort">Ort</Label>
                <Input type ="text" name = "Ort" value={item.Ort || ''}
                onChange={this.handleChange} autoComplete = "ort"/>
            </FormGroup>
            <FormGroup>
                <Label for="pLZ">PLZ</Label>
                <Input type="text" name="PLZ" value={item.PLZ || ''}
                    onChange={this.handleChange} autoComplete="pLZ" />
            </FormGroup>
            <FormGroup>
                <Label for="strasse">PLZ</Label>
                <Input type="text" name="Strasse" value={item.strasse || ''}
                    onChange={this.handleChange} autoComplete="strasse" />
            </FormGroup>
            <FormGroup>
                <Label for="hausnummer">PLZ</Label>
                <Input type="text" name="Hausnummer" value={item.Hausnummer || ''}
                    onChange={this.handleChange} autoComplete="hausnummer" />
            </FormGroup>
            <FormGroup>
                <Button color ="primary" type="submit">Save</Button>
                <Button color="secondary" tag={Link} to="/locations">Cancel</Button>
            </FormGroup>
        </Form>
    </div>
    }

}

export default EditRast;