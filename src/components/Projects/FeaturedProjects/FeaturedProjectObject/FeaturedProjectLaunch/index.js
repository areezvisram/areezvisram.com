import React from 'react';
import { Box, makeStyles } from '@material-ui/core';
import FeaturedProjectLanguages from '../FeaturedProjectLanguages';
import Icon from '../../../../Icon';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    overallBoxRight: {
        display: 'flex',
        justifyContent: 'right',
        flexDirection: 'column'
    },

    overallBoxLeft: {
        display: 'flex',
        justifyContent: 'left',
        flexDirection: 'column'
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

    innerBoxLeft: {
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

const FeaturedProjectLaunch = ({ isSmallScreen, orientation, languages, launch, github }) => {
    const classes = useStyles();
    return (
        <Box paddingBottom="18%">
            {
                orientation == "left" & isSmallScreen == false ?
                    <Box className={isSmallScreen ? classes.overallBoxSmallScreen : classes.overallBoxLeft}>
                        <FeaturedProjectLanguages isSmallScreen={isSmallScreen} orientation={orientation} languages={languages} />
                        <Box className={isSmallScreen ? classes.innerBoxSmalLScreen : classes.innerBoxLeft}>
                            <Icon iconType='github' isSmallScreen={isSmallScreen} />
                            {launch ? <Icon iconType='launch' link={launch} /> : null}
                        </Box>
                    </Box>
                    :
                    <Box className={isSmallScreen ? classes.overallBoxSmallScreen : classes.overallBoxRight}>
                        <FeaturedProjectLanguages isSmallScreen={isSmallScreen} orientation={orientation} languages={languages} />
                        <Box className={isSmallScreen ? classes.innerBoxSmalLScreen : classes.innerBox}>
                            <Icon iconType='github' isSmallScreen={isSmallScreen} link={github} />
                            {launch ? <Icon iconType='launch' link={launch} /> : null}
                        </Box>
                    </Box>
            }
        </Box>
    );
};

FeaturedProjectLaunch.propTypes = {
    orientation: PropTypes.string,
    isSmallScreen: PropTypes.bool,
    languages: PropTypes.array,
    launch: PropTypes.string,
    github: PropTypes.string
};

export default FeaturedProjectLaunch;
