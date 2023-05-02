import './App.css'
import VideoTransitioner from './components/VideoTransitioner'
import blood from './assets/blood.mp4'
import useMediaQuery from '@mui/material/useMediaQuery';
import Sfondo from './components/Sfondo';
import { Suspense } from 'react';

function App() {
  const mobile = useMediaQuery("(max-width: 500px)")

  return (
    <>
      <Suspense fallback={<VideoTransitioner video={blood} width={mobile?'100%':'56%'} height='100%' />}>
        <Sfondo />
      </Suspense>
    </>
  )
}

export default App
