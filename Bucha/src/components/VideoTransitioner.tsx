import {animated, useChain, useSpring, useSpringRef} from "@react-spring/web"
import foto4 from "../assets/DSC03440.jpg"
import foto5 from "../assets/DSC03443.jpg"
import foto6 from "../assets/DSC03445.jpg"
import foto7 from "../assets/DSC03453.jpg"
import foto8 from "../assets/DSC03456.jpg"
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery"
import { useEffect } from "react"

type VideoTransitionerProps = {
    setIsLoading: (e: boolean) => void
}

export default function VideoTransitioner(props: VideoTransitionerProps){
    const imgRef4 = useSpringRef()
    const imgRef5 = useSpringRef()
    const imgRef6 = useSpringRef()
    const imgRef7 = useSpringRef()
    const imgRef8 = useSpringRef()
    const contAniRef = useSpringRef()

    const mobile = useMediaQuery("(max-width: 500px)")

    const imgAni4 = useSpring({
        ref: imgRef4,
        from: {
            y: -1700,
            x: 0,
        },
        to: {
            y: 0,
        }
    })
    const imgAni5 = useSpring({
        ref: imgRef5,
        from: {
            x: 1700,
        },
        to: {
            x: 0,
        }
    })
    const imgAni7 = useSpring({
        ref: imgRef7,
        from: {
            x: -1700,
        },
        to: {
            x: 0,
        }
    })
    const imgAni6 = useSpring({
        ref: imgRef6,
        from: {
            y: 1700,
            x: 0,
        },
        to: {
            y: 0,
        }
    })
    const imgAni8 = useSpring({
        ref: imgRef8,
        from: {
            x:0,
            y: 1700,
        },
        to: {
            y: 0,
        }
    })
    const contAni = useSpring({
        ref: contAniRef,
        from: {
            display:"block"
        },
        to: {
            display:"none",
        }
    })
    useChain([imgRef4, imgRef5, imgRef6, imgRef7, imgRef8, contAniRef], [0.4,0.6,0.8,1,1.2,1.4], 3600)
    useEffect(()=>{
        setTimeout(()=>{
            props.setIsLoading(false)
        }, 12000)
    })


    return(
            <>
                <animated.div style={{textAlign:"center",position:"relative",bottom:"15%",margin:0, padding:0,zIndex:2, ...contAni}}>
                    <animated.div style={{width:"100vw",height:"100vh",textAlign: "center",position:"absolute",backgroundColor:"white",...imgAni4}}>
                        <img width={mobile?"90%":"35%"} src={foto4} style={{position:"absolute", left:mobile?"10%":"35%", marginTop: "11rem",boxShadow: "0px 0px 100px 25px #370407"}}/>
                    </animated.div>
                    <animated.div style={{width:"100vw",height:"100vh",textAlign: "center",position:"absolute",backgroundColor:"white",...imgAni5}}>
                        <img width={mobile?"90%":"35%"} src={foto5} style={{position:"absolute", left:mobile?"10%":"35%", marginTop: "11rem",boxShadow: "0px 0px 100px 25px #2f0406"}}/>
                    </animated.div>
                    <animated.div style={{width:"100vw",height:"100vh",textAlign: "center",position:"absolute",backgroundColor:"white",...imgAni6}}>
                        <img width={mobile?"90%":"35%"} src={foto6} style={{position:"absolute", left:mobile?"10%":"35%", marginTop: "11rem",boxShadow: "0px 0px 100px 25px #2f0406"}}/>
                    </animated.div>
                    <animated.div style={{width:"100vw",height:"100vh",textAlign: "center",position:"absolute",backgroundColor:"white",...imgAni7}}>
                        <img width={mobile?"80%":"35%"} src={foto7} style={{position:"absolute", left:mobile?"10%":"35%", marginTop: "11rem",boxShadow: "0px 0px 100px 25px #2f0406"}}/>
                    </animated.div>
                    <animated.div style={{width:"100vw",height:"100vh",textAlign: "center",position:"absolute",backgroundColor:"white",...imgAni8}}>
                        <img width={mobile?"80%":"35%"} src={foto8} style={{position:"absolute", left:mobile?"10%":"35%", marginTop: "11rem",boxShadow: "0px 0px 100px 25px #2f0406"}}/>
                    </animated.div>
                </animated.div>
            </>
    )
        
}