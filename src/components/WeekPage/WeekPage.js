import React, { useEffect, useState, useRef} from 'react';
import WeekCard from '../WeekCard/WeekCard';
import { Container, Row, CardGroup } from 'react-bootstrap';
import AddMeal from '../AddMeal/AddMeal';
import update from 'immutability-helper';
import dayjs from 'dayjs';

export default function WeekPage() {

    const [weekdays, setWeekdays] = useState([]);
    const [reset, setReset] = useState(false);
    const [mealData, setMealData] = useState("");
    const [mealList, setMealList] = useState(JSON.parse(localStorage.getItem("mealList")));
    const [newMeal, setNewMeal] = useState("");
    const [activeMeal, setActiveMeal] = useState("");
    const [activeDate, setActiveDate] = useState("");
    const [show, setShow] = useState(false);

    useEffect(() => {

        const weekdayList = [];
        const dayjs = require('dayjs');
        for (var i = 0; i <= 6; i++) {
                weekdayList.push({
                day: dayjs().day(i).format('dddd').toString(),
                date: dayjs().day(i).format('MMMM D').toString(),
                breakfast: "",
                lunch: "",
                dinner: "",
                isToday: false
            });
        }

        let today = dayjs().format('MMMM D').toString();
        for (var j = 0; j < weekdayList.length; j++) {
            if (weekdayList[j].date === today) {
                weekdayList[j].isToday = true;
            }
        }
        

        if (!mealList) {
            setMealList([]);
        }

        const displayMeals = (weekdays, meals) => {
            if (meals.length > 0) {
                weekdays.forEach(day => {
                    for (var i = 0; i < meals.length; i++) {
                        if (meals[i].date === day.date) {
                            if (meals[i].meal === "Breakfast") {
                                day.breakfast = meals[i].food;
                            } else if (meals[i].meal === "Lunch") {
                                day.lunch = meals[i].food;
                            } else if (meals[i].meal === "Dinner") {
                                day.dinner = meals[i].food;
                            }
                        }
                    } })
                }
            }


        if(mealList) {
            const mealsData = displayMeals(weekdayList, mealList);
        }  
        

        setWeekdays(weekdayList);
        console.log(mealList);

    }, [reset])

    const handleClose = ()=> {
        setShow(false);
    }
    
    const handleShow = (event) => {
        const btnId = event.target.id.toString();
        console.log(btnId);
        setShow(true);
        findData(btnId);
    }

    const findData = (btnid) => {
        if (btnid.charAt(0) === 'b') {
            setActiveMeal("Breakfast");
        } else if (btnid.charAt(0) === 'l') {
            setActiveMeal("Lunch");
        } else if (btnid.charAt(0) === 'd') {
            setActiveMeal("Dinner");
        }

        const length = btnid.length - 1;
        const date = btnid.substr(1, length);
        console.log(date);
        setActiveDate(date);
    }

    const handleChange = (event) => {
        setMealData(event.target.value)
      }
    
    const saveMeal = (event) => {
        event.preventDefault();
        let newMeal = {
            date: activeDate,
            meal: activeMeal,
            food: mealData
        };
        setNewMeal(newMeal);
        let newMealList = [...mealList, newMeal];
        localStorage.setItem("mealList", JSON.stringify(newMealList));
        setMealList(newMealList);
        setReset(!reset);
        handleClose();
    }

    return (
        <Container>
                <Row>
                    <CardGroup>
                    {weekdays.map((date, index)=>{
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
                        handleShow= {handleShow}
                        breakfast= {date.breakfast}
                        lunch = {date.lunch}
                        dinner= {date.dinner} />
                        );})
                    }
                    </CardGroup>

                    <AddMeal
                        show = {show}
                        handleClose = {handleClose}
                        handleChange = {handleChange}
                        saveMeal = {saveMeal}
                        meal = {activeMeal}
                        date = {activeDate}
                    />
                </Row> 
            </Container>
        );
    } 
