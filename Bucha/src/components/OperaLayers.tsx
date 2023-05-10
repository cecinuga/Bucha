import { Group } from "@mantine/core";
import { ParallaxLayer } from "@react-spring/parallax";
import SingleDividerWaves from "./SingleDividerWaves";
import { ReactElement } from "react";

type OperaLayerProps = {
    title: string | ReactElement;
    desc: string | ReactElement
    offset: number;
    factor: number;
    speed: number;
    bg: string;
}

export default function OperaLayer(props: OperaLayerProps){
    return(
        <>
            <ParallaxLayer offset={props.offset} factor={props.factor} speed={props.speed} style={{background:props.bg}}>
                <Group position="center">
                    {props.title}
                </Group>
                <Group position="center">
                    {props.desc}
                </Group>
                <Group style={{position:"absolute", bottom:0, width:"100%"}}>
                    <SingleDividerWaves width="100%" />
                </Group> 
            </ParallaxLayer>
        </>
    )
}