import React from 'react';
import { Tabs, makeStyles, useTheme, useMediaQuery, Tab } from '@material-ui/core';
import TabItem from './TabItem';
import { BrowserRouter, Link } from 'react-router-dom';
import HamburgerMenu from '../HamburgerMenu';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Resume from '../../resources/resume.pdf'

const useStyles = makeStyles((theme) => ({
    navBar: {
        backgroundColor: theme.palette.primary.main,
        marginRight: theme.spacing(-2)
    },
}));

const NavigationItem = ({ tabInfo }) => {
    const classes = useStyles();
    const theme = useTheme();
    const isSmallDisplay = useMediaQuery(theme.breakpoints.between('xs', '1070'))
    return (
        <BrowserRouter>
            {isSmallDisplay ? (
                <HamburgerMenu tabInfo={tabInfo} tabComponent={AnchorLink} />
            ) : (
                <div>
                    <Tabs className={classes.navBar} value={false}>
                        {tabInfo.map(tab => <TabItem label={tab.label} route={tab.route} component={AnchorLink} key={tab.value} />)}
                        <TabItem label="Resume" route={Resume} />
                    </Tabs>
                </div>
            )}
        </BrowserRouter>
    )
};

export default NavigationItem;