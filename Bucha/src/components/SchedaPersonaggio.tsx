import ImgFlipping from "./ImgFlipping";
import { ReactElement } from "react";
import { Group, Text, Title } from '@mantine/core';
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";

type SchedaPersonaggio = {
    img: string;
    width:string;
    height?: string;
    className?: string;
    title: string | ReactElement;
    ruolo: string | ReactElement;
    position: "left"|"right";
    ruoloIcon?: JSX.Element;
    description: string | ReactElement;
    imgProfile: string;
    citazione:string;
    children?: ReactElement
    data: string[]
}

export default function SchedaPersonaggio(props: SchedaPersonaggio){
    const sm = useMediaQuery('(max-width: 1090px)')
    const md = useMediaQuery('(max-width: 1600px)')
    const xs = useMediaQuery('(max-width: 700px)')
    const xxs = useMediaQuery('(max-width: 450px)')

    const renderImg = (children: ReactElement) => {
        return (
            <ImgFlipping 
                citazione={props.citazione}
                imgProfile={props.imgProfile}
                img={props.img}
                width={props.width}
                height={props.height}
                className="" 
                data={props.data} 
            >
                {children}
            </ImgFlipping>
        )
    }
    const renderDesc = () => {
        return (
            <div style={{paddingBottom:md?"0rem":"8rem", width:xxs?"20rem":xs?"27rem":"40rem"}}>
                {props.title}
                <Title className="font-primary" fw={200} pt={20} order={3} c={"white"}>{props.ruolo}{props.ruoloIcon}</Title>
                <div>
                    <div>{props.description}</div>
                </div>
            </div>
        )
    }
    

    return (
        <>
            <Group position={xs?"center":"left"}>
                {props.position=="left"?
                <>
                    <Text>
                        {renderImg(props.children!)}
                    </Text>
                    <Text>
                        {renderDesc()}
                    </Text>
                </>:
                    sm?
                        <>
                            <Text>
                                {renderImg(props.children!)}
                            </Text>
                            <Text>
                                {renderDesc()}
                            </Text>
                        </>:
                        <>
                            <Text>
                                {renderDesc()}
                            </Text>
                            <Text>
                                {renderImg(props.children!)}
                            </Text>
                        </>
                }
            </Group>
        </>
    );  
}