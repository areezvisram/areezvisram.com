import React from 'react';
import { makeStyles, List, ListItem, ListItemIcon, ListItemText, Box } from '@material-ui/core';
import { DoubleArrow } from '@material-ui/icons';
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
    white: {
        color: theme.palette.primary.contrastText,
        marginTop: theme.spacing(-2)
    },

    text: {
        fontSize: theme.spacing(3)
    },

    icon: {
        fill: theme.palette.primary.contrastText,
    },

    listItem: {
        paddingLeft: 0,
        paddingRight: 0
    }
}));

const AboutDialogList = ({ listItems }) => {
    const classes = useStyles();
    return (
        <Box>
            <List className={classes.white} dense>
                {
                    listItems.map((listItem) => {
                        return (
                            <ListItem className={classes.listItem} key={listItem.id}>
                                <ListItemIcon>
                                    <DoubleArrow className={classes.icon} />
                                </ListItemIcon>
                                <ListItemText primary={listItem} classes={{ primary: classes.text }} />
                            </ListItem>
                        )
                    })
                }
            </List>
        </Box>
    );
};

AboutDialogList.propTypes = {
    listItems: PropTypes.array
}

export default AboutDialogList;
