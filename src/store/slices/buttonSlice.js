import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    buttons: [],
};
const buttonSlice = createSlice({
    name: 'buttons',
    initialState,
    reducers: {
        addButton: (state, action) => {
            state.buttons.push(action.payload);
        },
    },
});
export const { addButton } = buttonSlice.actions;
export default buttonSlice.reducer;
