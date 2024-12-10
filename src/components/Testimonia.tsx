import { TestimoniaProps } from "./Carousel"
import { FC } from "react"


const Testimonia: FC<TestimoniaProps> = (person: TestimoniaProps) => {
  return (
    <div className="font-text w-60 bg-accent-light bg-opacity-30 flex flex-col items-center py-4 rounded-md shadow-md transition-all duration-300 hover:bg-opacity-90">
        <img 
            className="w-16 h-16 rounded-full border-primary border-2 mb-2 hover:scale-110 cursor-pointer transition-all duration-300"
            src={person.img} 
            alt={person.name} 
        />
        <p className="text-[.9em] italic text-center text-primary-light dark:text-primary-dark px-2">
            {person.testimonia} - <span className="font-bold font-title">{person.name}</span>
        </p>
    </div>
  )
}

export default Testimonia;