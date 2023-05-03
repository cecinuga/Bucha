import { Button } from "@mantine/core";
import { ReactNode, useState } from "react";
import { animated, useSpring } from "react-spring";

type ImgFlippingProps = {
    img: string;
    width: string;
    height?: string;
    className?: string;
    children?: ReactNode;
    light?: string;
    imgCircle: string;
    imgProfile: string;
    citazione: string;
}

export default function ImgFlipping(props: ImgFlippingProps){
    const [showDesc, setShowDesc] = useState<boolean>(false);
        
    const [aniBg, apiBg] = useSpring(()=>({
        from: {
            backgroundColor:"transparent",
            width:"0",
            height:"0"
        }
    }))

    const [aniChildren, apiChildren] = useSpring(()=>({
        from: {
            y:"-100",
        }
    }))

    const triggerAni = () => {
        apiBg.start({
            to: {
                backgroundColor:"#D5DDBC",
                width:"70%",
                height:"90%",   
            },
            config: {
            
            },
        })
        apiChildren.start({
            to: {
                y:"-1000"
            },
            config: {
                
            }
        })
        setShowDesc(true);
    }

    const triggerAniReverse = () => {
        apiBg.start({
            to: {
                backgroundColor:"transparent",
                width:"0",
                height:"0"
            },
            config: {
                
            },
        })
        apiChildren.start({
            to: {
                y: "0",
            },
            config: {
                
            }
        })
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
    return(
        <div>
            <div>
                <div style={{background:"url("+props.img+")",backgroundSize:"cover",position:"relative", width:"28rem", height:"50rem"}}>
                    <animated.div style={{...aniBtn,position:"absolute"}} onMouseEnter={hoverBtn} onMouseLeave={triggerBtn}>
                        <Button style={{whiteSpace: "nowrap"}} onClick={triggerAni}>Click Me!</Button>
                    </animated.div>
                </div>
                <animated.div onClick={triggerAniReverse} style={aniBg}>
                    <img src={props.imgCircle}></img>
                    <div>
                        <img src={props.imgProfile}></img>
                        {showDesc&&
                        <div>
                            <div>{props.citazione}</div>
                        </div>}
                    </div>
                    <div >
                        <animated.div style={aniChildren}>
                            {props.children}
                        </animated.div>
                    </div>
                </animated.div>
            </div>
            
        </div>
    )
}