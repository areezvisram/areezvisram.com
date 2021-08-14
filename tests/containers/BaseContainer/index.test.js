import React from 'react';
import { shallow } from 'enzyme';
import BaseContainer from '../../../src/containers/BaseContainer';
import { ThemeProvider } from '@material-ui/styles';
import Header from '../../../src/containers/Header';
import { CssBaseline } from '@material-ui/core';

// Mock the theme
const mockTheme = jest.fn();

jest.mock('../../../src/themes/themes', () => ({
    get theme() {
        return mockTheme;
    },
}));

describe('<BaseContainer/>', () => {
    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should render a ThemeProvider', () => {
        const baseContainer = shallow(<BaseContainer />);
        expect(baseContainer.find(ThemeProvider).exists()).toBeTruthy();
    });

    it('should pass the theme as a prop to the ThemeProvider', () => {
        const themeProvider = shallow(<BaseContainer />).find(ThemeProvider);
        expect(themeProvider.prop('theme')).toEqual(mockTheme);
    });

    it('should render the Header', () => {
        const baseContainer = shallow(<BaseContainer />);
        expect(baseContainer.find(Header).exists()).toBeTruthy();
    });

    it('should render the CssBaseline', () => {
        const baseContainer = shallow(<BaseContainer />);
        expect(baseContainer.find(CssBaseline).exists()).toBeTruthy();
    });
});
