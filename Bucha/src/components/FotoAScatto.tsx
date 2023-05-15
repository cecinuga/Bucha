import { useEffect, useState } from "react"

type WallpaperProps = {
    foto: string[]
    timeout: number
}

export default function FotoAScatto(props: WallpaperProps){
    const [turno, setTurno] = useState(Array.from(props.foto, (_, i) => i==0?"block":"none"))

    useEffect(()=>{
        setTimeout(()=>{
            if(turno[turno.length-1]=="block"){
                setTurno(Array.from(props.foto, (_, i) => i==0?"block":"none"))
                return
            }
            const nuovoTurno = turno.map((item, i) => item=="block"?"none":turno[i-1]=="block"?"block":"none")
            setTurno(nuovoTurno)
        }, props.timeout)
    }, [turno])

    return(
        <>
            {
                props.foto.map((img, i) => <img src={img} width={"100%"} style={{display: turno[i], position:"relative", bottom: "16rem"}}/>)
            }
        </>
    )
}