import { FC, useContext, useState } from "react";
import { HiTranslate } from "react-icons/hi";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import { DropdownCTX } from "../common/Header";

interface DropdownProps {
  options: Array<{ label: string; value: string }>;
  title?: string;
  className?: string;
  onChange?: (value: string) => void;
}

const Dropdown: FC<DropdownProps> = ({ options, title, className, onChange }) => {
  const dropdown = useContext(DropdownCTX);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
    dropdown?.setDropped(!isOpen);
  };

  const handleOptionClick = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
    if (onChange) {
      onChange(value);
    }
  };


  return (
    <div
      className={`relative border p-1 rounded-md cursor-pointer ${className}`}
    >
      <div
        onClick={toggleDropdown}
        className="flex items-center justify-between"
        role="button"
        aria-expanded={isOpen}
        aria-haspopup="menu"
      >
        <span className="flex gap-1 items-center dark:text-primary-bg-light"><HiTranslate /> {selectedValue ? options.find((o) => o.value === selectedValue)?.label : title }</span>
        {isOpen ? <IoChevronUp/> : <IoChevronDown />} 
      </div>

      {isOpen && (
        <div
          className={`absolute flex flex-col items-center top-full left-0 mt-2 border rounded-md bg-primary-bg-light dark:bg-primary-bg-dark dark:bg-opacity-10 bg-opacity-10 ${isOpen ? 'backdrop-blur' : ''} dark:text-primary-bg-light shadow-lg py-2 w-full transition-all duration-300`}
          role="menu"
        >
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
              className="hover:bg-primary-light dark:hover:bg-primary-bg-light dark:hover:bg-opacity-10 hover:bg-opacity-20 text-primary-light dark:text-primary-bg-light font-bold font-tajawal rounded-md cursor-pointer py-2 px-4"
              role="menuitem"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
