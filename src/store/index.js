/**
 * Challenge-related comment:
 *
 * I decided to use Redux because it's most popular for React application,
 * and I'm also mostly was warking with Redux appliactions.
 * 
 * For big applications it's better to combine store
 * separately for each page to save runtime on each action processing
 * 
 * What I would like to add here:
 * 1. Types. It's very important for data handling.
 * 2. Something to handle async actions instead of built in Redux-thunk.
 *    (Thunk isn't flexible and highly complicated to test and scale).
 */

import { configureStore } from '@reduxjs/toolkit'

import searchReducer from './slices/search';
import entitiesReducer from './slices/entities';

export const store = configureStore({
    reducer: {
        search: searchReducer,
        entities: entitiesReducer,
    },
});
