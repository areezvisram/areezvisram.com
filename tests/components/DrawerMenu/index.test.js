import React from 'react';
import { shallow, mount } from 'enzyme';
import DrawerMenu from '../../../src/components/DrawerMenu';
import { Box, Typography, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import TabItem from '../../../src/components/NavigationItem/TabItem';

describe('<DrawerMenu />', () => {
    let props;
    beforeEach(() => {
        props = {
            isDrawerOpen: true,
            handleDrawerOpen: jest.fn(),
            tabInfo: [
                {
                    label: 'TEST',
                    route: '/test',
                    value: 1,
                },
            ],
            tabComponent: Typography,
        };
    });
    it('should render as expected', () => {
        const drawerMenu = shallow(<DrawerMenu {...props} />);
        expect(drawerMenu).toMatchSnapshot();
    });

    it('should open the Drawer when isDrawerOpen is true', () => {
        const drawerMenu = shallow(<DrawerMenu {...props} />);
        expect(drawerMenu.prop('open')).toBe(true);
    });

    it('should close the Drawer when isDrawerOpen is false', () => {
        props.isDrawerOpen = false;
        const drawerMenu = shallow(<DrawerMenu {...props} />);
        expect(drawerMenu.prop('open')).toBe(false);
    });

    it('should set onClose of the Drawer to handleDrawerOpen', () => {
        const drawerMenu = shallow(<DrawerMenu {...props} />);
        expect(drawerMenu.prop('onClose')).toEqual(props.handleDrawerOpen);
    });

    describe('rendering inside Drawer when open', () => {
        it('should render 2 Boxes when the Drawer is open', () => {
            const drawerMenu = mount(<DrawerMenu {...props} />);
            expect(drawerMenu.find(Box).exists()).toBeTruthy();
            expect(drawerMenu.find(Box)).toHaveLength(2);
        });

        describe('first box', () => {
            it('should render an IconButton in the first box', () => {
                const drawerMenu = mount(<DrawerMenu {...props} />);
                const box = drawerMenu.find(Box).at(0);
                expect(box.find(IconButton).exists()).toBeTruthy();
            });

            it('should set onClick of the IconButton to the passed handleDrawerOpen', () => {
                const drawerMenu = mount(<DrawerMenu {...props} />);
                const iconButton = drawerMenu.find(Box).at(0).find(IconButton);
                expect(iconButton.prop('onClick')).toEqual(props.handleDrawerOpen);
            });

            it('should render a CloseIcon in the IconButton', () => {
                const drawerMenu = mount(<DrawerMenu {...props} />);
                const closeIcon = drawerMenu.find(Box).at(0).find(IconButton).find(CloseIcon);
                expect(closeIcon.exists()).toBeTruthy();
            });
        });

        describe('second box', () => {
            beforeEach(() => {
                props.tabInfo = [
                    {
                        label: 'TEST',
                        route: '/test',
                        value: 1,
                    },
                    {
                        label: 'TEST2',
                        route: '/test2',
                        value: 2,
                    },
                ];
            });
            it('should render as many TabItem components as there is routes in the tabInfo prop', () => {
                const drawerMenu = mount(<DrawerMenu {...props} />);
                const tabItems = drawerMenu.find(Box).at(1).find(TabItem);
                expect(tabItems).toHaveLength(props.tabInfo.length);
            });

            it('should render each tab with the props from the tabInfo array', () => {
                const drawerMenu = mount(<DrawerMenu {...props} />);
                const tabItems = drawerMenu.find(Box).at(1).find(TabItem);
                for (var i = 0; i < tabItems.length; i++) {
                    const tab = tabItems.at(i);
                    expect(tab.prop('label')).toEqual(props.tabInfo[i].label);
                    expect(tab.prop('route')).toEqual(props.tabInfo[i].route);
                    expect(tab.key()).toBe(props.tabInfo[i].value.toString());
                }
            });

            it('should render the component of the tab as the passed prop', () => {
                const drawerMenu = mount(<DrawerMenu {...props} />);
                const tabItems = drawerMenu.find(Box).at(1).find(TabItem);
                for (var i = 0; i < tabItems.length; i++) {
                    const tab = tabItems.at(i);
                    expect(tab.prop('component')).toEqual(props.tabComponent);
                }
            });
        });
    });
});
