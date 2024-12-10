import useTheme from '../hooks/useTheme';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'

const SwitchMode: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed text-xl right-4 bottom-4 p-2 shadow-xl rounded-full bg-accent-light dark:bg-accent-dark text-primary-light dark:text-primary-bg-light">
      {theme === 'light' ?
        <BsFillMoonStarsFill
          className='hover:scale-110 transition-all duration-300'
        /> :
        <BsFillSunFill
          className='hover:animate-spin-slow'
        />}
    </button>
  );
};

export default SwitchMode;