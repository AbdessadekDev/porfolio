// Importing necessary dependencies and assets
import { motion } from "motion/react"; // For animations
import { Link } from "react-router-dom"; // For navigation
import { useTranslation } from "react-i18next"; // For internationalization
import "../assets/css/Header.css"; // CSS for the header
import { BsFillCloudDownloadFill } from "react-icons/bs"; // Cloud download icon
import cvEn from "../assets/pdf/abdessadek-sbaai-cv-en.pdf"; // English CV
import cvFr from "../assets/pdf/abdessadek-sbaai-cv-fr.pdf"; // French CV
import Dropdown from "../components/Dropdown"; // Custom dropdown component
import React, { useEffect, useState } from "react"; // React hooks
import { IoMdClose } from "react-icons/io"; // Menu icons
import { IoMenu } from "react-icons/io5";

// Header component definition
const Header = () => {
    // State variables
    const [selectedValue, setSelectedValue] = useState<string | null>(null); // Selected language display label
    const [originalSelectedValue, setOriginalSelectedValue] = useState<string | null>(localStorage.getItem("lang")); // Selected language value
    const [toggleMenu, setToggleMenu] = useState(false); // Mobile menu toggle state
    const { t } = useTranslation(); // Translation function from i18n

    // Navigation items and their translations
    const navItems = ["Hero", "About", "Projects", "Testimonials", "Contact"];
    const translatedNavItems = [
        t("header:nav-hero", { lng: originalSelectedValue || "en" }) === "nav-hero"
            ? "Hero"
            : t("header:nav-hero", { lng: originalSelectedValue || "en" }),
        t("header:nav-about", { lng: originalSelectedValue || "en" }) === "nav-about"
            ? "About"
            : t("header:nav-about", { lng: originalSelectedValue || "en" }),
        t("header:nav-projects", { lng: originalSelectedValue || "en" }) === "nav-projects"
            ? "Projects"
            : t("header:nav-projects", { lng: originalSelectedValue || "en" }),
        t("header:nav-testimonitals", { lng: originalSelectedValue || "en" }) === "nav-testimonitals"
            ? "Testimonials"
            : t("header:nav-testimonitals", { lng: originalSelectedValue || "en" }),
        t("header:nav-contact", { lng: originalSelectedValue || "en" }) === "nav-contact"
            ? "Contact"
            : t("header:nav-contact", { lng: originalSelectedValue || "en" }),
    ];

    // Supported languages
    const langs = [
        { label: "English", value: "en" },
        { label: "Français", value: "fr" },
        { label: "العربية", value: "ar" },
    ];

    // Handle language selection from the dropdown
    const handleDropdownChange = (value: string) => {
        const selectedLang = langs.find((lng) => lng.value === value);
        setSelectedValue(selectedLang?.label || "languages");
        setOriginalSelectedValue(value);
        localStorage.setItem("lang", value);
        window.location.reload(); // Reload to apply language change
    };

    // Toggle mobile menu state
    const handleToggleMenu = () => {
        setToggleMenu((prev) => !prev);
    };

    // Handle navigation clicks for mobile
    const handleNavigationMobile = (event: React.MouseEvent<HTMLAnchorElement>) => {
        setToggleMenu(false);
    };

    // Handle navigation clicks for desktop (placeholder for future functionality)
    const handleNavigationDesktop = (event: React.MouseEvent<HTMLAnchorElement>) => {
        // Logic for navigation can be added here if needed
    };

    // Set the initial language from local storage
    useEffect(() => {
        const lang = localStorage.getItem("lang");
        if (lang) {
            const selectedLang = langs.find((lng) => lng.value === lang);
            setSelectedValue(selectedLang?.label || "languages");
            setOriginalSelectedValue(lang);
        } else {
            setSelectedValue("languages");
            setOriginalSelectedValue("en");
        }
    }, [selectedValue]);

    // JSX for rendering the header
    return (
        <header
            dir={originalSelectedValue === "ar" ? "rtl" : "ltr"}
            className={`z-10 ${toggleMenu ? 'dark:bg-primary-bg-dark bg-primary-bg-light' : 'backdrop-blur-md' } fixed top-0 w-full py-4 md:px-10 px-5 flex justify-between items-center font-${originalSelectedValue === "ar" ? "tajawal" : "poppins"} text-primary-light dark:text-primary-dark`}
        >
            {/* Logo */}
            <motion.h1
                initial={{ x: originalSelectedValue === "ar" ? "200px" : "-200px" }}
                animate={{ x: 0, transition: { duration: 0.5 } }}
                className={`${originalSelectedValue === "ar" ? "bg-logo-ar" : "bg-logo"
                    } md:w-[204.8px] md:h-[52.8px] w-[153.6px] h-[39.6px] bg-logo-size-sm md:bg-logo-size-md bg-no-repeat overflow-hidden`}
            />

            {/* Desktop navigation */}
            <motion.nav className="w-2/3 md:flex hidden items-center justify-between">
                <ul className="w-max flex md:flex-row flex-col">
                    {translatedNavItems.map((item, index) => (
                        <li key={index} className="overflow-hidden w-[90px] text-center">
                            <Link
                                onClick={handleNavigationDesktop}
                                id={navItems[index].toLowerCase()}
                                className="text-[.9em] text-nowrap py-1 hover:text-accent-light hover:font-bold transition-all duration-300"
                                to={`#${navItems[index].toLowerCase()}`}
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="w-max flex gap-2 items-center">
                    {/* CV download link */}
                    <Link
                        download
                        to={originalSelectedValue === "fr" ? cvFr : cvEn}
                        target="_blank"
                        className="text-[.6em] flex gap-1 items-center font-bold py-[6px] px-4 rounded-md border hover:border-accent-light hover:bg-accent-light hover:text-primary-bg-light transition"
                    >
                        <BsFillCloudDownloadFill />
                        <span>{t("cv", { lng: originalSelectedValue || "en" }).toUpperCase()}</span>
                    </Link>

                    {/* Language dropdown */}
                    <Dropdown
                        title={selectedValue || t("languages")}
                        options={langs}
                        onChange={handleDropdownChange}
                        className="w-24 text-[.6em] rounded-md transition hover:bg-accent-light hover:text-primary-bg-light py-[6px]"
                    />
                </div>
            </motion.nav>

            {/* Mobile menu button */}
            <button onClick={handleToggleMenu} className="md:hidden text-3xl font-bold">
                {toggleMenu ? <IoMdClose /> : <IoMenu />}
            </button>

            {/* Mobile navigation */}
            <motion.nav
                initial={{ x: "100%" }}
                animate={{ x: toggleMenu ? 0 : "100%" }}
                className="z-10 backdrop-blur-md fixed top-[72px] w-full right-0 flex md:hidden flex-col p-4">
                <ul>
                    {translatedNavItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                onClick={handleNavigationMobile}
                                id={navItems[index].toLowerCase()}
                                to={`#${navItems[index].toLowerCase()}`}
                                className="block py-2 px-4 hover:bg-accent-light transition duration-150 hover:bg-opacity-20"
                            >
                                {item}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="w-max flex gap-2 items-center p-4">
                    {/* CV download link */}
                    <Link
                        download
                        to={originalSelectedValue === "fr" ? cvFr : cvEn}
                        target="_blank"
                        className="text-[.6em] flex gap-1 items-center font-bold py-[6px] px-4 rounded-md border hover:border-accent-light hover:bg-accent-light hover:text-primary-bg-light transition"
                    >
                        <BsFillCloudDownloadFill />
                        <span>{t("cv", { lng: originalSelectedValue || "en" }).toUpperCase()}</span>
                    </Link>

                    {/* Language dropdown */}
                    <Dropdown
                        title={selectedValue || t("languages")}
                        options={langs}
                        onChange={handleDropdownChange}
                        className="w-24 text-[.6em] rounded-md transition hover:bg-accent-light hover:text-primary-bg-light py-[6px]"
                    />
                </div>
            </motion.nav>
        </header>
    );
};

export default Header;
