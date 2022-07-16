import React, { useState } from 'react';
import { makeStyles, Button, Grid, TextField, withStyles } from '@material-ui/core';
import ContactDialog from '../ContactDialog';

const useStyles = makeStyles((theme) => ({
    textField: {
        color: 'white',
        borderColor: 'white',
        fontSize: 20
    },

    button: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        fontSize: 20,
        '&.MuiButton-outlinedPrimary': {
            borderColor: 'white',
            color: 'white'
        },
    }
}));

const CssTextField = withStyles((theme) => ({
    root: {
        '& label.Mui-focused': {
            color: 'white',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: theme.palette.secondary.main,
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'white',
            },
            '&:hover fieldset': {
                borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
                borderColor: theme.palette.secondary.main,
            },
        },
    },
}))(TextField);

const ContactForm = () => {
    const classes = useStyles();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false);

    const handleModalClose = () => {
        setOpen(false);
    }

    const sendEntry = (e) => {
        e.preventDefault();
        setFirstName('');
        setLastName('');
        setEmail('')
        setMessage('')
        console.log
        fetch('http://localhost:5000/contact-me/send-entry', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: `${firstName} ${lastName}`,
                email_address: email,
                message: message
            })
        })
            .then((res) => res.json())
            .then(() => {
                setError(false);
                setOpen(true);
            })
            .catch(() => {
                setError(true);
                setOpen(true);
            })
    }

    return (
        <form action='/' method='POST' onSubmit={(e) => sendEntry(e)} >
            <Grid container spacing={1} alignItems="center" justifyContent='center'>
                <Grid xs={12} sm={6} item >
                    <CssTextField placeholder='Enter your first name' label='First Name' variant='outlined' onChange={(e) => setFirstName(e.target.value)} fullWidth InputLabelProps={{ style: { color: '#fff', fontSize: 20 } }} InputProps={{ classes: { input: classes.textField } }} />
                </Grid>
                <Grid xs={12} sm={6} item>
                    <CssTextField placeholder='Enter your last name' label='Last Name' variant='outlined' onChange={(e) => setLastName(e.target.value)} fullWidth InputLabelProps={{ style: { color: '#fff', fontSize: 20 } }} InputProps={{ classes: { input: classes.textField } }} />
                </Grid>
                <Grid xs={12} item>
                    <CssTextField type='email' placeholder='Enter your email address' label='Email Address' variant='outlined' onChange={(e) => setEmail(e.target.value)} fullWidth InputLabelProps={{ style: { color: '#fff', fontSize: 20 } }} InputProps={{ classes: { input: classes.textField } }} />
                </Grid>
                <Grid item xs={12}>
                    <CssTextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" onChange={(e) => setMessage(e.target.value)} fullWidth InputLabelProps={{ style: { color: '#fff', fontSize: 20 } }} InputProps={{ classes: { input: classes.textField } }} />
                </Grid>
                <Button type="submit" variant="outlined" color="primary" className={classes.button} sx>Submit</Button>
                <ContactDialog handleModalClose={handleModalClose} open={open} isError={error} />
            </Grid>
        </form>
    );
};

export default ContactForm;
