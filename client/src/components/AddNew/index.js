import React, { useState } from "react"; //State would probably be used to display this card if the user doesn't have the max number of portfolios associated with their account
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap';

function AddNew(props) {
    return (
        <Card style={{ width: '20rem' }} className="text-center">
            <Card.Body>
                <Card.Title>Add New Portfolio</Card.Title>
            </Card.Body>
        </Card> 
    )
}

//Basically a bootstrap card the same size as the displayed cards, but should behave as a button that redirects
//to the "create portfolio" page. Maybe? Fuck if I know


export default AddNew;