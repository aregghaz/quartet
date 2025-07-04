import { createSlice } from '@reduxjs/toolkit';

interface AboutState {
    title: string;
    subtitle: string;
    paragraphs: string[];
    finalNote: string;
    buttonText: string;
    infoNumber1: string;
    infoNumber2: string;
    infoNumber3: string;
    infoText1: string;
    infoText2: string;
    infoText3: string;
}

const initialState: AboutState = {
    title: "AM Music Lab",
    subtitle: "it's a sonic laboratory where tradition meets experimentation",
    paragraphs: [
        "Founded by visionary composer and artistic director Armen Martirosyan, AM Music Lab brings together virtuoso musicians from across the world to create a genre-bending musical experience that is as refined as it is daring.",
        "From Armenian folk motifs and Latin grooves to jazz improvisation and cinematic textures, the Lab thrives on fusion — not for the sake of novelty, but to discover truth through music.",
        "Each performance is an encounter — not just between instruments and styles, but between cultures, histories, and human stories. The ensemble’s ever-evolving lineup includes award-winning instrumentalists, vocalists, and composers, each contributing their distinct voice to a greater whole.",
    ],
    finalNote: "This is not just a concert. This is a conversation. A journey. A soundscape of possibility.",
    buttonText: "SEE OUR TOUR",
    infoNumber1: "30+",
    infoNumber2: "4K+",
    infoNumber3: "12+",
    infoText1: "Millions of copies sold worldwide",
    infoText2: "Successful shows across the country",
    infoText3: "Won multiple global music awards",
};

const aboutSlice = createSlice({
    name: 'about',
    initialState,
    reducers: {

    }
});

export default aboutSlice.reducer;