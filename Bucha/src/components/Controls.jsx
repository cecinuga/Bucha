import { OrbitControls } from "@react-three/drei";
import { angleToRadians } from "../lib/lib";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";

export default function Controls({pointer}){

    return(
        <OrbitControls enableZoom={false} target={[0,1.5,0]} maxPolarAngle={angleToRadians(110)} minPolarAngle={angleToRadians(60)} zoom={false} maxZoom={0}/>
    )
}