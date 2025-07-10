// @store/slices/guestArtistsSlice.ts
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import sabrina from '@images/sabrina.jpeg';
import medison from '@images/medison.jpeg';
import weekend from '@images/weekend.jpeg';
import maneskin from '@images/maneskin.jpeg';
import jensen from '@images/jensen.jpeg';
import sabrina1 from '@images/sabrina1.jpeg';
import sabrina2 from '@images/sabrina2.jpeg';
import sabrina3 from '@images/sabrina3.jpeg';
import sabrina4 from '@images/sabrina4.jpeg';
import sabrina5 from '@images/sabrina5.jpeg';
import sabrina6 from '@images/sabrina6.jpeg';
import medison1 from '@images/medison1.jpeg';
import medison2 from '@images/medison2.jpeg';
import medison3 from '@images/medison3.jpeg';
import medison4 from '@images/medison4.jpeg';
import medison5 from '@images/medison5.jpeg';
import medison6 from '@images/medison6.jpeg';
import jensen1 from '@images/jensen1.jpeg';
import jensen2 from '@images/jensen2.jpeg';
import jensen3 from '@images/jensen3.jpeg';
import jensen4 from '@images/jensen4.jpeg';
import jensen5 from '@images/jensen5.jpeg';
import jensen6 from '@images/jensen6.jpeg';
import victoria1 from '@images/victoria1.jpeg';
import victoria2 from '@images/victoria2.jpeg';
import victoria3 from '@images/victoria3.jpeg';
import victoria4 from '@images/victoria4.jpeg';
import victoria5 from '@images/victoria5.jpeg';
import victoria6 from '@images/victoria6.jpeg';
import weeknd1 from '@images/weeknd1.jpeg';
import weeknd2 from '@images/weeknd2.jpeg';
import weeknd3 from '@images/weeknd3.jpeg';
import weeknd4 from '@images/weeknd4.jpeg';
import weeknd5 from '@images/weeknd5.jpeg';
import weeknd6 from '@images/weeknd6.jpeg';


export type GuestArtistType = {
    id: string;
    name: string;
    fullName?: string;
    role: string;
    age?: string;
    bestSong?: string;
    phone?: string;
    mail?: string;
    description?: string;
    imageUrl: string;
    videoUrls: string[];    // Guest video links
    galleryImages: string[]; // Additional image gallery
};

interface GuestArtistsState {
    artists: GuestArtistType[];
    selectedGuest: GuestArtistType | null;
    isModalOpen: boolean;
}

const initialState: GuestArtistsState = {
    artists: [
        {
            id: '1',
            name: 'Sabrina C.',
            fullName: 'Sabrina Carpenter.',
            role: 'Vocal',
            age: '26',
            bestSong: 'Because I Liked a Boy',
            phone: '077777777',
            mail: 'sabrina@mail.com',
            imageUrl: sabrina,
            description: 'Sabrina is a powerhouse vocalist known for her emotional depth and modern pop charisma. She has taken the stage worldwide with unforgettable performances.',
            galleryImages: [sabrina1, sabrina2, sabrina3, sabrina4, sabrina5, sabrina6],
            videoUrls: [
                'https://www.youtube.com/embed/maK6Ku3dHP8?si=qZp0olKW5jnY41o5',
                'https://www.youtube.com/embed/REJA05QjC_U?si=QsPAAHxYp5Uy7lh3',
                'https://www.youtube.com/embed/TKdOIMNu6dg?si=X3QhzT-xdoK91CVU',
                'https://www.youtube.com/embed/eVli-tstM5E?si=ZRTSv9CbSc-qbXI5',
            ]
        },
        {
            id: '2',
            name: 'Medison B.',
            fullName: 'Madison Beer',
            role: 'Vocal',
            age: '25',
            bestSong: 'Selfish',
            phone: '077777778',
            mail: 'madison@mail.com',
            imageUrl: medison,
            description: 'Madison is a soulful singer with a rich voice and deeply personal lyrics. Her performances combine elegance with raw emotional energy.',
            galleryImages: [medison1, medison2, medison3, medison4, medison5, medison6,medison1, medison2, medison3, medison4, medison5, medison6],
            videoUrls: [
                'https://www.youtube.com/embed/978iHuFKfS4?si=9DbR_fVGqle_kGcZ',
                'https://www.youtube.com/embed/XFR7v5ix5hU?si=wpldtyT49wu-i-jk',
            ]
        },
        {
            id: '3',
            name: 'Weekend.',
            fullName: 'The Weeknd',
            role: 'Keys',
            age: '34',
            bestSong: 'Blinding Lights',
            phone: '077777779',
            mail: 'weeknd@mail.com',
            imageUrl: weekend,
            description: 'Known for his genre-bending sound and haunting falsetto, The Weeknd delivers unforgettable performances blending R&B, synth-pop, and soul.',
            galleryImages: [weeknd1, weeknd2, weeknd2, weeknd3, weeknd4, weeknd5, weeknd6],
            videoUrls: [
                'https://www.youtube.com/embed/4NRXx6U8ABQ',
                'https://www.youtube.com/embed/M4ZoCHID9GI?si=gtd8Eet8-0xt0KH7'
            ]
        },
        {
            id: '4',
            name: 'Victoria',
            fullName: 'Victoria (Maneskin)',
            role: 'Guitar',
            age: 'Band Avg. Age: 25',
            bestSong: 'Beggin\'',
            phone: '077777780',
            mail: 'maneskin@mail.com',
            imageUrl: maneskin,
            description: 'Måneskin is an Italian rock sensation known for high-energy performances, edgy fashion, and a fearless fusion of glam rock and modern style.',
            galleryImages: [victoria1, victoria2, victoria3, victoria4, victoria5, victoria6],
            videoUrls: [
                'https://www.youtube.com/embed/RVH5dn1cxAQ?si=Lr-BlY1IohIEVWtP',
                'https://www.youtube.com/embed/yOb9Xaug35M?si=9NQQVDQPyTLAanLq'
            ]
        },
        {
            id: '5',
            name: 'Jensen E.',
            fullName: 'Jensen Ackles',
            role: 'Drums',
            age: '41',
            bestSong: 'Soundtrack Hero',
            phone: '077777781',
            mail: 'jensen@mail.com',
            imageUrl: jensen,
            description: 'Jensen brings powerful rhythms and charismatic stage presence to the drums. A dynamic performer with a passion for rock and cinematic music.',
            galleryImages: [jensen1, jensen2, jensen3,jensen1, jensen2, jensen3, jensen4, jensen5, jensen6, jensen4, jensen5, jensen6],
            videoUrls: [
                'https://www.youtube.com/embed/C3quk_hPWTc?si=1A1V7P06KZ9Wbyk0',
                'https://www.youtube.com/embed/un2AAqNCYtw?si=C0lOEkE1gFCqlGCD'
            ]
        }
    ],
    selectedGuest: null,
    isModalOpen: false
};


const guestArtistsSlice = createSlice({
    name: 'guestArtists',
    initialState,
    reducers: {
        openGuestModal(state, action: PayloadAction<GuestArtistType>) {
            state.selectedGuest = action.payload;
            state.isModalOpen = true;
        },
        closeGuestModal(state) {
            state.selectedGuest = null;
            state.isModalOpen = false;
        },

    }
});

export const {openGuestModal, closeGuestModal} = guestArtistsSlice.actions;
export default guestArtistsSlice.reducer;
