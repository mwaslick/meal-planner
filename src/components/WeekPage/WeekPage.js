import React, { useEffect, useState } from 'react';
import WeekCard from '../WeekCard/WeekCard';
import { Container, Row, Col, CardGroup } from 'react-bootstrap';
import AddMeal from '../AddMeal/AddMeal';
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
    const [mealShow, setMealShow] = useState(false);
    const [mealEdit, setMealEdit] = useState(false);

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
            displayMeals(weekdayList, mealList);
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

    const handleMealOpen = ()=> {
        setMealShow(true);
    }

    const handleMealClose = () => {
        setMealShow(false);
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

    const deleteMeal = (event) => {
        event.preventDefault();
        let mealDay = event.target.id.toString();
        findData(mealDay);
        let newMealList = [...mealList];
        console.log(activeMeal);
        let filteredMeals = newMealList.filter(function (listedMeal) {
            if (listedMeal.meal === activeMeal && listedMeal.date === activeDate) {
                return false;
            } else {
                return true;
            }
        });
        localStorage.setItem("mealList", JSON.stringify(filteredMeals));
        setMealList(filteredMeals);
        setReset(!reset);
    }

    const toggleEdit = () => {
        setMealEdit(!mealEdit);
    }

    const editMeal = (event) => {
        event.preventDefault();
        const oldMeal = event.target.id.toString();
        const newMealName = document.getElementById("food-name").value.toString();
        let newMealList = [...mealList];
        for (var i = 0; i < newMealList.length; i++) {
            if (newMealList[i].food.toString() === oldMeal) {
                newMealList[i].food = newMealName;
            }
        }
        localStorage.setItem("mealList", JSON.stringify(newMealList));
        setMealList(newMealList);
        setReset(!reset);
    }

    return (
        <Container>
                <Row>
                    <Col xs={{ span: 10, offset: 1 }}>
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
                        dinner= {date.dinner} 
                        open= {mealShow}
                        handleOpen = {handleMealOpen}
                        handleClose = {handleMealClose}
                        deleteMeal = {deleteMeal}
                        editMeal={editMeal}
                        toggleEdit= {toggleEdit}
                        edit = {mealEdit} />
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
                    </Col>
                </Row> 
            </Container>
        );
    } 
