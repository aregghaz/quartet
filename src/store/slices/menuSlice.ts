import { createSlice } from '@reduxjs/toolkit';
import type { MenuItemsType } from '../../types/menuType';

export interface MenuState {
    isOpen: boolean;
    menuItems: MenuItemsType[];
}

const initialState: MenuState = {
    isOpen: false,
    menuItems: [
        { id: '1', name: 'Home', targetId: 'home' },
        { id: '3', name: 'Our Team', targetId: 'ourTeam' },
        { id: '2', name: 'About', targetId: 'about' },
        { id: '4', name: 'Concerts', targetId: 'concerts' },
        { id: '5', name: 'Gallery', targetId: 'gallery' },
        { id: '6', name: 'About Us', targetId: 'about-us' },
        { id: '7', name: 'Contact', targetId: 'contact' },
    ],
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        toggleMenu: (state) => {
            state.isOpen = !state.isOpen;
        },
    },
});

export const { toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;