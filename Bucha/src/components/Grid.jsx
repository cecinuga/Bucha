import { useFrame, useLoader } from "@react-three/fiber"
import { useEffect } from "react"
import { RepeatWrapping, TextureLoader } from "three"
import { GradientTexture, useTexture } from "@react-three/drei"
import fossacomune from '../assets/DSC03422.jpg'

export default function FloatingGrid(){
    const texture = useTexture(fossacomune)

    return(
        <mesh rotation-x={-Math.PI * 0.5} position={[0, -14, 9.5]}>
            <planeGeometry args={[20, 70]} />
            <meshBasicMaterial map={texture} />
        </mesh>
    )
}