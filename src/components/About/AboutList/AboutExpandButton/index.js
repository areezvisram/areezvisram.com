import React, { useState } from 'react';
import { makeStyles, Box, Button } from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
import AboutDialog from '../AboutDialog';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    button: {
        color: theme.palette.primary.contrastText,
        fontSize: theme.spacing(2.5),
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            fontSize: theme.spacing(2),
        },
    },

    root: {
        height: theme.spacing(10),
        marginTop: theme.spacing(-2)
    },

    expandMore: {
        position: 'absolute',
        marginTop: '50px',
        marginBottom: '10px'
    }
}));

const AboutExpandButton = ({ title, listItems }) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleModalOpen = () => {
        setOpen(true);
    };

    const handleModalClose = () => {
        setOpen(false);
    }

    return (
        <Box>
            <Button className={classes.button} classes={{ root: classes.root }} disableRipple onClick={handleModalOpen}>
                Click to Expand
                <ExpandMore className={classes.expandMore} />
            </Button>
            <AboutDialog handleModalClose={handleModalClose} open={open} title={title} listItems={listItems} />
        </Box>
    );
};

AboutExpandButton.propTypes = {
    title: PropTypes.string,
    listItems: PropTypes.array
}

export default AboutExpandButton;
