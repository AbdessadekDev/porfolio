import { FC } from "react";
import { ProjectProps} from "./Carousel";
import { motion } from 'motion/react'

const Project: FC<ProjectProps> = (project) => {
    return (
        <div className="font-text relative w-64 h-72 border-primary border overflow-hidden rounded-lg shadow-lg cursor-pointer">
            {/* Image */}
            <img
                src={project.img} // Replace with your image URL
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-300 ease-in-out"
            />
            {/* Title and Description on hover */}
            {project.url ? (<a href={project.url} target="_blank">
                <motion.div
                    className={`absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 
                    text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:opacity-100`}>
                    <h3 className="text-2xl font-bold mb-2 font-title">{project.title}</h3>
                    <p className="text-center">{project.descrip}</p>
                </motion.div>
            </a>) 
              :(<motion.div
                    className={`absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 
                    text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:opacity-100`}>
                    <h3 className="text-2xl font-bold mb-2 font-title">{project.title}</h3>
                    <p className="text-center">{project.descrip}</p>
                </motion.div>) }
        </div>
    );
}

export default Project;