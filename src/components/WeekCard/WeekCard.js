import React, { useState } from 'react';
import { Button, Card, ListGroup, Row, Col, ListGroupItem } from 'react-bootstrap';
import DayJS from 'react-dayjs';
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
                    <ListGroup.Item>
                        <Card.Text>
                        Breakfast 
                        </Card.Text>
                        <Button variant="primary" size="sm">Add Meal</Button>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Card.Text>
                            Lunch
                        </Card.Text>
                        <Button variant="primary" size="sm">Add Meal</Button>
                    </ListGroup.Item>
                    <ListGroup.Item>
                    <Card.Text>
                        Dinner
                        </Card.Text>
                        <Button variant="primary" size="sm">Add Meal</Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
      );
}
