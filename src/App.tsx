import { useTranslation } from "react-i18next"
import Header from "./common/Header"
import AboutMe from "./components/AboutMe"
import Carousel from "./components/Carousel"
import Hero from "./components/Hero"
import SwitchMode from "./components/SwitchMode"
import skills from "./data/skills"
import Break from "./components/Break"
import projects from "./data/projects"
import testimonials from "./data/testimonials"

const App = () => {


  const { t } = useTranslation();
  const lang = localStorage.getItem('lang');


  return (
    <>
      <div className="h-max bg-primary-bg-light dark:bg-primary-bg-dark pt-20 overflow-x-hidden">
        <Header />
        <Hero />
        <AboutMe />
        <Carousel 
          title={t('general:skills', { lng: lang || 'en'})}
          direction="left"
          speed="slow"
          standaloneItems={skills}
        />
        <Break />
        <Carousel 
          title={t('header:nav_projects', { lng: lang || 'en'})}
          direction="left"
          speed="slow"
          projects={projects}
        />
        <Carousel 
          title={t('header:nav_testimonials', { lng: lang || 'en'})}
          direction="right"
          speed="slow"
          testimonias={testimonials}
        />
        <Break paddingX={0} />
        <SwitchMode />
      </div>
    </>
  )
}

export default App
