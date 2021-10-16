import {React, Component} from 'react';
import WeekCard from '../WeekCard/WeekCard';
import { Container, Row, CardGroup } from 'react-bootstrap';
import AddMeal from '../AddMeal/AddMeal';

export default class WeekPage extends Component {

   constructor() {
        super();
        const dayjs = require ('dayjs');
        const weekdays = [];
        const mealData = [];
        const activeMeal = "";
        const activeDate = "";
        this.state = {show: false};
        
        this.handleChange = this.handleChange.bind(this);
        this.saveMeal = this.saveMeal.bind(this);
        
        for (var i = 0; i <= 6; i++) {
            weekdays.push({
                day: dayjs().day(i).format('dddd').toString(),
                date: dayjs().day(i).format('MMMM D').toString(),
                isToday: false
            });
        }

        this.state = {weekdays, mealData, activeMeal, activeDate};
    }

    handleClose = ()=> {
        this.setState({show: false})
    }
    
    handleShow = (event) => {
        const btnId = event.target.id.toString();
        console.log(btnId);
        this.setState({show:true});
        this.findData(btnId);
    }

    findData(btnid) {
        if (btnid.charAt(0) === 'b') {
            this.setState({activeMeal:"Breakfast"});
        } else if (btnid.charAt(0) === 'l') {
            this.setState({activeMeal:"Lunch"});
        } else if (btnid.charAt(0) === 'd') {
            this.setState({activeMeal:"Dinner"});
        }

        const length = btnid.length - 1;
        const date = btnid.substr(1, length);
        console.log(date);
        this.setState({activeDate: date});
    }

    handleChange(event) {
        this.setState({mealData: event.target.value});
      }
    
    saveMeal(event) {
        console.log(this.state.mealData);
        console.log(event.target.parentNode);
        event.preventDefault();
    }
    
    componentDidMount() {
        this.checkToday();
    }

    checkToday() {
        const dayjs = require('dayjs');
        let today = dayjs().format('MMMM D').toString();
        let newWeekdays = this.state.weekdays;
        for (var i = 0; i < newWeekdays.length; i++) {
            if (newWeekdays[i].date === today) {
                newWeekdays[i].isToday = true;
            }
        }
        this.setState({weekdays: newWeekdays});
    }

   render() {
        return (
            <Container>
                <Row>
                    <CardGroup>
                    {this.state.weekdays.map((date, index)=>{
                        return (
                        <WeekCard 
                        key={index}
                        id={index}
                        bid= {'b' + date.date}
                        lid= {'l' + date.date}
                        did= {'d' + date.date}
                        weekday = {date.day} 
                        date = {date.date} 
                        today = {date.isToday} 
                        handleShow= {this.handleShow}/>
                        );})
                    }
                    </CardGroup>

                    <AddMeal
                        show = {this.state.show}
                        handleClose = {this.handleClose}
                        handleChange = {this.handleChange}
                        saveMeal = {this.saveMeal}
                        meal = {this.state.activeMeal}
                        date = {this.state.activeDate}
                    />
                </Row> 
            </Container>
        );
    } 
}
