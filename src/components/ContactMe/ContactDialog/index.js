import React from 'react';
import { makeStyles, Box, Dialog, DialogTitle, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    white: {
        color: theme.palette.primary.contrastText
    },
}));

const ContactDialog = ({ handleModalClose, open, isError }) => {
    const classes = useStyles();
    const theme = useTheme();
    const successMessages = ["Thank you for your submission.", "I will get back to you as soon as possible."]
    const failureMesasges = ["Form Submission Unsuccessful.", "Please try to submit the form again."]

    return (
        <Dialog fullScreen={false} open={open} onClose={handleModalClose} PaperProps={{ style: { backgroundColor: theme.palette.primary.main } }}>
            <DialogTitle>
                <Box display='flex' flexDirection='column' paddingTop={4} paddingBottom={4} paddingLeft={1} paddingRight={1}>
                    {
                        isError ?
                            failureMesasges.map((message) => {
                                return (
                                    <Typography variant="h5" align='center' className={classes.white}>
                                        {message}
                                    </Typography>
                                )
                            }) :
                            successMessages.map((message) => {
                                return (
                                    <Typography variant="h5" align='center' className={classes.white}>
                                        {message}
                                    </Typography>
                                )
                            })
                    }
                </Box>
            </DialogTitle>
        </Dialog>
    );
};

export default ContactDialog;