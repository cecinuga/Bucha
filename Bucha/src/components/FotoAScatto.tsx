import { SpringRef, animated, useSpring } from "@react-spring/web"

type FotoAScattoProps = {
    data: string[],
    ref: SpringRef,
}

export default function FotoAScatto(props: FotoAScattoProps){

    const imgAnis = props.data.map(() => {
        const ani = useSpring({
            from: {
                width: "50%"
            },
            to: {
                width:"55%"
            },
            config: {

            }
        })
        return ani
    })

    return (
        <>
            {props.data.map((item, i)=>{
                <animated.img src={item} style={{position:"absolute",...imgAnis[i]}} />
            })}
        </>
    )
}