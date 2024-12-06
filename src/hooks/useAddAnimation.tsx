import { useEffect } from "react"

const useAddAnimation = (scrollerRef: React.RefObject<HTMLDivElement>) => {
    useEffect(() => {
      if (!scrollerRef.current) return;
  
      const scroller = scrollerRef.current;
      scroller.setAttribute("data-animated", "true");
  
      const scrollerInner = scroller.querySelector(".scroller__inner");
      if (scrollerInner) {
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as Element;
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      }
    }, [scrollerRef]);
  };


  export default useAddAnimation;