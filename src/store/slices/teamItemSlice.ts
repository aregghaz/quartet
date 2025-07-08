import {createSlice} from '@reduxjs/toolkit';
import brunoItem from "../../assets/images/brunoItem.jpeg"
import duaLipaItem from "../../assets/images/duaLipaItem.jpeg"
import billiItem from "../../assets/images/billiItem.jpeg"
import emminemItem from "../../assets/images/emminemItem.jpeg"
import serjItem from "../../assets/images/serjItem.jpeg"
import miyagiItem from "../../assets/images/miyagi.jpeg"
import lanaItem from "../../assets/images/lanaItem.jpeg"
import evanesItem from "../../assets/images/EvanescenceItem.jpeg"

export type TeamItem = {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    author: string;
    date: string;
    teamId: string;
};

export type TeamItemsState = {
    teamItems: TeamItem[];
};

const initialState: TeamItemsState = {
    teamItems: [
        {
            "id": "1",
            "name": "Bruno Mars",
            "description": "Bruno Mars, is an American singer, songwriter, musician,.",
            "imageUrl": brunoItem,
            "author": "Admin",
            "date": "2025-07-01",
            "teamId": "2" // Pop Icons
        },
        {
            "id": "2",
            "name": "Dua Lipa",
            "description": "Lipa worked as a model before venturing into music and signing",
            "imageUrl": duaLipaItem,
            "author": "Admin",
            "date": "2025-07-02",
            "teamId": "5" // Hip-Hop Legends
        },
        {
            "id": "7",
            "name": "Lana Del Rey",
            "description": "Genre-blending artist with country flair",
            "imageUrl": lanaItem,
            "author": "Admin",
            "date": "2025-07-05",
            "teamId": "3" // Hip-Hop Legends
        },
        {
            "id": "3",
            "name": "Billie Eilish",
            "description": "Innovative alt-pop sensation",
            "imageUrl": billiItem,
            "author": "Admin",
            "date": "2025-07-03",
            "teamId": "5" // Alt-Pop Pioneers
        },
        {
            "id": "4",
            "name": "Eminem & 50cent & Dre",
            "description": "Rising pop star with catchy hits",
            "imageUrl": emminemItem,
            "author": "Admin",
            "date": "2025-07-04",
            "teamId": "3" // Pop Icons
        },

        {
            "id": "5",
            "name": "System of a down",
            "description": "Genre-blending artist with country flair",
            "imageUrl": serjItem,
            "author": "Admin",
            "date": "2025-07-05",
            "teamId": "2" // Hip-Hop Legends
        },
        {
            "id": "6",
            "name": "Miyagi & Andy Panda",
            "description": "Versatile pop icon and performer",
            "imageUrl": miyagiItem,
            "author": "Admin",
            "date": "2025-07-06",
            "teamId": "4" // Alt-Pop Pioneers
        },

        {
            "id": "8",
            "name": "Evanescence",
            "description": "Versatile pop icon and performer",
            "imageUrl": evanesItem,
            "author": "Admin",
            "date": "2025-07-06",
            "teamId": "4" // Alt-Pop Pioneers
        }
    ]
};

const teamItemsSlice = createSlice({
    name: 'teamItems',
    initialState,
    reducers: {},
});

export default teamItemsSlice.reducer;