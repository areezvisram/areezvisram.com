import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    white: {
        color: theme.palette.primary.contrastText,
        zIndex: 4
    },

}));

const NonFeaturedProjectLanguages = ({ languages }) => {
    const classes = useStyles();

    return (
        <Box gridColumnGap='10px' flexWrap='wrap' display='flex' gridAutoFlow='column' flexDirection='row' justifyContent={"center"} >
            {
                languages.map((language) => {
                    return (
                        <Typography className={classes.white} variant="h5" key={language.id}>
                            {language}
                        </Typography>
                    )
                })
            }
        </Box>
    );
};

NonFeaturedProjectLanguages.propTypes = {
    languages: PropTypes.array
};

export default NonFeaturedProjectLanguages;
