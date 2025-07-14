import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import duaLipa from '@images/duaLipaPort.jpeg';
import weekend from "@images/weekendPort.jpeg";
import sabrina from "@images/sabrinaPort.jpeg";
import eminemPort from "@images/eminemPort.jpeg";
import medisonBeerPort from "@images/medisonBeerPort.jpeg";
import jensenPort from "@images/jensenPort.jpeg";
import lanaDelPort from "@images/lanaDelPort.jpeg";
import rihannaPort from "@images/rihannaPort.jpeg";

type PortfolioItem = {
    id: number;
    name: string;
    img: string;
    url?: string;
};

interface PortfolioState {
    items: PortfolioItem[];
}

const initialState: PortfolioState = {
    items: [
        { id: 1, name: 'Dua Lipa', img: duaLipa, url: '/artists/dua-lipa' },
        { id: 2, name: 'The Weeknd', img: weekend, url: '/artists/the-weeknd' },
        { id: 3, name: 'Sabrina Carpenter', img: sabrina, url: '/artists/sabrina-carpenter' },
        { id: 4, name: 'Eminem', img: eminemPort, url: '/artists/eminem' },
        { id: 5, name: 'Madison Beer', img: medisonBeerPort, url: '/artists/madison-beer' },
        { id: 6, name: 'Jensen Ackles', img: jensenPort, url: '/artists/jensen-ackles' },
        { id: 7, name: 'Lana Del Rey', img: lanaDelPort, url: '/artists/lana-del-rey' },
        { id: 8, name: 'Rihanna', img: rihannaPort, url: '/artists/rihanna' },
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
