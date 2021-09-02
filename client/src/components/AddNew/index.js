import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';

function AddNew() {
    return (
        <Card style={{ width: '20rem' }} className="text-center">
            <Card.Body>
                <Card.Title>Add New Portfolio</Card.Title>
            </Card.Body>
        </Card> 
    )
}

//Basically a bootstrap card the same size as the displayed cards, but should behave as a button that redirects
//to the "create portfolio" page. 


export default AddNew;