import { Group, Text, Title } from "@mantine/core";
import SchedaPersonaggio from "./SchedaPersonaggio";
import katarina from "../assets/katarina_v.jpg"
import katarinascultura from "../assets/katarinascultura.jpg"
import katarinascultura1 from "../assets/katarinascultura1.jpg"
import katarinascultura2 from "../assets/katarinascultura2.jpg"

export default function ArtistiPage(){
    return(
        <Group position="center" pt={50} pb={0} style={{background: "linear-gradient(180deg, rgba(187,61,61,1) 20%, rgba(82,9,25,1) 90%", height:"100vh"}}>
            <SchedaPersonaggio img={katarina} width={"80%"} title={<>
                <Title className="font-third" fw={200} order={1} style={{fontSize:"4rem"}} c="white">Katarina V</Title>
                <Title className="font-primary" fw={200} order={1} variant={"gradient"} gradient={{ from: "white", to: "#fe0707" }} style={{ borderBottom: "2px solid white" }}>Cosi l'Uomo ha fatto all'altro Uomo</Title>
            </>} ruolo={<Text pb={50} className="font-secondary" fw={200} style={{ fontSize: "1.2rem" }}>"Giovane Scultrice, cittadina d'Europa"</Text>} position={"left"} description={<Text c="white" className="font-primary" fw={200}>I temi su cui <span style={{ color: "black", fontSize: "1.3rem" }}>Katarina V</span> lavora, plasmando l'argilla con passione <span style={{ color: "black", fontSize: "1.3rem" }}>Maniacale</span>, sono:<br />
                <Text className="font-primary" fw={200}>La Bellezza <span style={{ color: "black", fontSize: "1.3rem" }}>Femminile</span></Text>
                <Text className="font-primary" fw={200}>La Bellezza della <span style={{ color: "black", fontSize: "1.3rem" }}>Natura</span></Text>
                <Text className="font-primary" fw={200}>La Bellezza dell'Azione <span style={{ color: "black", fontSize: "1.3rem" }}>Antropica</span> intrisa di Religione, Sciamanesimo e indagine antropologica</Text>
                <Text className="font-primary" fw={200} pt={20}>I Lavori di Katarina V si sviluppano attorno al rispetto della Natura, a volte di Preghiera</Text>
                <Text className="font-primary" fw={200} pt={20}>L'Artista vuole mandare un messaggio: <Text className="font-secondary" style={{ letterSpacing: "0.3rem", lineHeight: "2rem" }}>Un monito agl' Umani, affinche abbiano attenzione nel conservare e nel rispettare la natura e tutti gli esseri viventi</Text></Text>
            </Text>}
            imgProfile={katarina} citazione={"Giovane Scultrice, cittadina d'Europa"} data={[katarinascultura, katarinascultura1, katarinascultura2]}>
                <div></div>
            </SchedaPersonaggio>
        </Group>
    )
}