import { Card, Group, Stack, Title } from "@mantine/core";
import { ParallaxLayer } from "@react-spring/parallax";
import { ReactElement } from "react";

type OperaLayerProps = {
    icons: ReactElement[]
    descs: string[],
    title: string;
    bgs: string[]
    offset:number;
    speed:number,
}

export default function OperaLayerSection(props: OperaLayerProps){
    return(
        <ParallaxLayer style={{backgroundColor:"white"}} offset={props.offset} speed={props.speed}>
            <Stack align="center">
                <Title className="font-primary" fw={200} py={"5rem"}>{props.title}</Title>
                    {props.descs.map((item, i) => 
                    <Group position="center">
                        {props.icons[i]}
                        <Card radius={"md"} bg={props.bgs[i]} withBorder p={50} w={"50%"} c="white">
                            <Card.Section>
                                <strong>{item}</strong>
                            </Card.Section>
                        </Card>  
                    </Group>  
                    )}
            </Stack>
        </ParallaxLayer>
    )
}