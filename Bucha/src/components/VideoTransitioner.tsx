import {animated, useChain, useSpring, useSpringRef} from "@react-spring/web"
import foto1 from "../assets/foto1.jpg"
import foto2 from "../assets/foto2.jpg"
import foto3 from "../assets/foto3.jpg"
import foto4 from "../assets/foto4.jpg"
import foto5 from "../assets/foto5.jpg"
import foto6 from "../assets/foto6.jpeg"
import foto7 from "../assets/foto7.jpg"
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery"

type VideoTransitionerProps = {
    video: string;
    width: string;
    height: string;
    className?: string;
}

export default function VideoTransitioner(props: VideoTransitionerProps){
    const videoRef = useSpringRef()
    const imgRef1 = useSpringRef()
    const imgRef2 = useSpringRef()
    const imgRef3 = useSpringRef()
    const imgRef4 = useSpringRef()
    const imgRef5 = useSpringRef()
    const imgRef6 = useSpringRef()
    const imgRef7 = useSpringRef()
    const contAniRef = useSpringRef()

    const mobile = useMediaQuery("(max-width: 500px)")

    const videoAni = useSpring({
        ref: videoRef,
        from: {display:"block"},
        to: {display: "none"},
    })
    const imgAni1 = useSpring({
        ref: imgRef1,
        from: {
            display: "none",
            x: 1700,
        },
        to: {
            display: "inline-block",
            x: 0,
        }
    })
    const imgAni2 = useSpring({
        ref: imgRef2,
        from: {
            display: "none",
            y: 1700,
            x: 0,
        },
        to: {
            display: "inline-block",
            y: 0,
        }
    })
    const imgAni3 = useSpring({
        ref: imgRef3,
        from: {
            display: "none",
            x: -1700,
        },
        to: {
            display: "inline-block",
            x: 0,
        }
    })
    const imgAni4 = useSpring({
        ref: imgRef4,
        from: {
            display: "none",
            y: -1700,
            x: 0,
        },
        to: {
            display: "inline-block",
            y: 0,
        }
    })
    const imgAni5 = useSpring({
        ref: imgRef5,
        from: {
            display: "none",
            x: 1700,
        },
        to: {
            display: "inline-block",
            x: 0,
        }
    })
    const imgAni7 = useSpring({
        ref: imgRef7,
        from: {
            display: "none",
            x: -1700,
        },
        to: {
            display: "inline-block",
            x: 0,
        }
    })
    const imgAni6 = useSpring({
        ref: imgRef6,
        from: {
            display: "none",
            y: 1700,
            x: 0,
        },
        to: {
            display: "inline-block",
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
    useChain([videoRef, imgRef1, imgRef2, imgRef3, imgRef4, imgRef5, imgRef6, imgRef7, contAniRef], [1,1.2,1.4,1.6,1.8,2,2.2,2.4,2.6,2.8,3], 1000)

    return(
            <>
                <animated.div style={{width: "100%", textAlign: "center", position:"absolute", left:0, top:"0%", zIndex: 2, marginTop: "1rem", ...videoAni}}>
                    <video width={props.width} className={props.className} height={props.height} style={{border:0}} autoPlay muted preload="true">
                        <source src={props.video} type="video/mp4"></source>
                    </video>
                </animated.div>
                <animated.div style={{textAlign:"center",position:"relative", zIndex:2, right: mobile?"53%":"67%",...contAni}}>
                    <animated.div style={{width:"100vw",height:"100vh",textAlign: "center",position:"absolute",backgroundColor:"white",...imgAni1}}>
                        <img width={mobile?"80%":"35%"} src={foto1} style={{position:"absolute", left:mobile?"10%":"unset", marginTop: "11rem",boxShadow: "0px 0px 100px 25px #52060b"}}/>
                    </animated.div>
                    <animated.div style={{width:"100vw",height:"100vh",textAlign: "center",position:"absolute",backgroundColor:"white",...imgAni2}}>
                        <img width={mobile?"80%":"35%"} src={foto2} style={{position:"absolute", left:mobile?"10%":"unset", marginTop: "11rem",boxShadow: "0px 0px 100px 25px #52060b"}}/>
                    </animated.div>
                    <animated.div style={{width:"100vw",height:"100vh",textAlign: "center",position:"absolute",backgroundColor:"white",...imgAni3}}>
                        <img width={mobile?"80%":"35%"} src={foto3} style={{position:"absolute", left:mobile?"10%":"unset", marginTop: "11rem",boxShadow: "0px 0px 100px 25px #52060b"}}/>
                    </animated.div>
                    <animated.div style={{width:"100vw",height:"100vh",textAlign: "center",position:"absolute",backgroundColor:"white",...imgAni4}}>
                        <img width={mobile?"80%":"35%"} src={foto4} style={{position:"absolute", left:mobile?"10%":"unset", marginTop: "11rem",boxShadow: "0px 0px 100px 25px #370407"}}/>
                    </animated.div>
                    <animated.div style={{width:"100vw",height:"100vh",textAlign: "center",position:"absolute",backgroundColor:"white",...imgAni5}}>
                        <img width={mobile?"80%":"35%"} src={foto5} style={{position:"absolute", left:mobile?"10%":"unset", marginTop: "11rem",boxShadow: "0px 0px 100px 25px #2f0406"}}/>
                    </animated.div>
                    <animated.div style={{width:"100vw",height:"100vh",textAlign: "center",position:"absolute",backgroundColor:"white",...imgAni6}}>
                        <img width={mobile?"80%":"35%"} src={foto6} style={{position:"absolute", left:mobile?"10%":"unset", marginTop: "11rem",boxShadow: "0px 0px 100px 25px #2f0406"}}/>
                    </animated.div>
                    <animated.div style={{width:"100vw",height:"100vh",textAlign: "center",position:"absolute",backgroundColor:"white",...imgAni7}}>
                        <img width={mobile?"80%":"35%"} src={foto7} style={{position:"absolute", left:mobile?"10%":"unset", marginTop: "11rem",boxShadow: "0px 0px 100px 25px #2f0406"}}/>
                    </animated.div>
                </animated.div>
            </>
    )
        
}