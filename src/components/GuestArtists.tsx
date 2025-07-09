import '@styles/guestArtists.scss'

import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {Navigation} from "swiper/modules";
import {useSelector} from 'react-redux';
import {RootState} from '@store/store';


export default function GuestArtists() {
    const guestArtists = useSelector((state: RootState) => state.guestArtists.artists);

    return (
        <section className="guest" id={'Guest'}>
            <div className="topTitle">
                <h2>Guest Artists</h2>
            </div>
            <div className="globContainer">
                <Swiper
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={3}
                    navigation
                    loop={true}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 200,
                        modifier: 2,
                        slideShadows: false,
                    }}
                    modules={[Navigation]}
                    className="guestSwiper"
                >
                    {guestArtists.map((artist) => (
                        <SwiperSlide key={artist.id} className="guestSlide">
                            <div className="guestCard" style={{backgroundImage: `url(${artist.imageUrl})`}}>
                                <div className="leftLabel">
                                    <p className="artistName">{artist.name}</p>
                                    <span className="artistRole">{artist.role}</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </section>
    )
}