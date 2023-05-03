import './App.css'
import Sfondo from './components/Sfondo';
import { Suspense, useState } from 'react';
import VideoTransitioner from './components/VideoTransitioner';
import VideoPlayer from './components/VideoPlayer';
import blood from "/src/assets/blood.mp4"
import LandingPage from './components/LandingPage';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  return (
    <>
      <VideoPlayer style={{position:"absolute", zIndex:-1, left:"50%", top:"50%", transform:"translateX(-50%) translateY(-65%)"}} video={blood} width={"50%"} height={'100%'}/>
      {isLoading?<VideoTransitioner setIsLoading={(e:boolean)=>setIsLoading(e)}/>:
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

export default App
