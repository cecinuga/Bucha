import { ParallaxLayer } from "@react-spring/parallax";
import img1 from "../assets/DSC03456.jpg"
import img2 from "../assets/DSC03440.jpg"
import img3 from "../assets/DSC03443.jpg"
import img4 from "../assets/DSC03445.jpg"
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";

export default function ParallaxFotos(){
    const xs = useMediaQuery("(max-width: 500px)")

    return(
        <>
            <ParallaxLayer offset={0} factor={1} speed={1}>
                <img width={"70%"} height={xs?"70%":"100%"} src={img1}></img>
            </ParallaxLayer>
            <ParallaxLayer offset={0} style={{textAlign:"right"}} factor={1} speed={2}>
                <img width={"50%"} height={xs?"50%":"100%"} src={img2}></img>
            </ParallaxLayer>
            <ParallaxLayer offset={0.2} factor={1} speed={1.5}>
                <img width={"50%"} height={xs?"50%":"100%"} src={img3}></img>
            </ParallaxLayer>
            <ParallaxLayer offset={0.2} style={{textAlign:"right"}} factor={1} speed={0.5}>
                <img width={"70%"} height={xs?"70%":"100%"} src={img4}></img>
            </ParallaxLayer>
            <ParallaxLayer offset={0.5} factor={1} speed={2.2}>
                <img width={"70%"} height={xs?"70%":"100%"} src={img1}></img>
            </ParallaxLayer>
            <ParallaxLayer offset={0.5} style={{textAlign:"right"}} factor={1} speed={1.9}>
                <img width={"50%"} height={xs?"50%":"100%"} src={img2}></img>
            </ParallaxLayer>
            <ParallaxLayer offset={0.9} factor={1} speed={1.7}>
                <img width={"50%"} height={xs?"50%":"100%"} src={img3}></img>
            </ParallaxLayer>
            <ParallaxLayer offset={0.9} style={{textAlign:"right"}} factor={1} speed={1.5}>
                <img width={"70%"} height={xs?"70%":"100%"} src={img4}></img>
            </ParallaxLayer>
        </>
    )
}