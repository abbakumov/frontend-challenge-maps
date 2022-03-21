import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import Header from '../Header';
import Main from '../Main';
import { fetchPlacesData } from '../../store/commonAsyncActions';

import './App.css';


function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        // TODO: move this logic out of view component
        // Loading initial set of places data
        dispatch(fetchPlacesData());
    }, []);

    return (
        <div className="App">
            <Header />
            <Main />
        </div>
    );
}

export default App;
