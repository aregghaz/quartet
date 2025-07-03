import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import {type ButtonType} from '../../types/buttonType';

interface ButtonState {
    buttons: ButtonType[];
}

const initialState: ButtonState = {
    buttons: [
        // {buttonWidth: 100, buttonHeight: 50, text: 'Click Me', icon: 'icon1', bgColor: '#FF5733', textColor: '#fff', url: '/home'},
        // {text: 'Learn More', icon: 'icon2', bgColor: '#33FF57', textColor: '#fff', url: '/about'},
    ],
};

const buttonSlice = createSlice({
    name: 'buttons',
    initialState,
    reducers: {
        addButton: (state, action: PayloadAction<ButtonType>) => {
            state.buttons.push(action.payload);
        },

    },
});

export const {addButton} = buttonSlice.actions;
export default buttonSlice.reducer;