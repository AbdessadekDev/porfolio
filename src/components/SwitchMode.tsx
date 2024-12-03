import useTheme from '../hooks/useTheme';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'

const SwitchMode: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-primary-bg-light dark:bg-primary-bg-dark text-primary-light dark:text-primary-dark">
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