import '@styles/guestArtists.scss'
import { useDispatch } from 'react-redux';
import { openGuestModal } from '@store/slices/guestArtistsSlice';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { EffectFade, Navigation} from "swiper/modules";
import {useSelector} from 'react-redux';
import {RootState} from '@store/store';
import {useEffect, useState} from "react";
import GuestModal from "@components/GuestModal";


export default function GuestArtists() {
    const guestArtists = useSelector((state: RootState) => state.guestArtists.artists);
    const [effect, setEffect] = useState<'coverflow' | 'fade'>('coverflow');

    const dispatch = useDispatch();
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 820) {
                setEffect('fade');
            } else {
                setEffect('coverflow');
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section className="guest" id={'Guest'}>
            <div className="topTitle">
                <h2>Guest Artists</h2>
            </div>
            <div className="globContainer">
                <Swiper
                    effect={effect}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={window.innerWidth <= 820 ? 1 : 3}
                    navigation
                    loop={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 200,
                        modifier: 2,
                        slideShadows: false,
                    }}
                    fadeEffect={{ crossFade: true }}
                    modules={[Navigation,  EffectFade]}
                    className="guestSwiper"
                >
                    {guestArtists.map((artist) => (
                        <SwiperSlide key={artist.id} className="guestSlide">
                            <div className="guestCard" onClick={() => dispatch(openGuestModal(artist))} style={{backgroundImage: `url(${artist.imageUrl})`}}>
                                <div className="leftLabel">
                                    <p className="artistName">{artist.name}</p>
                                    <span className="artistRole">{artist.role}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <GuestModal />
            </div>
        </section>
    )
}