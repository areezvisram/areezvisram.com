import React from 'react';
import { makeStyles, List, ListItem, ListItemIcon, ListItemText, Typography, Box } from '@material-ui/core';
import { ArrowRightAlt } from '@material-ui/icons';

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

const ExperienceObjectDescription = ({ listItems }) => {
    const classes = useStyles();
    return (          
        // <Box display='flex' flexDirection='column' flex={1} alignItems='center' mx='auto' marginTop='2em'>            
            <List className={classes.white} dense>
                {
                    listItems.map((listItem) => {
                        return (
                            <ListItem>
                                <ListItemIcon style={{ marginRight: '-20px' }}>
                                    <ArrowRightAlt className={classes.icon} />
                                </ListItemIcon>
                                <ListItemText primary={listItem} classes={{primary: classes.text}}/>
                            </ListItem>
                        )
                    })
                }
            </List>            
        // </Box>  
    );
};

export default ExperienceObjectDescription;
