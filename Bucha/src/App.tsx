import './App.css'
import Sfondo from './components/Sfondo';
import { Suspense, useState } from 'react';
import VideoTransitioner from './components/VideoTransitioner';
import VideoPlayer from './components/VideoPlayer';
import blood from "/src/assets/blood.mp4"
import { Group } from '@mantine/core';
import LandingPage from './components/LandingPage';

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true)


  return (
    <>
      {isLoading?<VideoTransitioner setIsLoading={(e:boolean)=>setIsLoading(e)}/>:
        <>
          <Suspense fallback={
            <Group position="center">
              <VideoPlayer video={blood} width={"50%"} height={'100%'}/>
            </Group>
          }>
            <Sfondo/>
          </Suspense>
          <LandingPage />
        </>
      }
    </>
  )
}

export default App
