import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

const store = configureStore({
    reducer: {
        auth: authReducer, // <-- Now state.auth.status will work!
    }
});

export default store;