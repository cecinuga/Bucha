import { MouseEvent, useState } from "react";

export function getRandomInt(min:number, max:number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
export const useMouseMove = () => {
    const [state, setState] = useState({x: 0, y: 0})
  
    const handleMouseMove = (e: MouseEvent) => {
      e.persist()
      setState(state => ({...state, x: e.clientX, y: e.clientY}))
    }
    return {
      x: state.x,
      y: state.y,
      handleMouseMove,
    }
  }