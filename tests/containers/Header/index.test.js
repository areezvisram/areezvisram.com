import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../../src/containers/Header';
import { AppBar, Toolbar } from '@material-ui/core';
import Logo from '../../../src/components/Logo';
import NavigationItem from '../../../src/components/NavigationItem';

// Mock the constants
jest.mock('../../../src/constants/routes', () => ({
    get tabInfo() {
        return [1, 2, 3];
    },
}));

describe('<Header/>', () => {
    const header = shallow(<Header />);

    it('should render as expected', () => {
        expect(header).toMatchSnapshot();
    });

    it('should render an AppBar', () => {
        const appBar = header.find(AppBar);
        expect(appBar.exists()).toBeTruthy();
    });

    it('should render a Toolbar', () => {
        const toolbar = header.find(Toolbar);
        expect(toolbar.exists()).toBeTruthy();
    });

    describe('inside the toolbar', () => {
        beforeEach(() => {
            jest.resetModules();
        });

        it('should render a Logo inside the toolbar', () => {
            const logo = header.find(Toolbar).find(Logo);
            expect(logo.exists()).toBeTruthy();
        });

        it('should render a NavigationItem inside the toolbar', () => {
            const navItem = header.find(Toolbar).find(NavigationItem);
            expect(navItem.exists()).toBeTruthy();
        });

        it('should pass the tabInfo array from the constants file as a prop to the NavigationItem', () => {
            const navItem = header.find(Toolbar).find(NavigationItem);
            expect(navItem.prop('tabInfo')).toEqual([1, 2, 3]);
        });
    });
});
