import { Button, Group, Text, Title } from "@mantine/core";
import SchedaPersonaggio from "./SchedaPersonaggio";
import katarina from "../assets/katarina_v.jpg"
import lorenzodandrea from "../assets/lorenzo_dandrea.jpg"
import vincenzonobile from "../assets/vincenzonobile1.jpeg"
import katarinascultura from "../assets/katarinascultura.jpg"
import katarinascultura1 from "../assets/katarinascultura1.jpg"
import katarinascultura2 from "../assets/katarinascultura2.jpg"
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";
import { Link } from "react-router-dom";
import ParallaxWallpaper from "./ParallaxWallpaper";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import DividerWaves from "./DividerWaves";
import Gradient from "./Gradient";

export default function ArtistiPage(){
    const xs = useMediaQuery("(max-width:500px)")

    return(
        <>
            <Parallax enabled pages={8} style={{top: "0", left: "0", background: "linear-gradient(180deg, rgba(187,61,61,1) 20%, rgba(82,9,25,1) 90%)"}}>
                <ParallaxWallpaper />
                <ParallaxLayer factor={1} offset={xs?0.55:1} speed={1}>
                    <Group position="center">
                        <Title fz={xs?50:75} pt={5} mb={5} className="font-primary" fw={200} style={{borderBottom:"2px solid white"}} c="white">Bucha 2022</Title>
                    </Group>
                    <Group position="center">
                        <Link to="/" style={{textDecoration:"none"}}>
                            <Title fz={25} mb={50} mt={10} className="font-primary" fw={200} style={{borderBottom:"2px solid white"}} c="white">Torna alla Home</Title>
                        </Link>
                    </Group>
                </ParallaxLayer>
                <ParallaxLayer factor={0.3} offset={xs?1:1.9} speed={0.5}>
                    <Group position="center">
                        <DividerWaves width="100%" />
                    </Group>
                </ParallaxLayer>
                <ParallaxLayer factor={xs?2.5:1} style={{paddingTop:"3.5%"}} offset={xs?1.50:2} speed={1.2}>
                    <Group position="center">
                        <SchedaPersonaggio img={katarina} width={"80%"} title={<>
                            <Title className="font-third" fw={200} order={1} style={{fontSize:"4rem"}} c="white">Katarina V</Title>
                            <Title className="font-primary" fw={200} order={1} variant={"gradient"} gradient={{ from: "white", to: "#fe0707" }} style={{ borderBottom: "2px solid white" }}>Cosi l'Uomo ha fatto all'altro Uomo</Title>
                        </>} 
                        ruolo={<Text pb={50} className="font-secondary" fw={200} style={{ fontSize: "1.2rem" }}>"Giovane Scultrice, cittadina d'Europa."</Text>} 
                        position={"left"} 
                        description={<Text c="white" className="font-primary" fw={200}>I temi su cui <span style={{ color: "black", fontSize: "1.3rem" }}>Katarina V</span> lavora, plasmando l'argilla con passione <span style={{ color: "black", fontSize: "1.3rem" }}>Maniacale</span>, sono:<br />
                            <Text className="font-primary" fw={200}>La Bellezza <span style={{ color: "black", fontSize: "1.3rem" }}>Femminile</span></Text>
                            <Text className="font-primary" fw={200}>La Bellezza della <span style={{ color: "black", fontSize: "1.3rem" }}>Natura</span></Text>
                            <Text className="font-primary" fw={200}>La Bellezza dell'Azione <span style={{ color: "black", fontSize: "1.3rem" }}>Antropica</span> intrisa di Religione, Sciamanesimo e indagine antropologica</Text>
                            <Text className="font-primary" fw={200} pt={20}>I Lavori di Katarina V si sviluppano attorno al rispetto della Natura, a volte di Preghiera</Text>
                            <Text className="font-primary" fw={200} pt={20}>L'Artista vuole mandare un messaggio: <Text className="font-secondary" style={{ letterSpacing: "0.3rem", lineHeight: "2rem" }}>Un monito agl' Umani, affinche abbiano attenzione nel conservare e nel rispettare la natura e tutti gli esseri viventi</Text></Text>
                        </Text>}
                        imgProfile={katarina} 
                        citazione={"Giovane Scultrice, cittadina d'Europa."} data={[katarinascultura, katarinascultura1, katarinascultura2]}>
                            <>
                                <Group position="center">
                                    <Text className="font-primary" fw={200}><a target="_blank" style={{textDecoration:"none"}} href={"https://www.katarina-v.com/en/"}><Button variant="gradient" gradient={{from:"white", to:"red"}} px={100}>Sito Artista</Button></a></Text>
                                </Group>
                            </>
                        </SchedaPersonaggio>
                    </Group>
                </ParallaxLayer>
                <ParallaxLayer factor={3} offset={xs?2.9:3} speed={0.5}>
                    <Group position="center">
                        <DividerWaves width="100%" />
                    </Group>
                </ParallaxLayer>
                <ParallaxLayer factor={xs?2.5:1} style={{paddingTop:"3.5%"}} offset={3} speed={1}>
                    <Group position="center">
                        <SchedaPersonaggio img={lorenzodandrea} width={"80%"} title={<>
                            <Title className="font-third" fw={200} order={1} style={{fontSize:"4rem"}} c="white">Lorenzo D'Andrea</Title>
                            <Title className="font-primary" fw={200} order={1} variant={"gradient"} gradient={{ from: "white", to: "#fe0707" }} style={{ borderBottom: "2px solid white" }}>Cosi l'Uomo ha fatto all'altro Uomo</Title>
                        </>} 
                        ruolo={<Text pb={50} className="font-secondary" fw={200} style={{ fontSize: "1.2rem" }}>"La nuova Guernica del terzo millennio."</Text>} 
                        position={"right"} 
                        description={<Text c="white" className="font-primary" fw={200}>Architetto di formazione, <span style={{ color: "black", fontSize: "1.3rem" }}>Istrionico</span> e ricco di <span style={{ color: "black", fontSize: "1.3rem" }}>Contenuti</span>. <br />
                            <Text className="font-primary" fw={200}>D'Andrea vanta una produzione artistica <span style={{ color: "black", fontSize: "1.3rem" }}>Decennale</span></Text>
                            <Text className="font-primary" fw={200}>Supportata da una tecnica <span style={{ color: "black", fontSize: "1.3rem" }}>Magistrale</span></Text>
                            <Text className="font-primary" fw={200}>La mia Arte indaga con la stessa <span style={{ color: "black", fontSize: "1.3rem" }}>Intensita'</span> la contemporaneità a cui appartiene e gli indissolubili dilemmi umani</Text>
                            <Text className="font-primary" fw={200} pt={20}>L'Artista vuole mandare un messaggio: <Text className="font-secondary" style={{ letterSpacing: "0.3rem", lineHeight: "2rem" }}>Un monito agl' Umani, affinche abbiano attenzione nel conservare e nel rispettare la natura e tutti gli esseri viventi</Text></Text>
                        </Text>}
                        imgProfile={katarina} 
                        citazione={"La nuova Guernica del terzo millennio."} data={[katarinascultura, katarinascultura1, katarinascultura2]}>
                            <>
                                <Group position="center">
                                    <Text className="font-primary" fw={200}><a target="_blank" style={{textDecoration:"none"}} href={"https://www.katarina-v.com/en/"}><Button variant="gradient" gradient={{from:"white", to:"red"}} px={100}>Sito Artista</Button></a></Text>
                                </Group>
                            </>
                        </SchedaPersonaggio>
                    </Group>
                </ParallaxLayer>
                <ParallaxLayer factor={0.3} offset={4.9} speed={0.5}>
                    <Group position="center">
                        <DividerWaves width="100%" />
                    </Group>
                </ParallaxLayer>
                <ParallaxLayer factor={xs?2.5:1} style={{paddingTop:"3.5%"}} offset={5} speed={1.8}>
                    <Group position="center" >
                        <SchedaPersonaggio img={vincenzonobile} width={"80%"} title={<>
                            <Title className="font-third" fw={200} order={1} style={{fontSize:"4rem"}} c="white">Vincenzo Nobile</Title>
                            <Title className="font-primary" fw={200} order={1} variant={"gradient"} gradient={{ from: "white", to: "#fe0707" }} style={{ borderBottom: "2px solid white" }}>Cosi l'Uomo ha fatto all'altro Uomo</Title>
                        </>} 
                        ruolo={<Text pb={50} className="font-secondary" fw={200} style={{ fontSize: "1.2rem" }}>"Bucha 2022: per ricordare gli errori che portano alla Guerra"</Text>} 
                        position={"left"} 
                        description={<Text c="white" className="font-primary" fw={200}>Architetto <span style={{ color: "black", fontSize: "1.3rem" }}>Polivalente</span> <br />
                            <Text className="font-primary" fw={200}>Con le idee chiare su quali siano le  <span style={{ color: "black", fontSize: "1.3rem" }}>Regole</span> che stabiliscono l'Abitare moderno</Text>
                            <Text className="font-primary" fw={200}>Ho Realizzato più di 200 <span style={{ color: "black", fontSize: "1.3rem" }}>Architetture</span> di interni</Text>
                            <Text className="font-primary" fw={200}>La mia Arte indaga con la stessa <span style={{ color: "black", fontSize: "1.3rem" }}>Intensita'</span> la contemporaneità a cui appartiene e gli indissolubili dilemmi umani</Text>
                            <Text className="font-primary" fw={200} pt={20}>L'Artista vuole mandare un messaggio: <Text className="font-secondary" style={{ letterSpacing: "0.3rem", lineHeight: "2rem" }}>Un monito agl' Umani, affinche abbiano attenzione nel conservare e nel rispettare la natura e tutti gli esseri viventi</Text></Text>
                        </Text>}
                        imgProfile={katarina} 
                        citazione={"La nuova Guernica del terzo millennio."} data={[katarinascultura, katarinascultura1, katarinascultura2]}>
                            <>
                                <Group position="center">
                                    <Text className="font-primary" fw={200}><a target="_blank" style={{textDecoration:"none"}} href={"https://www.katarina-v.com/en/"}><Button variant="gradient" gradient={{from:"white", to:"red"}} px={100}>Sito Artista</Button></a></Text>
                                </Group>
                            </>
                        </SchedaPersonaggio>
                    </Group>
                </ParallaxLayer>
                <ParallaxLayer factor={0.3} offset={6} speed={0.5}>
                    <Group style={{position:"absolute", bottom:0, width:"100%"}}>
                        <DividerWaves width="100%" />
                    </Group>
                </ParallaxLayer>
            </Parallax>
        </>
     )
}