declare module '*.scss' {
    const content: { [className: string]: string };
    export default content;
}

declare module '*.css';
declare module 'swiper/css';
declare module 'swiper/css/navigation';
declare module 'swiper/css/pagination';
// Swiper does _not_ ship a CSS file for autoplay, so you can omit this line or leave it here to silence the error:
declare module 'swiper/css/autoplay';
