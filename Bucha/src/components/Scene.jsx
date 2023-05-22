import { Grid } from "@mantine/core"
import { Environment, Html, OrbitControls, useGLTF } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { useState } from "react"
import { angleToRadians } from "../lib/lib"


export default function Scene({pointer}){
    const {rotation} = useThree()

    return(
        <Html position={[4,5.5,0]} scale={0.4} style={{display: pointer[0]=="pointer"?"block":"none"}}>
            <div style={{height:"700px", width:"400px", backgroundColor: "black"}}></div>
        </Html>
    )
}