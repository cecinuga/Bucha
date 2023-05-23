import { Grid, Stack, Title } from "@mantine/core"
import { Environment, Html, OrbitControls, useGLTF } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { useState } from "react"
import { angleToRadians } from "../lib/lib"
import gradient from '../assets/mesh-gradient.png'

export default function Scene({pointer}){
    const {rotation} = useThree()

    return(
        <Html position={[4,5.5,0]} scale={0.4} style={{display: pointer[0]=="pointer"?"block":"none"}}>
            <div style={{height:"700px", width:"400px", backgroundColor: "black", background: "url("+gradient+")", backgroundSize:"cover", borderRadius: "10px", border:"2px solid #cc4400"}}>
                <Stack>
                    <Title className="font-primary" align="center" fw={500} pt={10} color="black">Russia</Title>
                </Stack> 
            </div>
        </Html>
    )
}