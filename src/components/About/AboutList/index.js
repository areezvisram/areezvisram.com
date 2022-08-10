import React from 'react';
import { makeStyles, List, ListItem, ListItemIcon, ListItemText, Typography, Box } from '@material-ui/core';
import { DoubleArrow } from '@material-ui/icons';
import AboutExpandButton from './AboutExpandButton';
import PropTypes from 'prop-types';

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
                            <ListItem key={listItem.id}>
                                <ListItemIcon style={{ minWidth: '35px' }}>
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

AboutList.propTypes = {
    title: PropTypes.string,
    listItems: PropTypes.array
}

export default AboutList;
