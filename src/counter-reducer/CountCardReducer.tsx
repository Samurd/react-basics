import { useEffect, useReducer, useRef, } from "react";
import { gsap } from "gsap";
import { CountState } from "./interfaces/interfaces";
import { countReducer } from "./state/countReducer";
import { doIncreaseBy, doReset } from "./actions/actions";


const initialState: CountState = {
  count: 0,
}

export function CountCardReducer() {
  const [{ count }, dispatch] = useReducer(countReducer, initialState)
  const countElement = useRef<HTMLHeadingElement>(null)

  const handleIncrease = (value: number) => {
    dispatch(doIncreaseBy(value))
  }

  const handleReset = () => {
    dispatch(doReset())
  }

  useEffect(() => {
    gsap.to(countElement.current, { scale: 10, y: -20 })
    gsap.to(countElement.current, { scale: 1, y: 0 })
  }, [count])
  return (
    <div className="card">
      <h2 ref={countElement}>{count}</h2>
      <div className="">
        <button onClick={() => handleIncrease(1)}>+1</button>
        <button onClick={() => handleIncrease(2)}>+2</button>
        <button onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  )
}