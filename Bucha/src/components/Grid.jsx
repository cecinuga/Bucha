import { useFrame, useLoader } from "@react-three/fiber"
import { useEffect } from "react"
import { RepeatWrapping, TextureLoader } from "three"
import grid from '../assets/grid-texture.png'
import { GradientTexture } from "@react-three/drei"

export default function FloatingGrid(){
    const diffuse = useLoader(TextureLoader, grid)

    useEffect(() => {
        diffuse.wrapS = RepeatWrapping
        diffuse.wrapT = RepeatWrapping
        diffuse.anisotropy = 4
        diffuse.repeat.set(1, 1)
        diffuse.offset.set(0, 0)
    }, [diffuse])

    return(
        <mesh rotation-x={-Math.PI * 0.5} position={[0, -3, 0]}>
            <planeGeometry args={[70, 20]} />
            <meshBasicMaterial 
                opacity={0.15}
                map={diffuse}
                transparent={true}
            >
                <GradientTexture
                    stops={[0, 1]} 
                    colors={['aquamarine', 'hotpink']} 
                    size={1024} 
                />
            </meshBasicMaterial>
        </mesh>
    )
}