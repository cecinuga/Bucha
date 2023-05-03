import { Group, Text } from "@mantine/core";
import SchedaPersonaggio from "./SchedaPersonaggio";
import katarina from "../assets/katarina_v.jpg"

export default function ArtistiPage(){
    return(
        <Group position="center" pt={50} pb={300} style={{background: "linear-gradient(180deg, rgba(187,61,61,1) 20%, rgba(82,9,25,1) 90%"}}>
            <SchedaPersonaggio img={katarina} width={"80%"} title={"Cosi l'Uomo ha fatto all'altro Uomo"} ruolo={"Giovane Scultrice, cittadina d'Europa. cosi vuole definirsi"} position={"left"} description={
                <Text pt={30} c="white" className="font-primary" fw={200}>I temi su cui <span style={{color:"black"}}>Katarina V</span> lavora, plasmando l'argilla con passione <span style={{color:"black"}}>Maniacale</span>, sono:<br />
                    <Text pt={20} className="font-primary" fw={200}>La Bellezza <span style={{color:"black"}}>Femminile</span></Text>
                    <Text className="font-primary" fw={200}>La Bellezza della <span style={{color:"black"}}>Natura</span></Text>
                    <Text className="font-primary" fw={200}>La Bellezza dell'Azione <span style={{color:"black"}}>Antropica</span> intrisa di Religione, Sciamanesimo e indagine antropologica</Text> 
                </Text>} 
                imgCircle={""} imgProfile={""} citazione={""} >
                <div></div>
            </SchedaPersonaggio>
        </Group>
    )
}