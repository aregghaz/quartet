// @store/slices/guestArtistsSlice.ts
import { createSlice } from '@reduxjs/toolkit';
import sabrina from '@images/sabrina.jpeg';
import medison from '@images/medison.jpeg';
import weekend from '@images/weekend.jpeg';
import maneskin from '@images/maneskin.jpeg';
import jensen from '@images/jensen.jpeg';

export type GuestArtistType = {
    id: string;
    name: string;
    role: string;
    imageUrl: string;
};

interface GuestArtistsState {
    artists: GuestArtistType[];
}

const initialState: GuestArtistsState = {
    artists: [
        {
            id: '1',
            name: 'Sabrina C.',
            role: '(Bass)',
            imageUrl: sabrina
        },
        {
            id: '2',
            name: 'Medison B.',
            role: '(Vocal)',
            imageUrl: medison
        },
        {
            id: '3',
            name: 'Weekend.',
            role: '(Keys)',
            imageUrl: weekend
        },
        {
            id: '4',
            name: 'Maneskin',
            role: '(Guitar)',
            imageUrl: maneskin
        },
        {
            id: '5',
            name: 'Jensen E.',
            role: '(Drums)',
            imageUrl: jensen
        },
    ]
};

const guestArtistsSlice = createSlice({
    name: 'guestArtists',
    initialState,
    reducers: {}
});

export default guestArtistsSlice.reducer;
