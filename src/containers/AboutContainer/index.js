import React from 'react';
import { Box, makeStyles, Card } from '@material-ui/core';
import AboutTitle from '../../components/About/AboutTitle';
import AboutParagraph from '../../components/About/AboutParagraph';
import AboutImage from '../../components/About/AboutImage';

const useStyles = makeStyles((theme) => ({    
    introduction: {        
        flex: 1,
        [theme.breakpoints.up('md')]: {
            width: theme.spacing(150),
        },
        [theme.breakpoints.down('md')]: {
            width: theme.spacing(115),
        },
        [theme.breakpoints.down('sm')]: {
            width: theme.spacing(70),
        },  
        [theme.breakpoints.down('xs')]: {
            width: theme.spacing(40),
            marginBottom: theme.spacing(10)
        },           
        zIndex: 88
    },

    card: {
        backgroundColor: theme.palette.primary.main,
    }
}));

const AboutContainer = () => {
    const classes = useStyles();
    return (          
        <Box display='flex' flexDirection='row' flexWrap='wrap' alignItems='center' mx='auto' className={classes.introduction}>
            <Box className={classes.introduction} mx="auto">            
                <Card className={classes.card} raised={false}>
                    <AboutTitle />
                    <AboutParagraph />
                </Card>            
            </Box>                      
            <AboutImage />               
        </Box>
    );
};

export default AboutContainer;
