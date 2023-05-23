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
import { Stack, Title } from "@mantine/core";
import gradient from '../assets/mesh-gradient.png'
import gradient2 from '../assets/mesh-gradient2.png'
import { useSpring, animated } from "react-spring";
import { Carousel } from "@mantine/carousel";
import report1 from "../assets/report1.pdf"
import report2 from "../assets/report2.pdf"
import kiev from '../assets/kiev.glb'
import videosfondo from "../assets/videosfondo.mp4"

export default function Sfondo(){
    const skullModel = useGLTF(skull)
    const kievModel = useGLTF(kiev)

    const [cursor, setCursor] = useState("unset")
    const leaveSkull = () => {
        if(skullToggle){
            setCursor("unset");
            return
        }
        setCursor("unset");schedaApi1.start({to:{height:"0"}});schedaApi2.start({to:{height:"0"}});schedaApi1.start({to:{scale:1}});schedaApi2.start({to:{scale: 1}})
    }
    const [schedaAni1, schedaApi1] = useSpring(() => ({
        from: {
            height:"0px",
            scale: 1
        },
    }))
    const [schedaAni2, schedaApi2] = useSpring(() => ({
        from: {
            height:"0px",
            scale: 1,
        },
    }))
    const [skullToggle, setSkullToggle] = useState(false)

    const onClickSkullToggle = () => {
        if(skullToggle){
            schedaApi1.start({to:{height:"0"}});schedaApi2.start({to:{height:"0"}});schedaApi1.start({to:{scale:1}});schedaApi2.start({to:{scale: 1}})
            setSkullToggle(false)
            return
        }
        schedaApi1.start({to:{scale:1.05}});schedaApi2.start({to:{scale: 1.05}})
        setSkullToggle(true)
    }

    return(
        <>
            <Canvas style={{width:"100vw", height:"100vh", margin: 0, padding: 0, position:"relative", zIndex:1, cursor:cursor,background: "linear-gradient(180deg, rgba(242,194,211,1) 0%, rgba(107,3,3,1) 100%)"}}>
                <Html position={[4,6.5,0]} scale={0.4} style={{cursor:"pointer"}} onClick={()=>{schedaApi1.start({to: {height:"700px"}})}}>
                    <animated.div style={{overflow:"hidden",width:"400px", backgroundColor: "black", background: "url("+gradient2+")", backgroundSize:"cover", borderRadius: "10px", border:"2px solid #cc4400", ...schedaAni1}}>
                        <Stack>
                            <Title c="white" className="font-primary" align="center" fw={500} pt={10} color="black">Informazioni</Title>
                            <object data={report1} type="application/pdf" width="100%" height="620px">
                                <p>Unable to display PDF file. <a href={report1}>Download</a> instead.</p>
                            </object>
                        </Stack> 
                    </animated.div>
                </Html>
                <Html position={[-9.5,6.5,0]} scale={0.4} style={{cursor:"pointer"}} onClick={()=>{schedaApi2.start({to: {height:"700px"}})}}>
                    <animated.div style={{overflow:"hidden",width:"400px", backgroundColor: "black", background: "url("+gradient+")", backgroundSize:"cover", borderRadius: "10px", border:"2px solid #cc4400", ...schedaAni2}}>
                        <Stack>
                            <Title c="white" className="font-primary" align="center" fw={500} pt={10} color="black">Ucraina</Title>
                        </Stack> 
                    </animated.div>
                </Html>
                <OrbitControls enableZoom={false} target={[0,1.5,0]} maxPolarAngle={angleToRadians(110)} minPolarAngle={angleToRadians(60)} zoom={false}/>
                <ambientLight color={"white"} intensity={1} position={[0,0,0]} />
                
                <primitive object={kievModel.scene} scale={100} position={[95,-80,280]} rotation={[angleToRadians(0), angleToRadians(0), angleToRadians(10)]}/>

                <directionalLight position={[2,1,0]} intensity={10} angle={10} color="#82810e"/>
                <directionalLight position={[-2,1,0]} intensity={10} angle={10} color="#0475fc"/>
                <directionalLight position={[0,6,0]} intensity={10} angle={10} color="white"/>
                <primitive onClick={onClickSkullToggle} onPointerEnter={()=>{setCursor("pointer");schedaApi1.start({to:{height:"700px"}});schedaApi2.start({to:{height:"700px"}})}} onPointerLeave={leaveSkull} key="skull" dispose={null} object={skullModel.scene} scale={1} rotation={[angleToRadians(85),angleToRadians(0),angleToRadians(0)]} position={[0,5,0]} />
            </Canvas>
        </>
    )
}