import './divider-waves.css'

type DividerWavesProps = {
    width: string;
}

export default function DividerWaves(props: DividerWavesProps){
    return(
        <>
            <div style={{height:"120px", position:"relative", width:"100%"}}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28 "
                    preserveAspectRatio="none"
                    style={{display:"block", width:props.width, height:"60px", maxHeight:"60px", margin:0, zIndex:5,top:0, position:"absolute", left:"0px", float:"left"}}    
                >
                    <defs>
                        <path id="gentle-wave"
                        d="M-160 44c30 0
                            58-18 88-18s
                            58 18 88 18 
                            58-18 88-18 
                            58 18 88 18
                            v44h-352z" />
                    </defs>
                    <g style={{width:"100%", height:"100%",animation:"move-forever1 15s linear infinite"}}>
                        <use xlinkHref="#gentle-wave" style={{animationDelay:"2s"}} x="50" y="3" fill="#a31c43"/>
                    </g>
                    <g style={{width:"100%", height:"100%",animation:"move-forever2 13s linear infinite"}}>
                        <use xlinkHref="#gentle-wave" style={{animationDelay:"2s"}} x="50" y="0" fill="#a1132e"/>
                    </g>
                    <g style={{width:"100%", height:"100%",animation:"move-forever3 11s linear infinite"}}>
                        <use xlinkHref="#gentle-wave" style={{animationDelay:"2s"}} x="50" y="9" fill="#771024"/>
                    </g>
                    <g style={{width:"100%", height:"100%",animation:"move-forever4 9s linear infinite"}}>
                        <use xlinkHref="#gentle-wave" style={{animationDelay:"2s"}} x="50" y="6" fill="#fff"/>  
                    </g>
                </svg>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28 "
                    preserveAspectRatio="none"
                    style={{display:"block", width:props.width, height:"60px", maxHeight:"60px", margin:0,transform:"rotate(180deg)", zIndex:5,bottom:0, position:"absolute", left:"0px", float:"left"}}    
                >
                    <defs>
                        <path id="gentle-wave"
                        d="M-160 44c30 0 
                            58-18 88-18s
                            58 18 88 18 
                            58-18 88-18 
                            58 18 88 18
                            v44h-352z" />
                    </defs>
                    <g style={{width:"100%", height:"100%",animation:"move-forever1 15s linear infinite"}}>
                        <use xlinkHref="#gentle-wave" style={{animationDelay:"2s"}} x="50" y="3" fill="#a31c43"/>
                    </g>
                    <g style={{width:"100%", height:"100%",animation:"move-forever2 13s linear infinite"}}>
                        <use xlinkHref="#gentle-wave" style={{animationDelay:"2s"}} x="50" y="0" fill="#a1132e"/>
                    </g>
                    <g style={{width:"100%", height:"100%",animation:"move-forever3 11s linear infinite"}}>
                        <use xlinkHref="#gentle-wave" style={{animationDelay:"2s"}} x="50" y="9" fill="#771024"/>
                    </g>
                    <g style={{width:"100%", height:"100%",animation:"move-forever4 9s linear infinite"}}>
                        <use xlinkHref="#gentle-wave" style={{animationDelay:"2s"}} x="50" y="6" fill="#fff"/>  
                    </g>
                </svg>
    
            </div>
        </>
    )
}