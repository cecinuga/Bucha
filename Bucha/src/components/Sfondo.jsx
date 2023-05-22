import { Canvas, useLoader } from "@react-three/fiber";
import { Environment, Html, OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import LandingPage from './LandingPage'
import Grid from './Grid'
import sfondo from "../assets/sfondohdr.hdr"
import skull from "../assets/skull.glb"
import { angleToRadians } from "../lib/lib";
export default function Sfondo(){
    const skullModel = useGLTF(skull)

    return(
        <>
            <Canvas style={{width:"100vw", height:"100vh", margin: 0, padding: 0, position:"relative", zIndex:1}}>
                <OrbitControls enableZoom={false} target={[0,1.5,0]} maxPolarAngle={angleToRadians(110)} minPolarAngle={angleToRadians(60)} zoom={false} maxZoom={0}/>
                <ambientLight color={"white"} intensity={1} />
                <Environment 
                    background
                    files={sfondo}
                />
                <primitive key="skull" dispose={null} object={skullModel.scene} scale={5.5} rotation={[angleToRadians(50),angleToRadians(0),angleToRadians(0)]} position={[0,3,0]} />
                <Grid />
            </Canvas>
        </>
    )
}