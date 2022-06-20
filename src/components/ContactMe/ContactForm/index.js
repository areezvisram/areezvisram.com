import React from 'react';
import { makeStyles, Button, Grid, TextField, withStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    textField: {
        color: 'white',
        borderColor: 'white',
        fontSize: 20
    },

    button: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
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
    return (
        <form>
            <Grid container spacing={1} alignItems="center" justifyContent='center'>
                <Grid xs={12} sm={6} item >
                    <CssTextField placeholder='Enter your first name' label='First Name' variant='outlined' fullWidth InputLabelProps={{ style: { color: '#fff', fontSize: 20 } }} InputProps={{ classes: { input: classes.textField } }} />
                </Grid>
                <Grid xs={12} sm={6} item>
                    <CssTextField placeholder='Enter your last name' label='Last Name' variant='outlined' fullWidth InputLabelProps={{ style: { color: '#fff', fontSize: 20 } }} InputProps={{ classes: { input: classes.textField } }} />
                </Grid>
                <Grid xs={12} item>
                    <CssTextField type='email' placeholder='Enter your email address' label='Email Address' variant='outlined' fullWidth InputLabelProps={{ style: { color: '#fff', fontSize: 20 } }} InputProps={{ classes: { input: classes.textField } }} />
                </Grid>
                <Grid item xs={12}>
                    <CssTextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth InputLabelProps={{ style: { color: '#fff', fontSize: 20 } }} InputProps={{ classes: { input: classes.textField } }} />
                </Grid>
                <Button type="submit" variant="outlined" color="primary" className={classes.button} sx>Submit</Button>
            </Grid>
        </form>
    );
};

export default ContactForm;
