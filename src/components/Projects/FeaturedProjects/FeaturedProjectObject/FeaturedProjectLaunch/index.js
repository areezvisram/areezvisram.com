import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import FeaturedProjectLanguages from '../FeaturedProjectLanguages';
import Icon from '../../../../Icon';


const useStyles = makeStyles((theme) => ({
    overallBoxRight: {
        display: 'flex',
        justifyContent: 'right',
        flexWrap: 'wrap'
    },

    overallBoxLeft: {
        display: 'flex',
        justifyContent: 'left',
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

    innerBoxLeft:  {
        display: 'flex',
        justifyContent: 'left',
        flexBasis: '20%',
        [theme.breakpoints.down('md')]: {
            flexBasis: '18%'
        },
        marginLeft: theme.spacing(3)
    },

    innerBoxSmalLScreen: {
        display: 'flex',
        justifyContent: 'center'
    }
}));

const FeaturedProjectLaunch = ({ isSmallScreen, orientation }) => {
    const classes = useStyles();
    
    return (   
        <Box>
            {
                orientation == "left" & isSmallScreen == false ?
                    <Box className={isSmallScreen ? classes.overallBoxSmallScreen : classes.overallBoxLeft}>                    
                        <Box className={isSmallScreen ? classes.innerBoxSmalLScreen : classes.innerBoxLeft}>
                            <Icon iconType='github' isSmallScreen={isSmallScreen}/>
                            <Icon iconType='launch' isSmallScreen={isSmallScreen}/>
                        </Box>    
                        <FeaturedProjectLanguages isSmallScreen={isSmallScreen} orientation={orientation} />
                    </Box> 
                :
                    <Box className={isSmallScreen ? classes.overallBoxSmallScreen : classes.overallBoxRight}>
                        <FeaturedProjectLanguages isSmallScreen={isSmallScreen} orientation={orientation} />
                        <Box className={isSmallScreen ? classes.innerBoxSmalLScreen : classes.innerBox}>
                            <Icon iconType='github' isSmallScreen={isSmallScreen}/>
                            <Icon iconType='launch' isSmallScreen={isSmallScreen}/>
                        </Box>    
                    </Box> 
            }            
        </Box>  
    );
};

export default FeaturedProjectLaunch;
