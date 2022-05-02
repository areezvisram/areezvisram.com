import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import FeaturedProjectLanguages from '../FeaturedProjectLanguages';
import Icon from '../../../../Icon';


const useStyles = makeStyles((theme) => ({
    overallBox: {
        display: 'flex',
        justifyContent: 'right',
        flexWrap: 'wrap'
    },

    overallBoxSmallScreen: {
        display: 'flex',
        justifyContent: 'center',   
        flexDirection: 'column'     
    },

    innerBox: {
        display: 'flex',
        justifyContent: 'right',
        flexBasis: '20%',
        marginRight: theme.spacing(3)
    },

    innerBoxSmalLScreen: {
        display: 'flex',
        justifyContent: 'center'
    }
}));

const FeaturedProjectLaunch = ({ isSmallScreen }) => {
    const classes = useStyles();
    
    return (   
        <Box className={isSmallScreen ? classes.overallBoxSmallScreen : classes.overallBox}>
            <FeaturedProjectLanguages isSmallScreen={isSmallScreen} />
            <Box className={isSmallScreen ? classes.innerBoxSmalLScreen : classes.innerBox}>
                <Icon iconType='github' isSmallScreen={isSmallScreen}/>
                <Icon iconType='launch' isSmallScreen={isSmallScreen}/>
            </Box>                
        </Box>  
    );
};

export default FeaturedProjectLaunch;
