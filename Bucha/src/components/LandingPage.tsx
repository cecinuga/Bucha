import {Group, Title, Text, Button} from "@mantine/core"
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery"
import { Link } from "react-router-dom"

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
            <Link to="/l-opera"><Button className="gray-hover" variant="gradient" gradient={{from:"black", to:"black"}} style={{marginRight:"0.5rem",display:"inline-block",width:xs?"7rem":"15rem", height:xs?"7rem":"5rem"}}>
                <Title order={xs?5:3} className="font-primary" fw={200}>L'Opera</Title>
            </Button></Link>
            <Link to="/gli-artisti"><Button className="gray-hover" variant="gradient" gradient={{from:"black", to:"black"}}  style={{marginLeft:"0.5rem",display:"inline-block",width:xs?"7rem":"15rem", height:xs?"7rem":"5rem"}}>
                <Title order={xs?5:3} className="font-primary" fw={200}>Gli Artisti</Title>
            </Button></Link>
        </Group>
       </>
    )
}