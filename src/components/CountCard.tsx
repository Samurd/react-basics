import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export function CountCard() {
  const MAX_COUNT = 20;
  const [count, setCount] = useState(0)
  const countElement = useRef<HTMLHeadingElement>(null)

  const handleClick = () => {
    setCount(prev => Math.min(prev + 1, MAX_COUNT))
  }

  useEffect(() => {
    if (count < 5) return;
    gsap.to(countElement.current, { scale: 10, y: -20 })
    gsap.to(countElement.current, {scale: 1, y: 0})
  }, [count])
  return (
    <div className="card">
      <h2 ref={countElement}>{count}</h2>
      <button onClick={handleClick}>
        +1
      </button>
    </div>
  )
}