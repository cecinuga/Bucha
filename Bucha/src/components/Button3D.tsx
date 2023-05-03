import { Button } from "@mantine/core";
import { ReactElement } from "react";

type Button3DProps = {
    variant: string;
    gradient: {from: string, to: string}
    style: {}
    children: ReactElement
    href:string;
}

export default function Button3D(props: Button3DProps){
    return(
        <Button<'a'> href={props.href} variant={props.variant} gradient={props.gradient} className="border-3d" style={{...props.style,padding:0, }}>
            {props.children}
        </Button>
    )
}