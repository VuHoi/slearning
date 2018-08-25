import React from 'react';
import PropTypes from 'prop-types';
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';

const theme = createMuiTheme({});
const MainContainer = ({children}) => (
    <MuiThemeProvider theme={theme}>
        <div className='inner-container'>
            {children}
        </div>
    </MuiThemeProvider>
);

MainContainer.propTypes = {
    children: PropTypes.object
};

export default MainContainer;
