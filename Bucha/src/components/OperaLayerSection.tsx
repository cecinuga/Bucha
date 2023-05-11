import { Card, Group, Stack, Title } from "@mantine/core";
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";
import { ParallaxLayer } from "@react-spring/parallax";
import { ReactElement } from "react";

type OperaLayerProps = {
    icons?: ReactElement[]
    descs?: string[],
    title: string;
    bgs?: string[]
    offset:number;
    speed:number,
    factor: number,
    children?: ReactElement
}

export default function OperaLayerSection(props: OperaLayerProps){
    const lg = useMediaQuery("(max-width: 1600px)")
    const xs = useMediaQuery("(max-width: 500px)")
    return(
        <ParallaxLayer style={{backgroundColor:"white"}} factor={props.factor} offset={props.offset} speed={props.speed}>
            <Stack align="center"  px={0}>
                <Title order={xs?3:1} align={xs?"center":"unset"} className="font-primary" fw={200} pt={lg?"0.5rem":"2rem"} pb={lg?"0.5rem":"2rem"}>{props.title}</Title>
                {props.descs?.map((item, i) => 
                    <Group position="center" pb={lg?0:20}>
                        {props?.icons?.[i]}
                        <Card radius={xs?"unset":"md"} bg={props?.bgs?.[i]} withBorder p={xs?20:lg?40:50} w={xs?"100%":"50%"} c="white">
                            <Card.Section>
                                <strong>{item}</strong>
                            </Card.Section>
                        </Card>  
                    </Group>  
                )}
                {props.children}
            </Stack>
        </ParallaxLayer>
    )
}