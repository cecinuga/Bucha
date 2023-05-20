import { Canvas } from "@react-three/fiber";
import { Environment, Html, OrbitControls } from "@react-three/drei";
import LandingPage from './LandingPage'
import sfondo from "../assets/sfondohdr.hdr"

export default function Sfondo(){
    return(
        <>
            <Canvas style={{width:"100vw", height:"100vh", margin: 0, padding: 0, position:"relative", zIndex:1}}>
                <OrbitControls />
                <Environment 
                    background
                    files={sfondo}
                />
            </Canvas>
        </>
    )
}