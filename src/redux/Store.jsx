import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slice/UserSlice'; // 👈 rename if needed

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
});

