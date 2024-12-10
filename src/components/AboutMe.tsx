import { useTranslation } from "react-i18next"
import aboutImage from '../assets/img/about-image.png'
import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import TextTypingEffect from "./TextTypingEffect";


const AboutMe = () => {
    const { t } = useTranslation();
    const lang = localStorage.getItem('lang');
    const refDescription = useRef(null);
    const [rect, setRect] = useState<DOMRect | null>(null);

    useEffect(() => {
        setRect((refDescription.current! as HTMLDivElement).getBoundingClientRect());
    }, [rect?.height])

    return (
        <div dir={lang === 'ar' ? 'rtl' : 'ltr'} className="flex relative md:mx-20 h-max md:my-20 my-10 justify-center flex-col items-center">
            <h1 className={`text-3xl ${lang === 'ar' ? 'font-amiri' : 'font-poppins'} text-accent-light`}>{t('about:who_am_i', { lng: lang || 'en' })}</h1>
            <div className="w-full flex md:flex-row md:items-end md:gap-10 flex-col">
                <motion.div
                    ref={refDescription}
                    className="md:w-7/12 p-4 rounded-lg relative">
                    <TextTypingEffect 
                        className="text-primary-light dark:text-primary-dark text-xl md:text-start text-center"
                        tag={'p'}
                        once={true}
                        typingSpeed={30}
                        text={t('hero:info.description', { lng: lang || 'en' })}
                    />
                </motion.div>
                <div className="md:w-5/12 flex flex-col items-center">
                    <motion.img
                        initial={{ x: lang === 'ar' ? -400: 400 }}
                        whileInView={{ x: 0, transition: { duration: 1 } }}
                        viewport={{ once: true }}
                        className="md:w-4/5"
                        src={aboutImage}
                        alt="About me image"
                    />
                    <div className="h-[1px] w-full bg-accent-light shadow-xl"></div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe