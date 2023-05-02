import {Button, Group, Title, Text} from "@mantine/core"

export default function LandingPage(){

    return(
        <>
            <Group position="center" style={{position:"relative", zIndex: 1, touchAction: "none"}}>
                <Title order={1} fw={500} className="font-primary" align="center">
                    Bucha
                    <Text size={25} fw={500} align="center" className="font-primary">La Fossa Comune</Text>
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