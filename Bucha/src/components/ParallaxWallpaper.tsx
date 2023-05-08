import { ParallaxLayer } from '@react-spring/parallax'
import layer1 from "../assets/parallax/layer1.gif"
import layer2 from "../assets/parallax/layer2.gif"
import layer3 from "../assets/parallax/layer3.gif"
import layer4 from "../assets/parallax/layer4.gif"
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery'

export default function ParallaxWallpaper(){
    const sm = useMediaQuery("(max-width:500px)")

    return(
        <>            
            <ParallaxLayer offset={0} speed={0.2}>
                <img src={layer4} width="100%" height={sm?"50%":"100%"}></img>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.5}>
                <img src={layer3} width="100%" height={sm?"50%":"100%"}></img>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.8}>
                <img src={layer2} width="100%" height={sm?"50%":"100%"}></img>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={1.2}>
                <img src={layer1} width="100%" height={sm?"50%":"100%"}></img>
            </ParallaxLayer>
        </>
    )
}