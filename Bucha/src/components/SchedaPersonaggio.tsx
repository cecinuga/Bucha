import ImgFlipping from "./ImgFlipping";
import { ReactElement } from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { Button, Group, Text, Title } from '@mantine/core';
import useMediaQuery from "@mui/material/useMediaQuery/useMediaQuery";

type SchedaPersonaggio = {
    img: string;
    width:string;
    height?: string;
    className?: string;
    title: string;
    ruolo: string;
    position: "left"|"right";
    ruoloIcon?: JSX.Element;
    description: string | ReactElement;
    imgCircle: string;
    imgProfile: string;
    citazione:string;
    children: ReactElement
}

export default function SchedaPersonaggio(props: SchedaPersonaggio){
    const sm = useMediaQuery('(max-width: 1090px)')

    const renderImg = (children: ReactElement) => {
        return (
            <ImgFlipping 
                citazione={props.citazione} 
                imgProfile={props.imgProfile} 
                imgCircle={props.imgCircle} 
                img={props.img} 
                width={props.width} 
                height={props.height} 
                className="" 
            >
                {children}
            </ImgFlipping>
        )
    }
    const renderDesc = () => {
        return (
            <div style={{paddingBottom:"18rem", width:"40rem"}}>
                <Title className="font-primary" fw={200} order={1} variant={"gradient"} gradient={{from: "white", to:"red.9"}} style={{borderBottom:"2px solid white"}}>{props.title}</Title>
                <Title className="font-primary" fw={200} pt={20} order={3} c={"white"}>{props.ruolo}{props.ruoloIcon}</Title>
                <div>
                    <div>{props.description}</div>
                    <div className="my-5"> 
                        <Button variant="outline" style={{border:0}}><AiFillInstagram style={{fill:"red"}} size={36} /></Button>
                        <Button variant="outline" style={{border:0}}><ImLinkedin style={{fill:"red"}} size={30} /></Button>
                        <Button variant="outline" style={{border:0}}><AiOutlineTwitter style={{fill:"red"}} size={36} /></Button>
                    </div>
                </div>
            </div>
        )
    }
    

    return (
        <>
            <Group>
                {props.position=="left"?
                <>
                    <Text>
                        {renderImg(props.children)}
                    </Text>
                    <Text>
                        {renderDesc()}
                    </Text>
                </>:
                    sm?
                        <>
                            <Text>
                                {renderImg(props.children)}
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
                                {renderImg(props.children)}
                            </Text>
                        </>
                }
            </Group>
        </>
    );  
}