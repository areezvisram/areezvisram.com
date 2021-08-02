import React from 'react';
import NavigationItem from '../../components/NavigationItem';
import { tabInfo } from '../../constants/routes';

//https://codesandbox.io/s/responsivenavbarmaterial-ui-60czl?file=/src/Components/Header.js

const Header = () => {    
    return (
        <NavigationItem tabInfo={tabInfo} />
    )    
}

export default Header;