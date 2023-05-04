import { Button, Text } from "@mantine/core";
import { ReactNode, useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";
import { CarouselFoto } from "./CarouselFoto";
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";

type ImgFlippingProps = {
    img: string;
    width: string;
    height?: string;
    className?: string;
    children?: ReactNode;
    light?: string;
    imgProfile: string;
    citazione: string;
    data: string[]
}

export default function ImgFlipping(props: ImgFlippingProps){
    const [openedModal,setOpened] = useState(false)
    const md = useMediaQuery("(max-width: 1600px)")
    const [showDesc, setShowDesc] = useState<boolean>(false);
        
    const [aniBg, apiBg] = useSpring(()=>({
        from: {
            backgroundColor:"transparent",
            display:"none",
            width:"0",
            height:"0"
        }
    }))

    const triggerAni = () => {
        apiBg.start({
            to: {
                display:"block",
                backgroundColor:"#D5DDBC",
                width:"95%",
                height:"95%",   
            },
            config: {
            
            },
        })
        setOpened(true)
        setShowDesc(true);
    }

    const triggerAniReverse = () => {
        apiBg.start({
            to: {
                backgroundColor:"transparent",
                width:"0",
                height:"0",
                display:"none",
            },
            config: {
                
            },
        })
        setOpened(false)
        setShowDesc(false);
    }

    const [aniBtn, apiBtn] = useSpring(()=>({
        from: {
            width: 130,
            height:130
        },
        config: {
            mass: 12,
            friction: 2,
            tension: 50,
            velocity: 0.1
        },
    }))

    const triggerBtn = () => {
        apiBtn.start({
            to: {
                width: 150,
                height:150,
            }
        })
    }

    const hoverBtn = () => {
        apiBtn.start({
            to: {
                width: 170,
                height:170,
            },
            config: {
                mass: 10,
                friction: 2,
                tension: 260,
                velocity: 0.05
            },
        })
    }

    useEffect(()=>{
        console.log(openedModal)
    }, [openedModal])

    return(
        <div>
            <div style={{position:"relative"}}>
                <div style={{background:"url("+props.img+")",backgroundSize:"cover",position:"relative", width:"28rem", height:md?"40rem":"50rem"}}>
                    <animated.div style={{...aniBtn,position:"absolute", bottom:0, width:"100%",height:"4rem"}} onMouseEnter={hoverBtn} onMouseLeave={triggerBtn}>
                        <Button variant="gradient" gradient={{from:"black", to:"rgb(82,9,25)"}} className="font-primary" fw={200} style={{fontSize:"2rem",letterSpacing:"1rem",whiteSpace: "nowrap", position:"absolute", width:"100%", height:"100%"}} onClick={triggerAni}>Apri Scheda</Button>
                    </animated.div>
                </div>
                <animated.div style={{...aniBg, position:"absolute", top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}>
                    <CarouselFoto hasOpened={openedModal} height="" imageHeight={"100%"} slide={1} slideSize="100%" width="100%" data={props.data.map((item)=>({image: item}))} />
                    <div onClick={triggerAniReverse} style={{height:"100%"}}>
                        <div>
                            {showDesc&&
                            <div> 
                                <Text align="center" fz={30} className="font-third">" {props.citazione} "</Text>
                            </div>}
                        </div>
                        <div>
                            {props.children}
                        </div>
                    </div>
                </animated.div>
            </div>
            
        </div>
    )
}