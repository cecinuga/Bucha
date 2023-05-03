import {Group, Title, Text} from "@mantine/core"
import Button3D from "./Button3D"

export default function LandingPage(){

    return(
        <>
            <Group position="center" style={{position:"absolute",bottom:"40%",left:"50%",transform:"translateX(-50%)", zIndex: 1, touchAction: "none"}}>
                <Title order={1} fw={500} className="font-primary" align="center">
                    Bucha
                    <Text size={25} fw={500} align="center" className="font-primary">La Fossa Comune</Text>
                </Title>
            </Group>
            <Group position="center" pt={15} style={{position:"absolute",bottom:"10%",left:"50%",transform:"translateX(-50%)", zIndex: 1, touchAction: "none"}}>
                <Button3D href="/l-opera" variant="gradient" gradient={{from:"white", to:"red.9"}} style={{width:"15rem", height:"15rem"}}>
                    <Title order={3} className="font-primary" fw={200}>L'Opera</Title>
                </Button3D>
                <Button3D href="/gli-artisti" variant="gradient" gradient={{from:"black", to:"white"}} style={{width:"15rem", height:"15rem"}}>
                    <Title order={3} className="font-primary" fw={200}>Gli Artisti</Title>
                </Button3D>
            </Group>
        </>
    )
}