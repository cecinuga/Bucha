import { useState } from "react";

type VideoPlayerBaseProps = {
    video: string;
    width: string;
    height: string;
    className?: string;
}

export default function VideoPlayerBase(props: VideoPlayerBaseProps){
    const [show, setShow] = useState(true)

    setTimeout(()=>{
        setShow(false)
    }, 3000)

    return(
        <>
            {
                show && <div style={{width: "100%", textAlign: "center", marginTop: "0rem"}}>
                    <video width={props.width} className={props.className} height={props.height} autoPlay muted loop preload="true">
                        <source src={props.video} type="video/mp4"></source>
                    </video>
                </div>
            }
        </>
    )
        
}