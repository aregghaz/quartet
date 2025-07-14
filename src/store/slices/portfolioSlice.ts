import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import duaLipa from '@images/duaLipaPort.jpeg';
import weekend from "@images/weekendPort.jpeg";
import sabrina from "@images/sabrinaPort.jpeg";
import eminemPort from "@images/eminemPort.jpeg";
import medisonBeerPort from "@images/medisonBeerPort.jpeg";
import jensenPort from "@images/jensenPort.jpeg";
import lanaDelPort from "@images/lanaDelPort.jpeg";
import rihannaPort from "@images/rihannaPort.jpeg";
import medison from '@images/medison.jpeg';
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

type PortfolioItem = {
    id: number;
    name: string;
    img: string;
    url?: string;
    bio?: string;
    gallery?: string[]
};

interface PortfolioState {
    items: PortfolioItem[];
}

const initialState: PortfolioState = {
    items: [
        {
            id: 1,
            name: 'Dua Lipa',
            img: duaLipa,
            url: '/artists/dua-lipa',
            bio: 'Dua Lipa (born August 22, 1995) is an English and Albanian singer and songwriter known for her mezzo-soprano vocal range and disco-influenced sound.',
            gallery: [medison, maneskin, jensen, victoria1, victoria2, victoria3],
        },
        {
            id: 2,
            name: 'The Weeknd',
            img: weekend,
            url: '/artists/the-weeknd',
            bio: 'Abel Makkonen Tesfaye (born February 16, 1990), known professionally as The Weeknd, is a Canadian singer, songwriter, and actor known for his sonic versatility.',
            gallery: [weeknd1, weeknd2, weeknd3, weeknd4, weeknd5, weeknd6],
        },
        {
            id: 3,
            name: 'Sabrina Carpenter',
            img: sabrina,
            url: '/artists/sabrina-carpenter',
            bio: 'Sabrina Annlynn Carpenter (born May 11, 1999) is an American singer and actress known for her pop music and television roles.',
            gallery: [sabrina1, sabrina2, sabrina3, sabrina4, sabrina5, sabrina6, medison, maneskin, jensen, victoria1, victoria2, victoria3, medison1, medison2, medison3, medison4, medison5, medison6],
        },
        {
            id: 4,
            name: 'Eminem',
            img: eminemPort,
            url: '/artists/eminem',
            bio: 'Marshall Bruce Mathers III (born October 17, 1972), known professionally as Eminem, is an American rapper, songwriter, and record producer.',
            gallery: [maneskin, victoria1, victoria2, victoria3, victoria4, victoria5, sabrina1, sabrina2, sabrina3, sabrina4, sabrina5, sabrina6, medison1, medison2, medison3, medison4, medison5, medison6],
        },
        {
            id: 5,
            name: 'Madison Beer',
            img: medisonBeerPort,
            url: '/artists/madison-beer',
            bio: 'Madison Elle Beer (born March 5, 1999) is an American singer and songwriter who gained media attention after Justin Bieber tweeted a link to one of her covers.',
            gallery: [medison1, medison2, medison3, medison4, medison5, medison6, sabrina1, sabrina2, sabrina3, sabrina4, sabrina5, sabrina6, medison, maneskin, jensen, victoria1, victoria2, victoria3, victoria1, victoria2, victoria3, victoria4, victoria5, victoria6],
        },
        {
            id: 6,
            name: 'Jensen Ackles',
            img: jensenPort,
            url: '/artists/jensen-ackles',
            bio: 'Jensen Ross Ackles (born March 1, 1978) is an American actor, singer, and director known for his role as Dean Winchester in the TV series Supernatural.',
            gallery: [jensen1, jensen2, jensen3, jensen4, jensen5, jensen6],
        },
        {
            id: 7,
            name: 'Lana Del Rey',
            img: lanaDelPort,
            url: '/artists/lana-del-rey',
            bio: 'Elizabeth Woolridge Grant (born June 21, 1985), known professionally as Lana Del Rey, is an American singer-songwriter known for her cinematic style.',
            gallery: [victoria1, victoria2, victoria3, victoria4, victoria5, victoria6],
        },
        {
            id: 8,
            name: 'Rihanna',
            img: rihannaPort,
            url: '/artists/rihanna',
            bio: 'Robyn Rihanna Fenty (born February 20, 1988) is a Barbadian singer, businesswoman, and actress known for her diverse musical style and business ventures.',
            gallery: [weeknd1, weeknd2, weeknd3, weeknd4, weeknd5, weeknd6],
        },
    ],
};

const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
        setItems(state, action: PayloadAction<PortfolioItem[]>) {
            state.items = action.payload;
        },
        moveNext(state) {
            const first = state.items.shift();
            if (first) state.items.push(first);
        },
        movePrev(state) {
            const last = state.items.pop();
            if (last) state.items.unshift(last);
        },
    },
});

export const {setItems, moveNext, movePrev} = portfolioSlice.actions;
export default portfolioSlice.reducer;
