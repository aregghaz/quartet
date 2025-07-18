import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import AboutSlide1 from '@images/AboutSLide1.png';
import AboutSlide2 from '@images/rekImage.jpg';
import AboutSlide3 from '@images/AboutSlide3.png';
import { Autoplay } from 'swiper/modules';



export default function ContactSlider() {
    return (
        <div className="aboutSliderWrapper">
            <Swiper
                modules={[Autoplay]}
                spaceBetween={20}
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
            >
                <SwiperSlide><img src={AboutSlide1} style={{objectFit: 'cover'}} width={'100%'} height={'100%'} alt="Slide 1" /></SwiperSlide>
                <SwiperSlide><img src={AboutSlide2} style={{objectFit: 'cover'}} width={'100%'} height={'100%'} alt="Slide 2" /></SwiperSlide>
                <SwiperSlide><img src={AboutSlide3} style={{objectFit: 'cover'}} width={'100%'} height={'100%'} alt="Slide 3" /></SwiperSlide>
            </Swiper>
        </div>
    );
}
