import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from './store';

const TestRootComponent = ({children}) => {
    return (
        <React.StrictMode>
            <Provider store={store}>
                {children}
            </Provider>
        </React.StrictMode>
    );
};

export const customRender = (ui, options) => render(ui, {wrapper: TestRootComponent, ...options});
