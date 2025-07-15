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
    gallery?: string[];
    reviews?: { title: string; content: string }[];
    videos?: string[]
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
            reviews: [
                { title: 'Best Concert Ever', content: 'I saw Dua in London last month, and it was absolutely unforgettable. Her voice live is even better than the recordings!' },
                { title: 'Incredible Light Show', content: 'Every song had unique lights and visuals. It felt like a true performance, not just singing.' },
                { title: 'Full of Energy', content: 'She kept the energy high from start to finish. Everyone was dancing!' },
                { title: 'Loved the Interaction', content: 'Dua spoke to the crowd a lot, laughed, and made it feel personal.' },
                { title: 'Amazing Costumes', content: 'The outfit changes were so stylish and matched the mood of each song.' },
                { title: 'Surprise Encore', content: 'At the end, she performed one more song that no one expected. The crowd went wild.' },
                { title: 'Venue Too Crowded', content: 'Only complaint — the venue was packed and it was hard to breathe at times.' },
                { title: 'I Need More!', content: 'I grew up listening to her and this concert blew me away. Hope to see her live again soon.' },
            ],
            videos: [
                'https://www.youtube.com/embed/eVli-tstM5E?si=9yz5a5rzrPAzgNwY',
                'https://www.youtube.com/embed/VJPhmau5Vgk?si=vlNa8w5s-r2jDyJ_',
                'https://www.youtube.com/embed/1YUBbF24H44?si=b2pgXpggXvs15T7X',
                'https://www.youtube.com/embed/aSugSGCC12I?si=JMp40-20SE403ovd',

            ]
        },
        {
            id: 2,
            name: 'The Weeknd',
            img: weekend,
            url: '/artists/the-weeknd',
            bio: 'Abel Makkonen Tesfaye (born February 16, 1990), known professionally as The Weeknd, is a Canadian singer, songwriter, and actor known for his sonic versatility.',
            gallery: [weeknd1, weeknd2, weeknd3, weeknd4, weeknd5, weeknd6, jensen1, jensen2, jensen3, jensen4, jensen5, jensen6],
            reviews: [
                { title: 'Cinematic Performance', content: 'It felt like being inside a movie. Every song was staged perfectly with light and visuals.' },
                { title: 'Emotional Setlist', content: 'His voice touches your soul, especially on the older tracks.' },
                { title: 'Wanted More Old Songs', content: 'He focused a lot on new tracks. Would love more from earlier albums too.' },
                { title: 'Crystal Clear Sound', content: 'The audio quality was amazing. No distortions, even on the bass-heavy songs.' },
                { title: 'Dark and Moody', content: 'The whole vibe was very atmospheric and immersive. Perfect for The Weeknd’s style.' },
                { title: 'Crowd Was Singing', content: 'Everyone knew the words. Felt like a massive karaoke session with thousands of people.' },
                { title: 'Well Organized Event', content: 'Everything from entry to security ran smoothly. Kudos to the organizers.' },
                { title: 'Live Vocals On Point', content: 'He proved he’s not just a studio artist. His voice live is impressive.' },
            ],
            videos: [
                'https://www.youtube.com/embed/eVli-tstM5E?si=9yz5a5rzrPAzgNwY',
                'https://www.youtube.com/embed/VJPhmau5Vgk?si=vlNa8w5s-r2jDyJ_',
                'https://www.youtube.com/embed/1YUBbF24H44?si=b2pgXpggXvs15T7X',
                'https://www.youtube.com/embed/aSugSGCC12I?si=JMp40-20SE403ovd',
                'https://www.youtube.com/embed/eVli-tstM5E?si=9yz5a5rzrPAzgNwY',

            ]
        },
        {
            id: 3,
            name: 'Sabrina Carpenter',
            img: sabrina,
            url: '/artists/sabrina-carpenter',
            bio: 'Sabrina Annlynn Carpenter (born May 11, 1999) is an American singer and actress known for her pop music and television roles.',
            gallery: [sabrina1, sabrina2, sabrina3, sabrina4, sabrina5, sabrina6, medison, maneskin, jensen, victoria1, victoria2, victoria3, medison1, medison2, medison3, medison4, medison5, medison6,sabrina1, sabrina2, sabrina3, sabrina4, sabrina5, sabrina6, medison, maneskin, jensen, victoria1, victoria2, victoria3, medison1, medison2, medison3, medison4, medison5, medison6],
            reviews: [
                { title: 'Relaxed and Fun', content: 'Sabrina created such a friendly, easy-going vibe during her performance.' },
                { title: 'Personal Stories', content: 'Loved hearing her share little stories between songs. Made it feel intimate.' },
                { title: 'Lyrics Hit Different', content: 'Hearing her songs live gave the lyrics new life. It felt personal.' },
                { title: 'Smaller Venue', content: 'The venue was cozy, which actually made the whole night feel exclusive.' },
                { title: 'Incredible Stage Presence', content: 'She knows how to work a crowd without trying too hard.' },
                { title: 'Unexpected Covers', content: 'She performed a surprise cover of Taylor Swift’s song. Crowd loved it!' },
                { title: 'Friendly Energy', content: 'She seemed genuinely happy to be there, which was so refreshing to see.' },
                { title: 'Amazing Vocals', content: 'Her voice is much stronger live than I expected. Total star.' },
            ],
            videos: [
                'https://www.youtube.com/embed/eVli-tstM5E?si=9yz5a5rzrPAzgNwY',
                'https://www.youtube.com/embed/VJPhmau5Vgk?si=vlNa8w5s-r2jDyJ_',
                'https://www.youtube.com/embed/1YUBbF24H44?si=b2pgXpggXvs15T7X',
                'https://www.youtube.com/embed/aSugSGCC12I?si=JMp40-20SE403ovd',
                'https://www.youtube.com/embed/eVli-tstM5E?si=9yz5a5rzrPAzgNwY',
                'https://www.youtube.com/embed/VJPhmau5Vgk?si=vlNa8w5s-r2jDyJ_',
                'https://www.youtube.com/embed/1YUBbF24H44?si=b2pgXpggXvs15T7X',
                'https://www.youtube.com/embed/aSugSGCC12I?si=JMp40-20SE403ovd',
            ]
        },
        {
            id: 4,
            name: 'Eminem',
            img: eminemPort,
            url: '/artists/eminem',
            bio: 'Marshall Bruce Mathers III (born October 17, 1972), known professionally as Eminem, is an American rapper, songwriter, and record producer.',
            gallery: [maneskin, victoria1, victoria2, victoria3, victoria4, victoria5, sabrina1, sabrina2, sabrina3, sabrina4, sabrina5, sabrina6, medison1, medison2, medison3, medison4, medison5, medison6],
            reviews: [
                { title: 'Legendary', content: 'Eminem’s live energy is insane. He raps every word perfectly without missing a beat.' },
                { title: 'Great Mix of Old and New', content: 'He performed both classic hits and new material. Crowd went crazy during Lose Yourself.' },
                { title: 'Fast Rapping Live', content: 'Didn’t think he could do Rap God live... but he did. And flawlessly.' },
                { title: 'Surprise Guest', content: '50 Cent showed up mid-set! Totally unexpected and amazing.' },
                { title: 'Real Talk Moments', content: 'Eminem talked about his struggles and life before a few songs. Very real.' },
                { title: 'Intense Atmosphere', content: 'Dark stage lighting and powerful bass made it feel raw and powerful.' },
                { title: 'Shorter Than Expected', content: 'Show felt a bit short, but every minute was high energy.' },
                { title: 'Best Night Ever', content: 'I grew up listening to him. Seeing him live was a bucket-list moment for me.' },
            ],
            videos: [
                'https://www.youtube.com/embed/eVli-tstM5E?si=9yz5a5rzrPAzgNwY',
                'https://www.youtube.com/embed/VJPhmau5Vgk?si=vlNa8w5s-r2jDyJ_',
                'https://www.youtube.com/embed/1YUBbF24H44?si=b2pgXpggXvs15T7X',
                'https://www.youtube.com/embed/aSugSGCC12I?si=JMp40-20SE403ovd',
                'https://www.youtube.com/embed/eVli-tstM5E?si=9yz5a5rzrPAzgNwY',

            ]
        },
        {
            id: 5,
            name: 'Madison Beer',
            img: medisonBeerPort,
            url: '/artists/madison-beer',
            bio: 'Madison Elle Beer (born March 5, 1999) is an American singer and songwriter who gained media attention after Justin Bieber tweeted a link to one of her covers.',
            gallery: [medison1, medison2, medison3, medison4, medison5, medison6, sabrina1, sabrina2, sabrina3, sabrina4, sabrina5, sabrina6, medison, maneskin, jensen, victoria1, victoria2, victoria3, victoria1, victoria2, victoria3, victoria4, victoria5, victoria6],
            reviews: [
                { title: 'Beautiful Voice', content: 'Madison’s vocals are soft but strong. She sounds just as good live as in the studio.' },
                { title: 'Cozy Show', content: 'Her concert felt intimate, like she was performing for friends.' },
                { title: 'Elegant Performance', content: 'Her stage presence is calm yet captivating. Pure class.' },
                { title: 'Emotional Moments', content: 'She teared up singing one of her slower songs. Felt very raw.' },
                { title: 'Flawless Sound', content: 'Sound quality was perfect. Could hear every note clearly.' },
                { title: 'Friendly Interaction', content: 'She thanked fans multiple times and talked between songs.' },
                { title: 'Visuals Could Improve', content: 'Only complaint is visuals were quite minimal. Focus was purely on her voice.' },
                { title: 'Loved the Covers', content: 'Her acoustic cover of Lana Del Rey’s song was a beautiful surprise.' },
            ],
            videos: [
                'https://www.youtube.com/embed/eVli-tstM5E?si=9yz5a5rzrPAzgNwY',
                'https://www.youtube.com/embed/VJPhmau5Vgk?si=vlNa8w5s-r2jDyJ_',
                'https://www.youtube.com/embed/1YUBbF24H44?si=b2pgXpggXvs15T7X',

            ]
        },
        {
            id: 6,
            name: 'Jensen Ackles',
            img: jensenPort,
            url: '/artists/jensen-ackles',
            bio: 'Jensen Ross Ackles (born March 1, 1978) is an American actor, singer, and director known for his role as Dean Winchester in the TV series Supernatural.',
            gallery: [jensen1, jensen2, jensen3, jensen4, jensen5, jensen6, weeknd1, weeknd2, weeknd3, weeknd4, weeknd5, weeknd6, victoria4, victoria5, victoria6],
            reviews: [
                { title: 'Unexpected Talent', content: 'Didn’t know Jensen could sing this well. Very impressed!' },
                { title: 'Country Rock Vibe', content: 'His music style leans country-rock. The band was tight and professional.' },
                { title: 'Laid Back Atmosphere', content: 'Felt more like hanging out at a pub than a big concert, in a good way.' },
                { title: 'Supernatural Stories', content: 'He joked about Supernatural between songs. Fans loved it.' },
                { title: 'Strong Voice', content: 'Deep, raspy voice fits his music style perfectly.' },
                { title: 'Cool Personality', content: 'Really personable and cool on stage. Just felt natural.' },
                { title: 'Not Many Songs', content: 'Wish he had more songs to perform. Hoping for a longer album soon.' },
                { title: 'Fun Night', content: 'It was casual but fun. Would definitely see him again live.' },
            ],
            videos: [
                'https://www.youtube.com/embed/eVli-tstM5E?si=9yz5a5rzrPAzgNwY',
                'https://www.youtube.com/embed/VJPhmau5Vgk?si=vlNa8w5s-r2jDyJ_',
                'https://www.youtube.com/embed/1YUBbF24H44?si=b2pgXpggXvs15T7X',
                'https://www.youtube.com/embed/aSugSGCC12I?si=JMp40-20SE403ovd',
                'https://www.youtube.com/embed/eVli-tstM5E?si=9yz5a5rzrPAzgNwY',

            ]
        },
        {
            id: 7,
            name: 'Lana Del Rey',
            img: lanaDelPort,
            url: '/artists/lana-del-rey',
            bio: 'Elizabeth Woolridge Grant (born June 21, 1985), known professionally as Lana Del Rey, is an American singer-songwriter known for her cinematic style.',
            gallery: [victoria1, victoria2, victoria3, victoria4, victoria5, victoria6, victoria4, victoria5, victoria6],
            reviews: [
                { title: 'Dreamlike Show', content: 'Lana’s voice sounds haunting live. Like stepping into another world.' },
                { title: 'Cinematic Ambience', content: 'The visuals were slow-moving, moody, and beautiful. Very Lana style.' },
                { title: 'Pure Emotion', content: 'Her performance of "Young and Beautiful" gave me chills.' },
                { title: 'Shy but Lovely', content: 'She’s not much of a talker on stage, but it adds to her mysterious vibe.' },
                { title: 'Slow and Mesmerizing', content: 'It’s not a dance party show — it’s an experience. Slow but captivating.' },
                { title: 'Soft Lighting', content: 'The stage looked like an old movie set. Just stunning.' },
                { title: 'Audience in Silence', content: 'People were just silently listening, mesmerized. Really unusual but magical.' },
                { title: 'Special Night', content: 'Her music feels deeply personal, and it translated perfectly live.' },
            ],
            videos: [
                'https://www.youtube.com/embed/eVli-tstM5E?si=9yz5a5rzrPAzgNwY',
                'https://www.youtube.com/embed/VJPhmau5Vgk?si=vlNa8w5s-r2jDyJ_',
                'https://www.youtube.com/embed/1YUBbF24H44?si=b2pgXpggXvs15T7X',
                'https://www.youtube.com/embed/aSugSGCC12I?si=JMp40-20SE403ovd',
            ]
        },
        {
            id: 8,
            name: 'Rihanna',
            img: rihannaPort,
            url: '/artists/rihanna',
            bio: 'Robyn Rihanna Fenty (born February 20, 1988) is a Barbadian singer, businesswoman, and actress known for her diverse musical style and business ventures.',
            gallery: [weeknd1, weeknd2, weeknd3, weeknd4, weeknd5, weeknd6,victoria4, victoria5, victoria6, weeknd1, weeknd2, weeknd3, weeknd4,],
            reviews: [
                { title: 'Showstopper', content: 'Rihanna knows how to own the stage. Every song was a hit, back-to-back.' },
                { title: 'Incredible Dance', content: 'Her backup dancers and choreography made the show electric.' },
                { title: 'Powerhouse Vocals', content: 'Her voice is as strong live as it is on her albums.' },
                { title: 'Massive Energy', content: 'From the first track to the last, it was pure energy. Non-stop.' },
                { title: 'Glamorous Outfits', content: 'Each outfit change was more stylish than the last.' },
                { title: 'Fan Interactions', content: 'She smiled, laughed, and interacted with fans between songs.' },
                { title: 'Wanted More Ballads', content: 'Personally wish she sang more slow songs like Stay and Love On The Brain.' },
                { title: 'Iconic Performance', content: 'It felt like watching a superstar in her prime. Worth every second.' },
            ],
            videos: [
                'https://www.youtube.com/embed/eVli-tstM5E?si=9yz5a5rzrPAzgNwY',
                'https://www.youtube.com/embed/VJPhmau5Vgk?si=vlNa8w5s-r2jDyJ_',

            ]
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
