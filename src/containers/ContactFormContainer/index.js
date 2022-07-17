import React from 'react';
import { Box, makeStyles, Card } from '@material-ui/core';
import ContactMeTitle from '../../components/ContactMe/ContactMeTitle';
import ContactForm from '../../components/ContactMe/ContactForm';

const useStyles = makeStyles((theme) => ({
    introduction: {
        flex: 1,
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(140),
        },
        [theme.breakpoints.down('md')]: {
            width: theme.spacing(115),
        },
        [theme.breakpoints.down('sm')]: {
            width: theme.spacing(70),
        },
        [theme.breakpoints.down('xs')]: {
            width: theme.spacing(55),
            marginBottom: theme.spacing(10)
        },
        zIndex: 88,
        marginBottom: '200px'
    },

    card: {
        backgroundColor: theme.palette.primary.main,
    }
}));

const ContactFormContainer = () => {
    const classes = useStyles();
    return (
        <Box display='flex' flexDirection='row' flexWrap='wrap' alignItems='center' mx='auto' className={classes.introduction}>
            <Box className={classes.introduction} mx="auto">
                <Card className={classes.card} raised={false}>
                    <ContactMeTitle />
                    <ContactForm />
                </Card>
            </Box>
        </Box>
    );
};

export default ContactFormContainer;
