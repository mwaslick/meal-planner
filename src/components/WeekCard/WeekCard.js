import React from 'react';
import { Button, Card, ListGroup} from 'react-bootstrap';
import './WeekCard.css';

export default function WeekCard(props) {

    let isToday = props.today;

        return (
            <Card>
                <Card.Header>
                    {isToday? <Card.Title>
                        <b> {props.weekday} </b>
                    </Card.Title> : 
                    <Card.Title>
                    {props.weekday}    
                    </Card.Title>}

                    {isToday? <Card.Subtitle>
                   <b> {props.date} </b>
                    </Card.Subtitle> : 
                    <Card.Subtitle>
                    {props.date}    
                    </Card.Subtitle>}
            
                </Card.Header>
                
                <ListGroup variant="flush">
                    <ListGroup.Item id="breakfast" data-day={props.id}>
                        <Card.Text>
                        Breakfast <br></br>
                        {props.foodData}
                        </Card.Text>
                        <Button variant="primary" id={props.bid} size="sm" onClick={props.handleShow}>Add Meal</Button>
                    </ListGroup.Item>
                    <ListGroup.Item id="lunch" data-day={props.id}>
                        <Card.Text>
                        Lunch <br></br>
                        {props.foodData}
                        </Card.Text>
                        <Button variant="primary" id={props.lid} size="sm" onClick={props.handleShow}>Add Meal</Button>
                    </ListGroup.Item>
                    <ListGroup.Item id="dinner" data-day={props.id}>
                        <Card.Text>
                        Dinner<br></br>
                        {props.foodData}
                        </Card.Text>
                        <Button variant="primary" id={props.did} size="sm" onClick={props.handleShow}>Add Meal</Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
      );
}
