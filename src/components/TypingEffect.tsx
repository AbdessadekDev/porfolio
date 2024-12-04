import { ElementType, FC, useEffect, useState } from "react";

interface TypingEffectProps {
    className?: string;
    style?: React.CSSProperties;
    tag?: ElementType,
    texts: string[];
    typingSpeed?: number;
    eraseSpeed?: number;
    delayBetweenTexts?: number;
    once?: boolean;
    cursor?: "disable" | "enable";
}

const TypingEffect: FC<TypingEffectProps> = ({
    className,
    style,
    tag: Tag = 'h1',
    texts,
    typingSpeed = 100,
    eraseSpeed = 50,
    delayBetweenTexts = 2000,
    once = false,
    cursor = "disable",
}) => {
    const [displayedText, setDisplayedText] = useState("");
    const [cursorVisible, setCursorVisible] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        // Cursor blinking effect
        const cursorInterval = setInterval(() => {
            setCursorVisible((prev) => !prev);
        }, 500);

        return () => clearInterval(cursorInterval);
    }, []);

    useEffect(() => {
        let timer: number;

        if (isTyping) {
            // Typing effect
            if (displayedText.length < texts[currentIndex].length) {
                timer = setTimeout(() => {
                    setDisplayedText((prev) => prev + texts[currentIndex][prev.length]);
                }, typingSpeed);
            } else {
                // Wait before erasing
                timer = setTimeout(() => {
                    setIsTyping(false);
                }, delayBetweenTexts);
            }
        } else {
            // Erasing effect
            if (displayedText.length > 0) {
                timer = setTimeout(() => {
                    setDisplayedText((prev) => prev.slice(0, -1));
                }, eraseSpeed);
            } else {
                // Move to the next text
                if (currentIndex + 1 < texts.length) {
                    setCurrentIndex((prev) => prev + 1);
                    setIsTyping(true);
                } else if (!once) {
                    setCurrentIndex(0);
                    setIsTyping(true);
                }
            }
        }

        return () => clearTimeout(timer);
    }, [displayedText, isTyping, texts, currentIndex, typingSpeed, eraseSpeed, delayBetweenTexts, once]);

    return (
        <Tag 
            className={className} 
            style={style}>
            {displayedText} {cursor === "enable" && cursorVisible && <span style={{ fontWeight: "bold" }}>|</span>}
        </Tag>
    );
};

export default TypingEffect;
