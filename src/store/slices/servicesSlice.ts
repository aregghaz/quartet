import { createSlice } from '@reduxjs/toolkit';
import type { ServicesItemType } from '@src/types/ServicesItemType';
import weddingImg from '@src/assets/images/wedding.jpeg';
import corporateImg from '@src/assets/images/corporate.jpg';
import partyImg from '@src/assets/images/party.jpeg';
import party2Img from '@src/assets/images/party2.jpeg';
import corporativeImg from '@src/assets/images/corporative.jpeg';
import festivalImg from '@src/assets/images/festival.jpeg';

interface ServicesState {
    items: ServicesItemType[];
}

const initialState: ServicesState = {
    items: [
        {
            id: '1',
            title: 'Weddings',
            description: 'Live bands or DJs to create the perfect wedding atmosphere.',
            imgUrl: weddingImg
        },
        {
            id: '2',
            title: 'Corporate Events',
            description: 'Stylish background music or engaging performances for business gatherings.',
            imgUrl: corporateImg

        },
        {
            id: '3',
            title: 'Private Parties',
            description: 'Energetic music to set the mood for birthdays or home celebrations.',
            imgUrl: partyImg

        },
        {
            id: '4',
            title: 'Ceremonies',
            description: 'Elegant and emotional music for meaningful ceremonies.',
            imgUrl: corporativeImg

        },
        {
            id: '5',
            title: 'Festivals',
            description: 'Dynamic stage performances for outdoor or large public events.',
            imgUrl: party2Img

        },
        {
            id: '6',
            title: 'Custom Events',
            description: 'We adapt to your vision with tailored musical experiences.',
            imgUrl: festivalImg

        }
    ]
};

const servicesSlice = createSlice({
    name: 'services',
    initialState,
    reducers: {}
});

export default servicesSlice.reducer;
