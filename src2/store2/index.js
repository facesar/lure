import { configureStore } from '@reduxjs/toolkit';

import reducers from './reducers';

const store = configureStore({
    reducer: reducers,
});

export default store;

// store.subscribe(() => console.info(store.getState()))