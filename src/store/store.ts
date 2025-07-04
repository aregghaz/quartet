import {configureStore} from "@reduxjs/toolkit";
import menuReducer from './slices/menuSlice';
import socReducer from './slices/socLinksSlice.tsx';
import buttonReducer from './slices/buttonSlice';
import mediaReducer from './slices/mediaSlice';
import aboutReducer from './slices/aboutSlice';

export const store = configureStore({
    reducer: {
        menu: menuReducer,
        soc: socReducer,
        button: buttonReducer,
        media: mediaReducer,
        about: aboutReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
