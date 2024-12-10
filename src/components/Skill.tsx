import { FC } from "react"
import { StandaloneProps } from "./Carousel";
import { Link } from "react-router-dom";


const Skill:FC<StandaloneProps> = (skill) => {
    return (
        <Link to={skill.docPage} target="_blank" className={`py-2 px-4 hover:scale-105 text-primary-light dark:text-primary-dark flex items-center gap-1 border-accent-light border-2 rounded-md hover:bg-opacity-100 hover:text-primary-bg-light bg-accent-light bg-opacity-20 transition duration-300`}>
            <skill.icon />
            <span>{skill.name}</span>
        </Link>
    )
}

export default Skill;