import React from 'react';
import { shallow } from 'enzyme';
import Logo from '../../../src/components/Logo';

const wrapper = shallow(<Logo />);

describe('<Logo />', () => {
    it('should render as expected', () => {
        expect(wrapper).toMatchSnapshot();
    })
})