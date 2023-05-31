import { Button, Group, Stack, Title, Text } from "@mantine/core"
import DividerWaves from "./DividerWaves"
import SingleDividerWaves from "./SingleDividerWaves"
import { Dispatch, SetStateAction, useEffect } from "react"

type StepProps = {
    setActive: Dispatch<SetStateAction<number>>;
    active: number;
}

export default function Step1(props: StepProps){
    useEffect(()=>{
        window.scrollTo({top: document.body.scrollHeight})
    })

    return(
        <>
            <Stack>
                <DividerWaves width="100%" colors={["#7c0701","pink","rgba(147,117,117,0.5)","rgba(210,92,100,1)"]}/>
                <Stack px={5}>
                    <Group style={{justifyContent:"space-between"}}><Title c="white" className="font-secondary" fw={200}>Step 1 </Title><Button bg="green" className="font-secondary bg-green-hover" fz={15} onClick={()=>{props.setActive(props.active+1)}}>Avanti</Button></Group>
                    <Text className="font-secondary" c="white" align="center" pt={10}>
                        Diventare <Text c="green" display={"inline-block"} className="font-secondary" fz={21}>CoProprietario</Text> significa finazionare la creazione della <Text c="green" display={"inline-block"} className="font-secondary" fz={21}>Nostra</Text> opera.
                    </Text>
                </Stack>
                <Button display="block" className="font-third bg-green-hover" bg="green" style={{borderRadius:"0", height:"10rem"}} fz={70}>Vai al Patreon</Button>
            </Stack>
            <div style={{position:"fixed", bottom:0, width:"100%"}}><SingleDividerWaves width="100%" /></div>
        </>
    )
}