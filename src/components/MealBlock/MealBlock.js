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
    const [value, setValue] = React.useState(0);
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
                {props.date}<br />
                {props.meal} <br />
                {props.food} <br />

                <Button variant="contained" id={props.id} onClick={props.deleteMeal}>Delete Meal</Button>
              </TabPanel>
            </SwipeableViews>
          </Box>
        </SwipeableDrawer>
    </React.Fragment>
    );  
}