import { Stepper, Title } from "@mantine/core";
import { ReactElement } from "react";

type StepProps = {
    title: string;
    desc: string;
    children: string | ReactElement;
}

export default function Step(props: StepProps){
    return(
        <Stepper.Step label={<Title >{props.title}</Title>} description={props.desc}>
            {props.children}
        </Stepper.Step>
    )
}