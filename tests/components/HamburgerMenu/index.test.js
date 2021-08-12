import React from 'react';
import { shallow, mount } from 'enzyme';
import HamburgerMenu from '../../../src/components/HamburgerMenu';
import { Box, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import DrawerMenu from '../../../src/components/DrawerMenu';
import { act } from 'react-dom/test-utils';

describe('<HamburgerMenu />', () => {
    let props;
    beforeEach(() => {
        props = {            
            handleDrawerOpen: jest.fn(),
            tabInfo: [{
                label: 'TEST',
                route: '/test',
                value: 1
            }],
            tabComponent: Typography
        }
    });

    it('should render as expected', () => {
        const hamburgerMenu = shallow(<HamburgerMenu {...props} />)
        expect(hamburgerMenu).toMatchSnapshot();
    });

    it('should render a Box', () => {
        const hamburgerMenu = mount(<HamburgerMenu {...props} />);
        expect(hamburgerMenu.find(Box).exists()).toBeTruthy();
    });

    describe('inside the Box', () => {
        it('should render an IconButton', () => {
            const hamburgerMenu = mount(<HamburgerMenu {...props} />);
            const iconButton = hamburgerMenu.find(Box).find(IconButton);
            expect(iconButton.exists()).toBeTruthy();
        });

        it('should render a MenuIcon inside the IconButton', () => {
            const hamburgerMenu = mount(<HamburgerMenu {...props} />);
            const menuIcon = hamburgerMenu.find(Box).find(IconButton).find(MenuIcon);
            expect(menuIcon.exists()).toBeTruthy();
        });

        it('should render a DrawerMenu component', () => {
            const hamburgerMenu = mount(<HamburgerMenu {...props} />);
            const drawerMenu = hamburgerMenu.find(Box).find(DrawerMenu);
            expect(drawerMenu.exists()).toBeTruthy();
        });

        it('should pass the appropriate props to the DrawerMenu', () => {
            const hamburgerMenu = mount(<HamburgerMenu {...props} />);
            const drawerMenu = hamburgerMenu.find(Box).find(DrawerMenu);
            expect(drawerMenu.prop('tabInfo')).toEqual(props.tabInfo);
            expect(drawerMenu.prop('tabComponent')).toEqual(props.tabComponent);
        });

        describe('state changes', () => {            
            it('should initially render the DrawerMenu closed', () => {
                const hamburgerMenu = mount(<HamburgerMenu {...props} />);
                const drawerMenu = hamburgerMenu.find(Box).find(DrawerMenu);                
                expect(drawerMenu.prop('isDrawerOpen')).toBe(false);
            });

            it('should render the DrawerMenu open when the icon is clicked', () => {
                const hamburgerMenu = mount(<HamburgerMenu {...props} />);
                const iconButton = hamburgerMenu.find(Box).find(IconButton).at(0);
                
                // Click the icon, then update the component
                act(() => {
                    iconButton.props().onClick();
                });                
                hamburgerMenu.update();

                const drawerMenu = hamburgerMenu.find(Box).find(DrawerMenu);
                expect(drawerMenu.prop('isDrawerOpen')).toEqual(true);
            });
        })
    })
})