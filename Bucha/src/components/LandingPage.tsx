import {Group, Title, Text} from "@mantine/core"
import Button3D from "./Button3D"
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery"

export default function LandingPage(){
    const xs = useMediaQuery("(max-width: 500px)")

    return(
       <>
         <Group position="center" style={{position:"absolute", bottom:"45%",left:"50%",transform:"translateX(-50%)", zIndex: 1, touchAction: "none"}} display={"inline-block"}>
            <Title variant="gradient" gradient={{from:"#3d3c3c", to:"#460411"}} fz={xs?50:70} fw={500} mb={xs?10:0} className="font-primary" align="center" style={{whiteSpace:"nowrap"}}>
                Bucha
                <Text fz={xs?30:50} size={25} fw={500} align="center" className="font-primary" style={{borderBottom:"4px solid black"}}>La Fossa Comune</Text>
            </Title>
        </Group>
        <Group position="center" display={"inline-block"} style={{whiteSpace:"nowrap",position:"absolute", bottom:"10%",left:"50%",transform:"translateX(-50%)", zIndex: 1, touchAction: "none", }} pt={15}>
            <Button3D href="/l-opera" variant="gradient" gradient={{from:"black", to:"white"}} style={{marginRight:"0.5rem",display:"inline-block",width:xs?"7rem":"15rem", height:xs?"7rem":"15rem"}}>
                <Title order={xs?5:3} className="font-primary" fw={200}>L'Opera</Title>
            </Button3D>
            <Button3D href="/gli-artisti" variant="gradient" gradient={{from:"white", to:"red.9"}}  style={{marginLeft:"0.5rem",display:"inline-block",width:xs?"7rem":"15rem", height:xs?"7rem":"15rem"}}>
                <Title order={xs?5:3} className="font-primary" fw={200}>Gli Artisti</Title>
            </Button3D>
        </Group>
       </>
    )
}