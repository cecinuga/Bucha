import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ParallaxFotos from "./ParallaxFotos";
import { Group, Title, Text } from "@mantine/core";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";
import OperaLayer from "./OperaLayers";

export default function OperaPage(){
    const xs = useMediaQuery("(max-width: 500px)")

    return(
        <Parallax pages={3} style={{top: "0", left: "0", background: "radial-gradient(circle, white 0%, black 100%)"}}>
            <ParallaxFotos />
            <ParallaxLayer offset={1.3} speed={0}>
                <Group position="center"> 
                    <Title variant="gradient" gradient={{from:"#3d3c3c", to:"#460411"}} style={{borderBottom:"4px solid black"}} fz={xs?50:100} fw={200} className="font-primary">Bucha 2023</Title>
                </Group>
                <Group position="center">
                    <Link to="/" style={{textDecoration: "none"}}>
                        <Title variant="gradient" gradient={{from:"#460411", to:"#3d3c3c"}} className="font-primary">
                            Torna alla Home
                        </Title>
                    </Link>
                </Group>
            </ParallaxLayer>
            <OperaLayer 
                offset={1.9} factor={0.5} speed={0.6}
                title={<Title fz={50} fw={200} c="white" mb={30} className="font-third">Diventa Co Proprietario e...</Title>}
                desc={<Text c="white" align="center" fz={25} style={{width:"60%",lineHeight: "2.3rem", letterSpacing: "0.2rem"}} className="font-four" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mi ex. Quisque et turpis bibendum, condimentum mi ac, aliquam justo.<br /> Etiam quis magna risus. Aliquam vitae risus laoreet purus malesuada pellentesque a id massa.<br /> 
                      </Text>}
            />
            <OperaLayer 
                offset={2} factor={0.5} speed={0.5}
                title={<Title fz={50} fw={200} c="white" mb={30} className="font-third">...Verrai Pagato dai Musei!</Title>}
                desc={<Text c="white" align="center" fz={25} style={{width:"60%",lineHeight: "2.3rem", letterSpacing: "0.2rem"}} className="font-four" >
                    Vestibulum justo massa, tempor non efficitur facilisis, aliquam aliquet est. Vivamus gravida auctor est sed pulvinar.<br /> Sed pharetra justo lobortis ante venenatis commodo.<br /> Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.                      </Text>}
            />
        </Parallax>
    )
}