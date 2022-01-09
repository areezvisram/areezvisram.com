import React from 'react';
import { makeStyles, Typography, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({ 
    white: {
        color: theme.palette.primary.contrastText,        
    },
}));

const ExperienceObjectTechEnv = ({ techEnv = [] }) => {
    const classes = useStyles();
    return (          
        <Box>            
            <Typography className={classes.white} variant="h6" align="left">
                Technical Environment: 
            </Typography>  
            {
                techEnv.map((techEnvObj) => {
                    return (
                        <Typography className={classes.white} variant="h6" align="left">
                            {techEnvObj}
                        </Typography> 
                    )
                })
            }                 
        </Box>
    );
};

export default ExperienceObjectTechEnv;
