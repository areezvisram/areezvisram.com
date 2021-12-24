import React from 'react';
import { makeStyles, List, ListItem, ListItemIcon, ListItemText, Typography, Box } from '@material-ui/core';
import { DoubleArrow } from '@material-ui/icons';
import AboutExpandButton from './AboutExpandButton';

const useStyles = makeStyles((theme) => ({ 
    white: {
        color: theme.palette.primary.contrastText,        
    },

    blue: {
        color: theme.palette.secondary.main,
    },

    text: {
        fontSize: theme.spacing(2.5)
    },

    icon: {
        fill: theme.palette.primary.contrastText,
    },
}));

const AboutList = ({ title, listItems }) => {
    const classes = useStyles();
    return (          
        <Box display='flex' flexDirection='column' flex={1} alignItems='center' mx='auto' marginTop='2em'>
            <Typography className={classes.blue} variant="h5" align="left">
                {title}
            </Typography>    
            <List className={classes.white} dense>
                {
                    listItems.map((listItem) => {
                        return (
                            <ListItem>
                                <ListItemIcon>
                                    <DoubleArrow className={classes.icon} />
                                </ListItemIcon>
                                <ListItemText primary={listItem} classes={{primary: classes.text}}/>
                            </ListItem>
                        )
                    })
                }
            </List>
            <AboutExpandButton title={title} />
        </Box>  
    );
};

export default AboutList;
