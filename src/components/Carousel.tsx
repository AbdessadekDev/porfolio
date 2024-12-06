import { FC, useRef } from "react"
import useAddAnimation from "../hooks/useAddAnimation"
import { motion } from "motion/react"
import "../assets/css/Carousel.css"
import Project from "./Project"
import Testimonia from "./Testimonia"
import Skill from "./Skill"
import { IconType } from "react-icons"

export type TestimoniaProps = {
  name: string,
  img: string,
  testimonia: string

}

export type ProjectProps = {
  id: number,
  title: string,
  img: string,
  descrip: string,
  url?: string
}
export type StandaloneProps = {
  name: string,
  icon: IconType,
  docPage: string
}

type CarouselProps = {
  projects?: ProjectProps[],
  standaloneItems?: StandaloneProps[],
  testimonias?: TestimoniaProps[],
  title: string,
  speed: string,
  direction: string
}


const Carousel: FC<CarouselProps> = ({ testimonias, projects, standaloneItems, title, speed, direction }) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useAddAnimation(scrollerRef);
  return (
    <motion.div
      initial={{ y: "200px" }}
      whileInView={{ y: 0, transition: { duration: 1 } }}
      viewport={{ once: true }}
      ref={scrollerRef}
      className='scroller mx-auto font-text'
      data-speed={speed}
      data-direction={direction}>
      <h1 className={`text-center mb-4 text-3xl font-title text-accent-light dark:text-accent-dark`}>{title}</h1>
      <motion.div
        className='scroller__inner'>
        {testimonias && testimonias.map((person, index) => (
          <Testimonia key={index} {...person} />
        ))}
        {projects && projects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
        {standaloneItems && standaloneItems.map((singleItem, index) => (
          <Skill key={index} {...singleItem} />
        ))}
      </motion.div>
    </motion.div>
  )
}


export default Carousel