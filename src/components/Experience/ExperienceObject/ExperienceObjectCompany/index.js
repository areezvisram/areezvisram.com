import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    white: {
        color: theme.palette.primary.contrastText,
    },
}));

const ExperienceObjectCompany = ({ company }) => {
    const classes = useStyles();
    return (
        <Box>
            <Typography className={classes.white} variant="h5" align="left">
                {company}
            </Typography>
        </Box>
    );
};

ExperienceObjectCompany.propTypes = {
    company: PropTypes.string
};

export default ExperienceObjectCompany;
