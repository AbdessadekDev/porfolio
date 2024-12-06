import { Link } from "react-router-dom";
import heroImage from "../assets/img/hero-image.png"
import { motion } from "motion/react"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import TypingEffect from "./TypingEffect";
import { useTranslation } from "react-i18next";

const Hero = () => {
    const lang = localStorage.getItem('lang');
    const { t } = useTranslation();
    const infos = [
        t('hero:info.name', { lng: lang || 'en' }),
        t('hero:info.username', { lng: lang || 'en' })
    ]


    return (
        <section dir={lang === 'ar' ? 'rtl' : 'ltr'} className={`flex relative md:flex-row flex-col items-center md:px-20 px-10 mt-20 w-full md:gap-20 gap-10 font-${lang === 'ar' ? 'tajawal' : 'poppins'}`}>
            <motion.div
                initial={{ x: lang === 'ar' ? 400 : -400, opacity: 0}}
                animate={{ x: lang === 'ar' ? 20 : -20, y: -20, opacity: .1, transition: { duration: 2, ease: "easeInOut", delay: 1 } }}
                className="md:block hidden w-64 h-64 bg-primary-bg-dark dark:bg-primary-bg-light absolute rounded-full">

            </motion.div>
            <motion.div
                initial={{ x: lang === 'ar' ? 400 : -400, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { duration: 1, ease: 'easeInOut' } }}
                className={`relative w-64 h-64 p-4 border-2 border-accent-light dark:border-primary-dark bg-accent-dark rounded-full overflow-hidden backdrop-blur-md  bg-opacity-15 border-opacity-20 max-w-64 min-w-64 max-h-64 min-h-64`}>
                <img 
                    src={heroImage} 
                    alt="hero-image"
                    style={{ zIndex: 1 }}
                    className={`absolute left-[50%] translate-x-[-50%] bottom-0 hover:scale-110 transition duration-300 cursor-pointer`}
                />
            </motion.div>
            <motion.div 
                initial={{ opacity: 0, scale: 2 }}
                animate={{ opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeInOut' } }}
                className="flex flex-col md:items-start items-center">
                <TypingEffect 
                    texts={infos}
                    typingSpeed={100} 
                    className={`text-3xl mb-2 text h-10 ${lang === 'ar'? 'font-tajawal' : 'font-poppins'} text-accent-light dark:text-accent-dark `} 
                    once={false}
                />
                <p className="text-primary-light dark:text-primary-dark mb-2 md:text-start text-center">
                    {t('hero:info.brief', { lng: lang || 'en' })}
                </p>
                <Link 
                    to={'#'}
                    target="_blank"
                    className={`
                    py-1 px-4 transition-all duration-500 border-2 
                    rounded-md border-secondary-light bg-secondary-light 
                    hover:border-accent-light dark:hover:border-accent-light
                    hover:bg-accent-light dark:hover:bg-accent-light
                    text-secondary-bg-light 
                    ${lang === 'ar'? 'font-tajawal' : 'font-poppins'} 
                    shadow-secondary-light hover:shadow-md 
                     hover:scale-105 
                    `}>
                    {t('hero:see-more', { lng: lang || 'en' })}
                </Link>
            </motion.div>
            <motion.div
                initial={{ x: lang === 'ar' ? -400 : 400, opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { duration: 1, ease: 'easeInOut' } }} 
                className={`text flex md:flex-col flex-row gap-4`}>
                <Link 
                    to="https://linkedin.com/in/abdessadek-sbaai" 
                    className={`hover:text-accent-light dark:hover:text-accent-light dark:text-secondary-dark text-secondary-light transition duration-300`}
                    target="_blank">
                    <FaLinkedin className="text-4xl" />
                </Link>
                <Link 
                    to="https://github.com/AbdessadekDev" 
                    className={`hover:text-accent-light dark:hover:text-accent-light dark:text-secondary-dark text-secondary-light transition duration-300`} 
                    target="_blank">
                    <FaGithub className="text-4xl" />
                </Link>
            </motion.div>
        </section>
    );
}

export default Hero;