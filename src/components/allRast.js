import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Button, ButtonGroup, Container, Table } from 'react';



class AllRast extends React.Component {

    constructor(props) {
        super(props);

        this.state = { items: [] };
        this.remove = this.remove.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:8080/locations/')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    items: data,
                })

            }

            );
        document.title = "All Rast";
    }

    async remove(id) {
        await fetch('/{id}',
         {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updateItems = [...this.state.items].filter(i => id.id !== id);
            this.setState({ items: updateItems });
        });
    }

    render() {
        const { items } = this.state;

        const AllRast = items.map(item => { 
            return <tr key={item.id} >
                <td style={{ whiteSpace: 'nowrap' }}>{item.ort}</td>
                <td>{item.pLZ}</td>
                <td>{item.strasse}</td>
                <td>{item.hausnummer}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/locations" + item.id}>Edit</Button>
                        <Button type="button" size="sm" color="danger" onClick={() => this.remove(item.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });



        return (
            <div>
               
                <Container fluid>
                    <div className="flex-container" >
                        <Button color="success" tag={Link} to="/">Add Location</Button>
                    </div>
                    <h2>RAST Telekom</h2>
                    <Table className="mt-4">
                        <thead>
                            <tr>
                                <th width="30%">Ort</th>
                                <th width="30%">PLZ</th>
                                <th width="30%">Strasse</th>
                                <th width="30%">Hausnummer</th>
                            </tr>
                        </thead>
                        <tbody>
                            {AllRast}
                        </tbody>
                    </Table>
                </Container>
            </div>



        );
    }





}



export default AllRast;