import React from 'react';
import { shallow, mount } from 'enzyme';
import NavigationItem from '../../../src/components/NavigationItem';
import { BrowserRouter, Link } from 'react-router-dom';
import { Tabs } from '@material-ui/core';
import MainRouter from '../../../src/routing/MainRouter';
import TabItem from '../../../src/components/NavigationItem/TabItem';
import HamburgerMenu from '../../../src/components/HamburgerMenu';

const setWidth = (width) => {
    Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: width,
    });
    window.matchMedia = jest.fn().mockImplementation((query) => {
        return {
            matches: width >= 600 ? false : true,
            media: query,
            onchange: null,
            addListener: jest.fn(),
            removeListener: jest.fn(),
        };
    });
};

describe('<NavigationItem />', () => {
    let props;
    beforeEach(() => {
        props = {
            tabInfo: [
                {
                    label: 'TEST',
                    route: '/test',
                    value: 1,
                },
            ],
        };
    });

    it('should render as expected', () => {
        const navItem = shallow(<NavigationItem {...props} />);
        expect(navItem).toMatchSnapshot();
    });

    it('should render a BrowserRouter', () => {
        const browserRouter = mount(<NavigationItem {...props} />).find(BrowserRouter);
        expect(browserRouter.exists()).toBeTruthy();
    });

    describe('desktop', () => {
        it('should render Tabs on desktop display, not a HamburgerMeny', () => {
            const browserRouter = mount(<NavigationItem {...props} />).find(BrowserRouter);
            const tabs = browserRouter.find(Tabs);
            const hamburgerMenu = browserRouter.find(HamburgerMenu);
            expect(tabs.exists()).toBeTruthy();
            expect(hamburgerMenu.exists()).toBeFalsy();
        });

        it('should set the initial value of the tabs to false', () => {
            const browserRouter = mount(<NavigationItem {...props} />).find(BrowserRouter);
            const tabs = browserRouter.find(Tabs);
            expect(tabs.prop('value')).toBe(false);
        });

        it('should render the main router', () => {
            const browserRouter = mount(<NavigationItem {...props} />).find(BrowserRouter);
            const mainRouter = browserRouter.find(MainRouter);
            expect(mainRouter.exists()).toBeTruthy();
        });

        describe('tab items', () => {
            beforeEach(() => {
                props = {
                    tabInfo: [
                        {
                            label: 'TEST',
                            route: '/test',
                            value: '1',
                        },
                        {
                            label: 'TEST2',
                            route: '/test2',
                            value: 2,
                        },
                    ],
                };
            });

            it('should render as many TabItem components as dictated by the tabInfo prop array', () => {
                const browserRouter = mount(<NavigationItem {...props} />).find(BrowserRouter);
                const tabItems = browserRouter.find(Tabs).find(TabItem);
                expect(tabItems.exists()).toBeTruthy();
                expect(tabItems).toHaveLength(props.tabInfo.length);
            });

            it('should pass the props from the array to each TabItem', () => {
                const browserRouter = mount(<NavigationItem {...props} />).find(BrowserRouter);
                const tabItems = browserRouter.find(Tabs).find(TabItem);
                for (var i = 0; i < tabItems.length; i++) {
                    const tab = tabItems.at(i);
                    expect(tab.prop('label')).toEqual(props.tabInfo[i].label);
                    expect(tab.prop('route')).toEqual(props.tabInfo[i].route);
                }
            });

            it('should render the component of the tab as the passed prop', () => {
                const browserRouter = mount(<NavigationItem {...props} />).find(BrowserRouter);
                const tabItems = browserRouter.find(Tabs).find(TabItem);
                for (var i = 0; i < tabItems.length; i++) {
                    const tab = tabItems.at(i);
                    expect(tab.prop('component')).toEqual(Link);
                }
            });
        });
    });

    describe('mobile', () => {
        beforeEach(() => {
            setWidth(100);
        });

        it('should render a HamburgerMenu, not Tabs on mobile', () => {
            const browserRouter = mount(<NavigationItem {...props} />).find(BrowserRouter);
            expect(browserRouter.find(HamburgerMenu).exists()).toBeTruthy();
            expect(browserRouter.find(Tabs).exists()).toBeFalsy();
        });

        it('should pass props to the HamburgerMenu', () => {
            const hamburgerMenu = mount(<NavigationItem {...props} />)
                .find(BrowserRouter)
                .find(HamburgerMenu);
            expect(hamburgerMenu.prop('tabInfo')).toEqual(props.tabInfo);
        });
    });
});
