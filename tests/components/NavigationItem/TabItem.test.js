import React from 'react';
import { mount, shallow } from 'enzyme';
import TabItem from '../../../src/components/NavigationItem/TabItem';
import { Typography, Tab } from '@material-ui/core';

describe('<TabItem />', () => {
    let props;
    beforeEach(() => {
        props = {
            label: 'TEST',
            route: '/test',
            component: Typography
        }
    });

    it('should render as expected', () => {
        const wrapper = shallow(<TabItem {...props} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('should render a Tab', () => {
        const wrapper = mount(<TabItem {...props} />);
        expect(wrapper.find(Tab).exists()).toBeTruthy();
    });

    it('should pass the props to the Tab', () => {
        const tab = mount(<TabItem {...props} />).find(Tab);
        expect(tab.prop('label')).toEqual(props.label);
        expect(tab.key()).toEqual(props.label);
        expect(tab.prop('to')).toEqual(props.route);
        expect(tab.prop('component')).toEqual(props.component);
    })
})