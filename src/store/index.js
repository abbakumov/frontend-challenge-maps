import { configureStore } from '@reduxjs/toolkit'

import searchReducer from './slices/search';
import entitiesReducer from './slices/entities';

export const store = configureStore({
    reducer: {
        search: searchReducer,
        entities: entitiesReducer,
    },
});
