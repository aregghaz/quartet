import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import AboutSlide1 from '../assets/images/AboutSLide1.png';
import AboutSlide2 from '../assets/images/rekImage.jpg';
import AboutSlide3 from '../assets/images/AboutSLide3.png';
import { Autoplay } from 'swiper/modules';
export default function AboutSlider() {
    return (_jsx("div", { className: "aboutSliderWrapper", children: _jsxs(Swiper, { modules: [Autoplay], spaceBetween: 20, slidesPerView: 1, loop: true, autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            }, children: [_jsx(SwiperSlide, { children: _jsx("img", { src: AboutSlide1, style: { objectFit: 'cover' }, width: '100%', height: '100%', alt: "Slide 1" }) }), _jsx(SwiperSlide, { children: _jsx("img", { src: AboutSlide2, style: { objectFit: 'cover' }, width: '100%', height: '100%', alt: "Slide 2" }) }), _jsx(SwiperSlide, { children: _jsx("img", { src: AboutSlide3, style: { objectFit: 'cover' }, width: '100%', height: '100%', alt: "Slide 3" }) })] }) }));
}
