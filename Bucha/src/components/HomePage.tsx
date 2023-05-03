import Sfondo from './Sfondo';
import { Dispatch, SetStateAction, Suspense } from 'react';
import VideoTransitioner from './VideoTransitioner';
import VideoPlayer from './VideoPlayer';
import blood from "/src/assets/blood.mp4"
import LandingPage from './LandingPage';


type HomePageProps = {
    isLoading: [boolean, Dispatch<SetStateAction<boolean>>]
}

export default function HomePage(props: HomePageProps){

    return(
        <>
            <VideoPlayer style={{position:"absolute", zIndex:-1, left:"50%", top:"50%", transform:"translateX(-50%) translateY(-65%)"}} video={blood} width={"50%"} height={'100%'}/>
            {props.isLoading[0]?<VideoTransitioner setIsLoading={(e:boolean)=>props.isLoading[1](e)}/>:
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