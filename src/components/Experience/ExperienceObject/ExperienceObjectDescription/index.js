import React from 'react';
import { makeStyles, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { ArrowRightAlt } from '@material-ui/icons';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    white: {
        color: theme.palette.primary.contrastText,
        width: "95%",
        [theme.breakpoints.down('md')]: {
            width: "70%",
        },
        [theme.breakpoints.down(1070)]: {
            width: "90%",
        },
        [theme.breakpoints.down('sm')]: {
            width: "60%",
        },
        [theme.breakpoints.down(660)]: {
            width: '50%'
        },
        [theme.breakpoints.down('xs')]: {
            width: '40%',
        },
    },

    blue: {
        color: theme.palette.secondary.main,
    },

    text: {
        fontSize: theme.spacing(2.5),
        // marginRight: "40px"
    },

    icon: {
        fill: theme.palette.primary.contrastText,
    },
}));

const ExperienceObjectDescription = ({ listItems }) => {
    const classes = useStyles();
    return (
        <List className={classes.white} dense>
            {
                listItems.map((listItem) => {
                    return (
                        <ListItem key={listItem.id} >
                            <ListItemIcon style={{ marginRight: '-20px' }}>
                                <ArrowRightAlt className={classes.icon} />
                            </ListItemIcon>
                            <ListItemText primary={listItem} classes={{ primary: classes.text }} />
                        </ListItem>
                    )
                })
            }
        </List>
    );
};

ExperienceObjectDescription.propTypes = {
    listItems: PropTypes.array
}

export default ExperienceObjectDescription;
