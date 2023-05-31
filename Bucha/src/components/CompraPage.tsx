import { Stack, Title, Text, Stepper, Group, Button } from "@mantine/core";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useState } from "react";
import fire from "../assets/icon.gif"
import {BsFire} from "react-icons/bs"
import DividerWaves from "./DividerWaves";
import SingleDividerWaves from "./SingleDividerWaves";
import Step1 from "./Step1";

export default function CompraPage(){
    const [active, setActive] = useState(0);
    
    return(
        <Parallax pages={2} style={{position:"absolute", top:"0", left:"0"}} horizontal>
            <ParallaxLayer factor={0.5} offset={0} speed={0} horizontal>
                <Stack style={{position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)"}}>
                    <Title className="font-primary" fz={50} fw={200} variant="gradient" gradient={{from:"#260101", to:"#2d2626"}}>Diventa <Text className="font-third" fz={60} variant="gradient" gradient={{from:"green", to:"green"}} fw={400}>Anche Tu</Text> CoProprietario dell'Opera</Title>
                </Stack>
            </ParallaxLayer>
            <ParallaxLayer factor={0.5} offset={0.5} speed={1.5} horizontal style={{border:"2px solid rgba(147,117,117,0.5)", background: "radial-gradient(circle, rgba(210,92,100,1) 0%, rgba(242,54,44,1) 100%)"}}>
            <Stepper px={0} active={active} onStepClick={setActive} orientation="vertical" p={15} style={{border:"10px solid #7c0701",width:"100%", height:"100%", position:"relative", overflowY:"scroll"}}>
                <Stepper.Step style={{paddingLeft:"10px", width:"100%", height:"100%"}} completedIcon={<div style={{position:"absolute",width:"110%", height:"110%",backgroundColor:"#7c014a", borderRadius:"100px", border:"3px solid pink" }}><BsFire style={{position:"relative",top:"1px"}} fill={"pink"} size={36}/></div>} icon={<div style={{position:"absolute",backgroundColor:"pink", borderRadius:"100px", border:"3px solid #7c0701", height:"110%", width:"110%"}}><img src={fire} width={"100%"} style={{position:"relative", bottom:"23px"}}/></div>} label={<Title c="white" className="font-primary" fw={200}>Diventa CoProprietario</Title>} description={<Text c="black" className="font-four">L'Arte diffonde la Pace</Text>} loading={active>=0?false:true}>
                    <Step1 active={active} setActive={setActive}/>
                </Stepper.Step>
                <Stepper.Step style={{paddingLeft:"10px"}} completedIcon={<div style={{position:"absolute",width:"110%", height:"110%",backgroundColor:"#7c014a", borderRadius:"100px", border:"3px solid pink" }}><BsFire style={{position:"relative",top:"1px"}} fill={"pink"} size={36}/></div>} icon={<div style={{position:"absolute",backgroundColor:"pink", borderRadius:"100px", border:"3px solid #7c0701", height:"110%", width:"110%"}}><img src={fire} width={"100%"} style={{position:"relative", bottom:"23px"}}/></div>} label={<Title c="white" className="font-primary" fw={200}>Finanziamenti</Title>} description={<Text c="black" className="font-four">La Guerra esiste da sempre, devi capirla</Text>} loading={active>=1?false:true}>
                    <Stack>
                        <DividerWaves width="100%" colors={["#7c0701","pink","rgba(147,117,117,0.5)","rgba(210,92,100,1)"]}/>
                        <Stack px={5}>
                        <Group style={{justifyContent:"space-between"}}><Title c="white" className="font-secondary" fw={200}>Step 2 </Title><Button bg="green" className="font-secondary bg-green-hover" fz={15} onClick={()=>{setActive(active+1)}}>Avanti</Button></Group>
                            <Text className="font-secondary" c="white" align="center" pt={10}>
                                Diventare <Text c="green" display={"inline-block"} className="font-secondary" fz={21}>CoProprietario</Text> significa ricevere una quota dall'<Text c="green" display={"inline-block"} className="font-secondary" fz={21}>Affitto</Text> dell'opera da parte dei musei
                            </Text>
                        </Stack>
                    </Stack>
                    <div style={{position:"absolute", bottom:0, width:"100%"}}><SingleDividerWaves width="100%" /></div>
                </Stepper.Step>
                <Stepper.Step style={{paddingLeft:"10px"}} completedIcon={<div style={{position:"absolute",width:"110%", height:"110%",backgroundColor:"#7c014a", borderRadius:"100px", border:"3px solid pink" }}><BsFire style={{position:"relative",top:"1px"}} fill={"pink"} size={36}/></div>} icon={<div style={{position:"absolute",backgroundColor:"pink", borderRadius:"100px", border:"3px solid #7c0701", height:"110%", width:"110%"}}><img src={fire} width={"100%"} style={{position:"relative", bottom:"23px"}}/></div>} label={<Title c="white" className="font-primary" fw={200}>Tasse</Title>} description={<Text c="black" className="font-four">Immedesimati nella sofferenza altrui, ti eleverà</Text>} loading={active>=2?false:true}>
                    <Stack>
                        <DividerWaves width="100%" colors={["#7c0701","pink","rgba(147,117,117,0.5)","rgba(210,92,100,1)"]}/>
                        <Stack px={5}>
                            <Group style={{justifyContent:"space-between"}}><Title c="white" className="font-secondary" fw={200}>Step 3 </Title><Button bg="green" className="font-secondary bg-green-hover" fz={15} onClick={()=>{setActive(active+1)}}>Avanti</Button></Group>
                            <Text className="font-secondary" c="white" align="center" pt={10}>
                                L'Arte <Text c="green" display={"inline-block"} className="font-secondary" fz={21}>Non</Text> è tassata
                            </Text>
                        </Stack>
                    </Stack>
                    <div style={{position:"absolute", bottom:0, width:"100%"}}><SingleDividerWaves width="100%" /></div>
                </Stepper.Step>
                <Stepper.Step style={{paddingLeft:"10px"}} completedIcon={<div style={{position:"absolute",width:"110%", height:"110%",backgroundColor:"#7c014a", borderRadius:"100px", border:"3px solid pink" }}><BsFire style={{position:"relative",top:"1px"}} fill={"pink"} size={36}/></div>} icon={<div style={{position:"absolute",backgroundColor:"pink", borderRadius:"100px", border:"3px solid #7c0701", height:"110%", width:"110%"}}><img src={fire} width={"100%"} style={{position:"relative", bottom:"23px"}}/></div>} label={<Title c="white" className="font-primary" fw={200}>Diffondi la Pace</Title>} description={<Text c="black" className="font-four">Per conseguire ai nostri obbiettivi, dobbiamo diffondere la Pace</Text>} loading={active>=3?false:true}>
                    <Stack>
                        <DividerWaves width="100%" colors={["#7c0701","pink","rgba(147,117,117,0.5)","rgba(210,92,100,1)"]}/>
                        <Stack px={5}>
                            <Title c="white" className="font-secondary" fw={200}>Step 4 </Title>
                            <Text className="font-secondary" c="white" align="center" pt={10}>
                                Grazie mille per il tuo contributo, ora fai parte di noi.
                            </Text>
                        </Stack>
                    </Stack>
                    <div style={{position:"absolute", bottom:0, width:"100%"}}><SingleDividerWaves width="100%" /></div>
                </Stepper.Step>
            </Stepper>
            </ParallaxLayer>
        </Parallax>
    )
}