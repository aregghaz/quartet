import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
import type { SocItemsType } from '../../types/socItemsType';

interface SocState {
    items: SocItemsType[];
    iconColor: string;
}

const initialState: SocState = {
    items: [
        { id: '1', url: 'https://www.instagram.com/?flo=true', img: <></> },
        { id: '2', url: 'https://www.facebook.com/', img: <></> },
        { id: '3', url: 'https://www.youtube.com/', img: <></> },
    ],
    iconColor: '#FFBE10FF',
};

const socSlice = createSlice({
    name: 'soc',
    initialState,
    reducers: {
        setIconColor: (state, action: PayloadAction<string>) => {
            state.iconColor = action.payload;
        },
        updateItems: (state, action: PayloadAction<SocItemsType[]>) => {
            state.items = action.payload;
        },
    },
});

export const { setIconColor, updateItems } = socSlice.actions;
export default socSlice.reducer;