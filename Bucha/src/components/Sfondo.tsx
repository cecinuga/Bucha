import { Canvas } from "@react-three/fiber";
import { Environment, Html, OrbitControls } from "@react-three/drei";
import sfondo from "../assets/sfondo.hdr";
import LandingPage from '../components/LandingPage'

export default function Sfondo(){
    return(
        <>
            <Canvas style={{width:"100vw", height:"100vh", margin: 0, padding: 0}}>
                <OrbitControls />
                <Environment 
                    background
                    blur={0}
                    files={sfondo}

                />
                <Html>
                    <LandingPage />
        
                </Html>
            </Canvas>
        </>
    )
}