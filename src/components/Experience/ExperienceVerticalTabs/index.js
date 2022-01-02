import React, { useState } from 'react';
import { Box, Tabs, Tab , makeStyles} from '@material-ui/core';
import ExperienceVerticalTabPanel from './ExperienceVerticalTabPanel';

const fakeData = [
    {
        company: "Signiant",
        position: "Co-op Developer - Full Stack Developer",
        startDate: "January 2021",
        endDate: "August 2021",
        description: ['Signiant description 1', 'Signiant description 2', 'Signiant description 3']
    },
    {
        company: "SalonEverywhere",
        position: "Developer Intern",
        startDate: "May 2020",
        endDate: "September 2020",
        description: ['SE description 1', 'SE description 2', 'SE description 3']
    },
    {
        company: "MISA",
        position: "Executive Member",
        startDate: "September 2019",
        endDate: "Present",
        description: ['MISA description 1', 'MISA description 2', 'MISA description 3']
    },
]

const useStyles = makeStyles((theme) => ({ 
    white: {
        color: theme.palette.primary.contrastText,        
    },
}));

const a11yProps = (index) => {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const ExperienceVerticalTabs = () => {    
    const classes = useStyles();

    const [value, setValue] = useState(0);

    const handleTabChange = (event, newTabValue) => {
        setValue(newTabValue)
    };
    
    return (                         
        <Box sx={{ flexGrow: 1, display: 'flex' }}>
            <Tabs orientation='vertical' variant='scrollable' value={value} onChange={handleTabChange} sx={{ borderRight: 1, borderColor: 'divider' }}>
                <Tab label="Signiant" {...a11yProps(0)} className={classes.white} />
                <Tab label="SalonEverywhere" {...a11yProps(1)} className={classes.white} />
                <Tab label="MISA" {...a11yProps(2)} className={classes.white} />
            </Tabs>
            <ExperienceVerticalTabPanel value={value} index={0} experienceObject={fakeData[0]} />
            <ExperienceVerticalTabPanel value={value} index={1} experienceObject={fakeData[1]} />
            <ExperienceVerticalTabPanel value={value} index={2} experienceObject={fakeData[2]} />
        </Box>
    );
};

export default ExperienceVerticalTabs;