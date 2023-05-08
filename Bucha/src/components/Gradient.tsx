import { useMediaQuery } from "@mantine/hooks";
import { MouseEvent } from "react";
import { useMouseMove } from "../lib/lib";

type GradientProps = {
    bgColor: string;
    gradient: boolean;
    move?: boolean;
}

export default function Gradient(props: GradientProps){
    const {x, y, handleMouseMove} = useMouseMove()
    const xs = useMediaQuery("(max-width: 500px)")
    const md = useMediaQuery("(max-width: 1400px)")

    const update = (e: MouseEvent) => {
        console.log(e, x, y)
        document.getElementById("mouse-cursor-gradient-tracking")?.style.setProperty('--x', x + 'px');
        document.getElementById("mouse-cursor-gradient-tracking")?.style.setProperty('--y', y + 'px');

        handleMouseMove(e)
    }

    return(
        <>
            <div 
                id="mouse-cursor-gradient-tracking" 
                className={props.gradient?"mouse-cursor-gradient-tracking":""} 
                onMouseMove={props.move?update:()=>{}} 
                onMouseLeave={props.move?update:()=>{}} 
                style={{backgroundColor: props.bgColor, width: "100%", height: "100%", zIndex: 10, position: "absolute", top:"0"}}>
            </div>
        </>
    )
}