import {Button, Group, Title} from "@mantine/core"
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery"

export default function LandingPage(){
    const mobile = useMediaQuery("(max-width:500px)")

    return(
        <>
            <Group position="center" pt={mobile?50:300} style={{position:"relative", zIndex: 1, touchAction: "none"}}>
                <Title order={1} fw={500} className="font-primary" align="center">
                    Bucha
                    <Title order={3} fw={500} align="center" className="font-primary">La Fossa Comune</Title>
                </Title>
            </Group>
            <Group position="center" pt={15} style={{position:"relative", zIndex: 1, touchAction: "none"}}>
                <Button variant="gradient" gradient={{from:"white", to:"red.9"}} style={{width:"15rem", height:"15rem"}}>
                    <Title order={3} className="font-secondary">L'Opera</Title>
                </Button>
                <Button variant="gradient" gradient={{from:"black", to:"white"}} style={{width:"15rem", height:"15rem"}}>
                    <Title order={3} className="font-secondary">Gli Artisti</Title>
                </Button>
            </Group>
        </>
    )
}