import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import DayJS from 'react-dayjs';

export default function WeekCard(props) {

    let isToday = props.today;

        return (
            <Card>
                {isToday? <Card.Header>
                   <b> {props.weekday} <br></br> {props.date} </b>
                </Card.Header> : 
                <Card.Header>
                    {props.weekday} <br></br> {props.date}   
                </Card.Header>}
                
                <ListGroup variant="flush">
                    <ListGroup.Item>Breakfast</ListGroup.Item>
                    <ListGroup.Item>Lunch</ListGroup.Item>
                    <ListGroup.Item>Dinner</ListGroup.Item>
                </ListGroup>
            </Card>
      );
}
