import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    items: [
        { id: '1', url: 'https://www.instagram.com/?flo=true', img: _jsx(_Fragment, {}) },
        { id: '2', url: 'https://www.facebook.com/', img: _jsx(_Fragment, {}) },
        { id: '3', url: 'https://www.youtube.com/', img: _jsx(_Fragment, {}) },
    ],
    iconColor: '#FFBE10FF',
};
const socSlice = createSlice({
    name: 'soc',
    initialState,
    reducers: {
        setIconColor: (state, action) => {
            state.iconColor = action.payload;
        },
        updateItems: (state, action) => {
            state.items = action.payload;
        },
    },
});
export const { setIconColor, updateItems } = socSlice.actions;
export default socSlice.reducer;
