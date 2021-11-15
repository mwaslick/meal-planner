import React from 'react';
import { Card, ListGroup} from 'react-bootstrap';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack'
import MealBlock from '../MealBlock/MealBlock';
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
                    
                    <ListGroup.Item id="breakfast" style={{height: '10rem'}} data-day={props.id}>
                        <Stack 
                        direction= "column"
                        justifyContent="space-around"
                        spacing={4}>
                        <Card.Text style={{height: '4rem'}}>
                        Breakfast <br></br>
                        {props.breakfast !== "" ? 
                            <MealBlock
                            meal = "Breakfast"
                            food = {props.breakfast}
                            open = {props.open}
                            handleOpen = {props.handleOpen}
                            handleClose = {props.handleClose}
                            date={props.date}
                            deleteMeal={props.deleteMeal}
                            id={props.bid}
                            editMeal={props.editMeal}
                            edit = {props.edit}
                            openEdit= {props.openEdit}
                            closeEdit = {props.closeEdit}  
                            />  :
                        <></>}
                        </Card.Text>
                        <Button className="addmeal" variant="text" id={props.bid} onClick=  {props.handleShow}>Add Meal</Button>
                        </Stack>
                    </ListGroup.Item>
                    <ListGroup.Item id="lunch" style={{height: '10rem'}} data-day={props.id}>
                        <Stack 
                            direction= "column"
                            justifyContent="space-around"
                            spacing={4}>
                        <Card.Text style={{height: '4rem'}}>
                        Lunch <br></br>
                        {props.lunch !== "" ? 
                         <MealBlock
                         meal = "Lunch"
                         food = {props.lunch}
                         open = {props.open}
                         handleOpen = {props.handleOpen}
                         handleClose = {props.handleClose}
                         date={props.date}
                         deleteMeal={props.deleteMeal}
                         id={props.lid}
                         editMeal={props.editMeal}
                         edit = {props.edit}
                         openEdit= {props.openEdit}
                        closeEdit = {props.closeEdit}                   
                        />  :
                        <></>}
                        </Card.Text>
                        <Button className="addmeal" variant="text" id={props.lid} onClick={props.handleShow}>Add Meal</Button>
                        </Stack>
                    </ListGroup.Item>
                    <ListGroup.Item id="dinner" style={{height: '10rem'}} data-day={props.id}>
                        <Stack 
                            direction= "column"
                            justifyContent="space-around"
                            spacing={4}>
                        <Card.Text style={{height: '4rem'}}>
                        Dinner<br></br>
                        {props.dinner !== "" ? 
                        <MealBlock
                            meal = "Dinner"
                            food = {props.dinner}
                            open = {props.open}
                            handleOpen= {props.handleOpen}
                            handleClose = {props.handleClose}
                            date={props.date}
                            deleteMeal={props.deleteMeal}
                            id={props.did}
                            editMeal={props.editMeal}
                            edit = {props.edit}
                            openEdit= {props.openEdit}
                            closeEdit = {props.closeEdit}  
                        /> :
                        <></>}
                        </Card.Text>
                        <Button className="addmeal" variant="text" id={props.did} onClick={props.handleShow}>Add Meal</Button>
                        </Stack>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
      );
}
