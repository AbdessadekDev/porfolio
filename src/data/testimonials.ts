import { TestimoniaProps } from "../components/Carousel";
import i18n from "../translate/i18next";

const lang = localStorage.getItem('lang');

const testimonials: TestimoniaProps[] = [
    {
        name: i18n.t('testimonials:ahmed.name', { lng: lang || 'en' }),
        testimonia: i18n.t('testimonials:ahmed.feedback', { lng: lang || 'en' }),
        img: 'https://picsum.photos/400/400'
    },
    {
        name: i18n.t('testimonials:fatima.name', { lng: lang || 'en' }),
        testimonia: i18n.t('testimonials:fatima.feedback', { lng: lang || 'en' }),
        img: 'https://picsum.photos/300/300'
    },
    {
        name: i18n.t('testimonials:hamid.name', { lng: lang || 'en' }),
        testimonia: i18n.t('testimonials:hamid.feedback', { lng: lang || 'en' }),
        img: 'https://picsum.photos/200/200'
    },
    {
        name: i18n.t('testimonials:joud.name', { lng: lang || 'en' }),
        testimonia: i18n.t('testimonials:joud.feedback', { lng: lang || 'en' }),
        img: 'https://picsum.photos/100/100'
    },
];



  export default testimonials;