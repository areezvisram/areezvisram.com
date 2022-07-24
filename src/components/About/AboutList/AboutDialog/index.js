import React from 'react';
import { makeStyles, Box, Dialog, DialogTitle, DialogContent, Typography } from '@material-ui/core';
import { useMediaQuery, useTheme } from '@material-ui/core';
import AboutDialogList from '../AboutDialogList';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    blue: {
        color: theme.palette.secondary.main,
    },
}));

const AboutDialog = ({ handleModalClose, open, title, listItems }) => {
    const classes = useStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

    return (
        <Dialog fullScreen={fullScreen} open={open} onClose={handleModalClose} PaperProps={{ style: { backgroundColor: theme.palette.primary.main } }}>
            <DialogTitle>
                <Box display='flex' flexDirection='column'>
                    <Typography variant="h4" className={classes.blue} align='center'>
                        {title}
                    </Typography>
                </Box>
            </DialogTitle>
            <DialogContent>
                <AboutDialogList listItems={listItems} />
            </DialogContent>
        </Dialog>
    );
};

AboutDialog.propTypes = {
    handleModalClose: PropTypes.func,
    open: PropTypes.bool,
    title: PropTypes.string,
    listItems: PropTypes.array
}

export default AboutDialog;
