import Sfondo from './Sfondo';
import { Dispatch, SetStateAction, Suspense } from 'react';
import VideoTransitioner from './VideoTransitioner';
import VideoPlayer from './VideoPlayer';
import blood from "/src/assets/blood.mp4"
import LandingPage from './LandingPage';
import useMediaQuery from '@mui/material/useMediaQuery/useMediaQuery';


type HomePageProps = {
    isLoading: [boolean, Dispatch<SetStateAction<boolean>>]
}

export default function HomePage(props: HomePageProps){
    const xs = useMediaQuery("(max-width: 500px)")

    return(
        <>
            <VideoPlayer style={{position:"absolute", zIndex:-1, left:"50%", top:"50%", transform:"translateX(-50%) translateY(-65%)"}} video={blood} width={xs?"100%":"50%"} height={'100%'}/>
            {props.isLoading[0]?<VideoTransitioner setIsLoading={props.isLoading[1]}/>:
                <>
                <Suspense fallback={null}>
                    <Sfondo/>
                </Suspense>
                <LandingPage />
                </>
            }
        </>
    )
}