import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { store } from './store';

const TestRootComponent = (props) => {
    const { children, initialActions } = props;

    if (Array.isArray(initialActions)) {
        console.log('initialActions: ', initialActions);

        initialActions.forEach(action => (store.dispatch(action)));
    }

    return (
        <React.StrictMode>
            <Provider store={store}>
                {children}
            </Provider>
        </React.StrictMode>
    );
};

export const customRender = (ui, options) => render(
    ui,
    {
        wrapper: (props) => (<TestRootComponent {...props} {...options} />),
        ...options
    }
);
