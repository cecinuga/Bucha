import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { Environment, Html, OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import LandingPage from './LandingPage'
import Grid from './Grid'
import { angleToRadians } from "../lib/lib";
import { useState } from "react";
import Scene from "./Scene";
import sfondo from "../assets/sfondohdr.hdr"
import skull from "../assets/skull.glb"
import Controls from "./Controls";
import blood2 from "../assets/blood2.mp4"

export default function Sfondo(){
    const pointer = useState("unset")
    const skullModel = useGLTF(skull)

    return(
        <>
            <Canvas style={{width:"100vw", height:"100vh", margin: 0, padding: 0, position:"relative", zIndex:1, cursor:pointer}}>
                <Scene pointer={pointer}/>
                <Controls pointer={pointer} />
                <ambientLight color={"white"} intensity={1} />
                <Environment 
                    background
                    files={sfondo}
                />

                <primitive onPointerEnter={()=>{pointer[1]("pointer")}} onPointerLeave={()=>{pointer[1]("unset")}} key="skull" dispose={null} object={skullModel.scene} scale={1} rotation={[angleToRadians(85),angleToRadians(0),angleToRadians(0)]} position={[0,4,0]} />
                <Html>
                </Html>
                <Grid />
            </Canvas>
        </>
    )
}