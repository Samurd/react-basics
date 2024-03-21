import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const useCount = ({maxCount = 10}) => {
  const [count, setCount] = useState(0)
  const countElement = useRef<HTMLHeadingElement>(null)

  const handleClick = () => {
    setCount(prev => Math.min(prev + 1, maxCount))
  }

  useEffect(() => {
    gsap.to(countElement.current, { scale: 10, y: -20 })
    gsap.to(countElement.current, {scale: 1, y: 0})
  }, [count])


    return {
        handleClick,
        countElement,
        count
    }
}

export default useCount;