import React, { useState } from 'react';
import WeekCard from '../WeekCard/WeekCard';
import { Container, Row, CardGroup } from 'react-bootstrap';

export default function WeekPage() {

    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    return (
        <Container>
            <Row>
                <CardGroup>
                {weekdays.map((day) => {
                    return (
                        <WeekCard
                        weekday = {day} />
                    )
                })}
                </CardGroup>
            </Row> 
        </Container>
  );
}
