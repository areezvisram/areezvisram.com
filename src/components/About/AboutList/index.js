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
        fontSize: theme.spacing(2.5),
        width: '150%'
    },

    icon: {
        fill: theme.palette.primary.contrastText,
    },
}));

const AboutList = ({ title, listItems }) => {
    const classes = useStyles();
    const beginningListItems = listItems.slice(0, 5)
    return (
        <Box display='flex' flexDirection='column' flex={1} alignItems='center' mx='auto' marginTop='2em'>
            <Typography className={classes.blue} variant="h5" align="left">
                {title}
            </Typography>
            <List className={classes.white} dense>
                {
                    beginningListItems.map((listItem) => {
                        return (
                            <ListItem>
                                <ListItemIcon>
                                    <DoubleArrow className={classes.icon} />
                                </ListItemIcon>
                                <ListItemText primary={listItem} classes={{ primary: classes.text }} />
                            </ListItem>
                        )
                    })
                }
            </List>
            <AboutExpandButton title={title} listItems={listItems} />
        </Box>
    );
};

export default AboutList;
