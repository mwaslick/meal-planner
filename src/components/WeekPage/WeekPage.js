import {React, Component} from 'react';
import { render } from 'react-dom';
import WeekCard from '../WeekCard/WeekCard';
import { Container, Row, CardGroup } from 'react-bootstrap';
import DayJS from 'react-dayjs';

export default class WeekPage extends Component {

   constructor() {
        super();
        const dayjs = require ('dayjs');
        const weekdays = [];
        for (var i = 0; i <= 6; i++) {
            weekdays.push({
                day: dayjs().day(i).format('dddd').toString(),
                date: dayjs().day(i).format('MMMM D').toString(),
                isToday: false
            });
        }

        this.state = {weekdays};
    }

    componentDidMount() {
        this.checkToday();

    }

    checkToday() {
        const dayjs = require('dayjs');
        let today = dayjs().format('MMMM D').toString();
        let newWeekdays = this.state.weekdays;
        for (var i = 0; i < newWeekdays.length; i++) {
            if (newWeekdays[i].date == today) {
                newWeekdays[i].isToday = true;
            }
        }
        this.setState({weekdays: newWeekdays});
        console.log(this.state.weekdays);
    }

   render() {
        return (
            <Container>
                <Row>
                    <CardGroup>
                    {this.state.weekdays.map((date, index)=>{
                        return (
                        <WeekCard weekday = {date.day} date = {date.date} today = {date.isToday}/>
                        );})
                    }

                    </CardGroup>
                </Row> 
            </Container>
        );
   } 
}
