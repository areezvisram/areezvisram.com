import React, { useState, useEffect } from 'react';
import { Box, Tabs, Tab , makeStyles} from '@material-ui/core';
import ExperienceVerticalTabPanel from './ExperienceVerticalTabPanel';
import { useSelector } from 'react-redux';
import { useMediaQuery, useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({ 
    white: {
        color: theme.palette.primary.contrastText,        
    },

    box: {
        flexGrow: 1,
        display: 'flex'
    }
}));

const a11yProps = (index) => {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const ExperienceVerticalTabs = () => {    
    const classes = useStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

    const [value, setValue] = useState(0);

    const handleTabChange = (event, newTabValue) => {
        setValue(newTabValue)
    };

    const [experience, setExperience] = useState([]);        
    const [error, setError] = useState(false);

    const state = useSelector((state) => state.tokenReducer);
    const token = state.items;

    useEffect(() => {          
        if(!state.loading) {                                
            fetch("http://localhost:5000/experience/getExperience", {
                method: 'GET',
                headers: {
                    'Access-Token': token
                }
            })
            .then((response) => {
                if(response.ok) {
                    return response.json();
                }   
                throw response;         
            })
            .then((data) => {                     
                setExperience(data.experience);
            })
            .catch((error) => {
                setError(error);
            });  
        }
    }, [state.loading]);       
    
    return (                         
        <Box className={!fullScreen ? classes.box : null}>
            <Tabs orientation={!fullScreen ? 'vertical' : null} variant='scrollable' value={value} onChange={handleTabChange} sx={{ borderRight: 1, borderColor: 'divider' }}>
                {
                    experience.map((experienceObj, index) => {
                        return (
                            <Tab label={experienceObj.company} {...a11yProps(index)} className={classes.white} />
                        )                        
                    })
                }                
            </Tabs>
            {
                experience.map((experienceObj, index) => {
                    return (
                        <ExperienceVerticalTabPanel value={value} index={index} experienceObject={error ? [] : experienceObj} />
                    )                    
                })
            }            
        </Box>
    );
};

export default ExperienceVerticalTabs;