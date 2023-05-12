import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ParallaxFotos from "./ParallaxFotos";
import { Group, Title, Text, useMantineTheme } from "@mantine/core";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";
import OperaLayer from "./OperaLayers";
import { Icon360,IconActivityHeartbeat,IconLifebuoy, IconCampfire } from '@tabler/icons-react';
import OperaLayerSection from "./OperaLayerSection";
import VideoPlayer from "./VideoPlayer";
import videoopera from "../assets/videoopera.mp4";
import { CarouselFoto } from "./CarouselFoto";
import img1 from "../assets/DSC03456.jpg"
import img2 from "../assets/DSC03440.jpg"
import img3 from "../assets/DSC03443.jpg"
import img4 from "../assets/DSC03445.jpg"

export default function OperaPage(){
    const xs = useMediaQuery("(max-width: 500px)")
    const theme = useMantineTheme()

    return(
        <Parallax pages={7} style={{top: "0", left: "0", background: "radial-gradient(circle, white 0%, black 100%)"}}>
            <ParallaxFotos />
            <ParallaxLayer offset={1.5} speed={0}>
                <Group position="center"> 
                    <Title variant="gradient" gradient={{from:"#3d3c3c", to:"#460411"}} style={{borderBottom:"4px solid black"}} fz={xs?50:100} fw={200} className="font-primary">Bucha 2023</Title>
                </Group>
                <Group position="center">
                    <Link to="/" style={{textDecoration: "none"}}>
                        <Title variant="gradient" gradient={{from:"#460411", to:"#3d3c3c"}} className="font-primary">
                            Torna alla Home
                        </Title>
                    </Link>
                    {!xs?<div style={{width:"0.2rem", height:"2.8rem", backgroundColor:"black"}}></div>:<></>}
                    <Link to="/gli-artisti" style={{textDecoration: "none"}}>
                        <Title variant="gradient" gradient={{from:"#3d3c3c", to:"#460411"}} className="font-primary">
                            Vai dagli Artisti
                        </Title>
                    </Link>
                </Group>
            </ParallaxLayer>

            <ParallaxLayer offset={2}>

            </ParallaxLayer>


            <OperaLayerSection
                factor={xs?1.7:0.95}
                offset={3} 
                speed={0}
                title="Lorem Ipsum Dolor Sit Amet"
                bgs={["#f5234d","#c21839", "#771024","#420a15"]}
                icons={[<IconCampfire size={64} color={theme.colors.red[8]}/>,<Icon360 size={64} color={theme.colors.red[8]}/>,<IconActivityHeartbeat size={64} color={theme.colors.red[8]}/>,<IconLifebuoy size={64} color={theme.colors.red[8]}/>]}
                descs={[
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet pellentesque sem. Aenean molestie pretium est ut pretium. Pellentesque turpis massa, gravida id velit quis, lacinia tincidunt velit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet pellentesque sem. Aenean molestie pretium est ut pretium. Pellentesque turpis massa, gravida id velit quis, lacinia tincidunt velit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet pellentesque sem. Aenean molestie pretium est ut pretium. Pellentesque turpis massa, gravida id velit quis, lacinia tincidunt velit.",
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit amet pellentesque sem. Aenean molestie pretium est ut pretium. Pellentesque turpis massa, gravida id velit quis, lacinia tincidunt velit.",
                ]}
            />
            <OperaLayer
                bg="#c21839" 
                offset={xs?3.45:3.90} factor={0.5} speed={0.5}
                title={<Title fz={xs?40:50} fw={200} align={xs?"center":"unset"} c="white" mb={xs?5:30} className="font-third">Lorem Ipsum Dolor Sit Amet</Title>}
                desc={<Text c="white" align="center" fz={xs?15:25} style={{textAlign:"justify",width:xs?"100%":"60%",lineHeight: "2.3rem", letterSpacing: "0.2rem"}} className="font-four" >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu mi ex. Quisque et turpis bibendum, condimentum mi ac, aliquam justo.<br /> Etiam quis magna risus. Aliquam vitae risus laoreet purus malesuada<br /> 
                      </Text>}
            />
            <OperaLayerSection
                factor={0.95}
                offset={xs?5:4} 
                speed={0.6}
                title="Lorem Ipsum Dolor Sit Amet"
            >
                <VideoPlayer video={videoopera} width={"100%"} height={"100%"} />
            </OperaLayerSection>
            <OperaLayer
                bg="#771024" 
                offset={xs?5.45:4.90} factor={0.5} speed={1}
                title={<Title fz={xs?40:50} fw={200} align={xs?"center":"unset"} c="white" mb={xs?5:30} className="font-third">Lorem Ipsum Dolor Sit Amet</Title>}
                desc={<Text c="white" align="center" fz={xs?15:25} style={{textAlign:"justify",width:xs?"100%":"60%",lineHeight: "2.3rem", letterSpacing: "0.2rem"}} className="font-four" >
                    Vestibulum justo massa, tempor non efficitur facilisis, aliquam aliquet est. Vivamus gravida auctor est sed pulvinar.<br /> Sed pharetra justo lobortis ante venenatis commodo.<br /> Class aptent taciti sociosqu ad litora torquent per conubia nostra                     </Text>}
            />
            <OperaLayerSection
                factor={xs?1.7:0.95}
                offset={xs?6:5} 
                speed={0.6}
                title="Lorem Ipsum Dolor Sit Amet"
            >
                <div className="awesome-navigatore" style={{position:"relative",width:xs?"100%":"80%"}}>
                    <CarouselFoto hasOpened data={[{image: img1},{image: img2},{image: img3},{image: img4}]} slide={1} slideSize={"100%"} width={"100%"} height={"100%"} imageHeight={"100%"} />
                </div>
            </OperaLayerSection>
            <OperaLayer
                bg="#420a15" 
                offset={xs?6.45:5.90} factor={0.5} speed={1}
                title={<Title fz={xs?40:50} fw={200} align={xs?"center":"unset"} c="white" mb={xs?5:30} className="font-third">Lorem Ipsum Dolor Sit Amet</Title>}
                desc={<Text c="white" align="center" fz={xs?15:25} style={{textAlign:"justify",width:xs?"100%":"60%",lineHeight: "2.3rem", letterSpacing: "0.2rem"}} className="font-four" >
                    Vestibulum justo massa, tempor non efficitur facilisis, aliquam aliquet est. Vivamus gravida auctor est sed pulvinar.<br /> Sed pharetra justo lobortis ante venenatis commodo.<br /> Class aptent taciti sociosqu ad litora torquent per conubia nostra                     </Text>}
            />
        </Parallax>
    )
}