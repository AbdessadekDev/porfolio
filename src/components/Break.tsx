import { motion } from 'motion/react'
import { FC } from 'react'

type BreakProps = {
  paddingX?: number
}



const Break: FC<BreakProps> = ({ paddingX=10 }) => {

  return (
    <motion.div
        initial={{y: "200px", opacity: 0}}
        whileInView={{y: 0, opacity: 1, transition: {duration: 1}}}
        viewport={{once: true}}
        className={`w-full flex flex-col my-10 gap-5 md:px-${paddingX * 2} px-${paddingX} items-center`}>
        <motion.div initial={{x:0}} whileInView={{x: "50%", transition: {duration: 1}}} viewport={{once: true}} className={`bg-accent-light rounded-full h-[1px] w-1/2`}></motion.div>
        <motion.div className={`bg-accent-light rounded-full h-[1px] w-full`}></motion.div>
        <motion.div initial={{x:0}} whileInView={{x: "-50%", transition: {duration: 1}}} viewport={{once: true}} className={`bg-accent-light rounded-full h-[1px] w-1/2 left-0`}></motion.div>
    </motion.div>
  )
}

export default Break