import { ElementType, FC, useEffect, useState } from "react";
import { LuTextCursor } from "react-icons/lu";

interface TextTypingEffectProps {
  className?: string;
  style?: React.CSSProperties;
  tag?: ElementType;
  text: string;
  typingSpeed?: number;
  eraseSpeed?: number;
  once?: boolean;
  cursor?: "disable" | "enable";
}

const TextTypingEffect: FC<TextTypingEffectProps> = ({
  className,
  style,
  tag: Tag = "h1",
  typingSpeed = 100,
  eraseSpeed = 100,
  once = true,
  text,
  cursor = "disable",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // For cursor blinking
  const [isTyping, setIsTyping] = useState(true); // Indicates typing state
  const [isErasing, setIsErasing] = useState(false); // Indicates erasing state

  // Typing effect
  useEffect(() => {
    let interval: number | undefined;

    if (isTyping && currentIndex < text.length) {
      interval = setInterval(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, typingSpeed);
    } else if (currentIndex === text.length) {
      if (once) {
        setIsTyping(false); // Stop if `once` is true
      } else {
        setIsErasing(true); // Start erasing if `once` is false
        setIsTyping(false);
      }
    }

    return () => clearInterval(interval);
  }, [currentIndex, isTyping, text, typingSpeed, once]);

  // Erasing effect
  useEffect(() => {
    let interval:number | undefined;

    if (isErasing && currentIndex > 0) {
      interval = setInterval(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setCurrentIndex((prev) => prev - 1);
      }, eraseSpeed);
    } else if (currentIndex === 0 && isErasing) {
      setIsErasing(false);
      setIsTyping(true); // Restart typing
    }

    return () => clearInterval(interval);
  }, [currentIndex, isErasing, eraseSpeed]);

  // Cursor blinking effect
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible((prev) => !prev);
    }, 400);

    return () => clearTimeout(timeout);
  }, [isVisible]);

  return (
    <Tag className={className} style={style}>
      <span >
        {displayedText}
        {cursor === "enable" && isVisible && <LuTextCursor className="inline-block" />}
      </span>
    </Tag>
  );
};

export default TextTypingEffect;
