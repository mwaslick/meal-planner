import React, {useState} from 'react';
import Button from '@mui/material/Button';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@mui/material/AppBar'
import { useTheme } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function MealBlock(props) { 

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(0);
    const theme = useTheme();

    const handleTabChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleTabChangeIndex = (index) => {
      setValue(index);
    };

    const toggleDrawer = (anchor, open) => (event) => {
      if (
        event &&
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return;
      }
  
      setOpen(open);
    };

    return (
          <React.Fragment>
            <Button variant="contained" data-meal={props.meal} onClick={toggleDrawer("right", true)}>
                {props.food}
            </Button> 
            <SwipeableDrawer 
              anchor= "right"
              open={open}
              onClose={toggleDrawer("right", false)}
              onOpen={toggleDrawer("right", true)}>
              <Box
                sx={{ width: 450 }}
                role="presentation"
                >
              <AppBar position="static">
                <Tabs
                value={value}
                onChange={handleTabChange}
                indicatorColor="secondary"
                textColor="inherit"
                variant="fullWidth"
                aria-label="full width tabs example"
                >
                <Tab label="Meal Info" {...a11yProps(0)} />
                </Tabs>
              </AppBar>
            <SwipeableViews
              axis={'x'}
              index={value}
              onChangeIndex={handleTabChangeIndex}
            >
              <TabPanel value={value} index={0} dir={theme.direction}>
                <Typography variant="h5" gutterBottom component="div">
                  {props.date} : {props.meal} 
                </Typography>

                
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '40ch' },
                  }}
                  noValidate
                  autoComplete="off">
                  <b> Meal Name: </b> <br />
                  {props.edit ? 
                    <TextField
                      id="food-name"
                      label="Edit Meal Name"
                      placeholder={props.food}
                      variant="filled"
                    />
                  :
                  <div> {props.food} </div>
                  }
      
                  <b>Add ingredients?</b>
                  {props.edit ? 
                       <TextField
                       id="standard-multiline-static"
                       label="Ingredients"
                       multiline
                       rows={3}
                       placeholder="Add ingredients?"
                       variant="filled"
                     /> :
                  <div>  </div>
                  }

                <b>Add recipe?</b>
                {props.edit ? 
                       <TextField
                       id="standard-multiline-static"
                       label="Recipe"
                       multiline
                       rows={3}
                       placeholder="Add recipe?"
                       variant="filled"
                     /> :
                  <div>  </div>
                  }


                <Stack direction="row" spacing={1}>
                  <Button variant="contained" onClick={props.toggleEdit}>
                    Edit Meal
                  </Button>

                  {props.edit ? 
                    <Button variant="contained" id={props.food} onClick = {props.editMeal}>
                      Save Meal
                      </Button> : <></>}
                  <Button variant="contained" id={props.id} onClick={props.deleteMeal}>
                    Delete Meal
                  </Button>
                </Stack>
                </Box>
              </TabPanel>
            </SwipeableViews>
          </Box>
        </SwipeableDrawer>
    </React.Fragment>
    );  
}