type VideoPlayerProps = {
    video: string;
    width: string;
    height: string;
    className?: string;
}

export default function VideoPlayer(props: VideoPlayerProps){
    return(<video width={props.width} className={props.className} height={props.height} autoPlay muted loop preload="true">
                <source src={props.video} type="video/mp4"></source>
            </video>)
        
}