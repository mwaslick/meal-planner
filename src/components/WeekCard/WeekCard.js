import React, { useState } from 'react';
import { Container, Row, Col, Card, ListGroup, ListGroupItem } from 'react-bootstrap';

export default function WeekCard(props) {

  return (
        <Card>
            <Card.Header>{props.weekday}</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>Breakfast</ListGroup.Item>
                <ListGroup.Item>Lunch</ListGroup.Item>
                <ListGroup.Item>Dinner</ListGroup.Item>
            </ListGroup>
        </Card>
  );
}
