import Sfondo from './Sfondo';
import { Suspense } from 'react';
import VideoPlayer from './VideoPlayer';
import blood from "/src/assets/blood.mp4"
import LandingPage from './LandingPage';
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';


export default function HomePage(){
    const xs = useMediaQuery("(max-width: 500px)")

    return(
        <>
            <Suspense fallback={<VideoPlayer style={{position:"absolute", zIndex:-1, left:"50%", top:"50%", transform:"translateX(-50%) translateY(-65%)"}} video={blood} width={xs?"100%":"100%"} height={'100%'}/>}>
                <Sfondo/>
            </Suspense>
            <LandingPage />
        </>
    )
}