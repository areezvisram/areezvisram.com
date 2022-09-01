import React from 'react';
import { makeStyles, Box, Dialog, DialogTitle, Typography, IconButton } from '@material-ui/core';
import { useTheme } from '@material-ui/core';
import PropTypes from 'prop-types';
import { Close } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    white: {
        color: theme.palette.primary.contrastText,
        flexGrow: 1
    },
}));

const ContactDialog = ({ handleModalClose, open, isError }) => {
    const classes = useStyles();
    const theme = useTheme();
    const successMessages = ["Thank you for your submission.", "I will get back to you as soon as possible."]
    const failureMessasges = ["Form Submission Unsuccessful.", "Please try to submit the form again."]

    return (
        <Dialog fullScreen={false} open={open} onClose={handleModalClose} PaperProps={{ style: { backgroundColor: theme.palette.primary.main } }}>
            <DialogTitle>
                <Box display='flex' flexDirection='row'>
                    <Box display='flex' flexDirection='column' paddingTop={4} paddingBottom={4} paddingLeft={1} paddingRight={1}>
                        {
                            isError ?
                                failureMessasges.map((message) => {
                                    return (
                                        <Typography key={message} variant="h5" align='center' className={classes.white}>
                                            {message}
                                        </Typography>
                                    )
                                }) :
                                successMessages.map((message) => {
                                    return (
                                        <Typography key={message} variant="h5" align='center' className={classes.white}>
                                            {message}
                                        </Typography>
                                    )
                                })
                        }
                    </Box>
                    <IconButton onClick={handleModalClose} className={classes.white}>
                        <Close />
                    </IconButton>
                </Box>
            </DialogTitle>
        </Dialog>
    );
};

ContactDialog.propTypes = {
    handleModalClose: PropTypes.func,
    open: PropTypes.bool,
    isError: PropTypes.bool
}

export default ContactDialog;
