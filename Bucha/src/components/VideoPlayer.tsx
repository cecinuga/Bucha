type VideoPlayerProps = {
    video: string;
    width: string;
    height: string;
    className?: string;
    style?: {}
}

export default function VideoPlayer(props: VideoPlayerProps){
    return(<video width={props.width} style={props.style} className={props.className} height={props.height} autoPlay muted loop preload="true">
                <source src={props.video} type="video/mp4"></source>
            </video>)
        
}