import './App.css'
import VideoTransitioner from './components/VideoTransitioner'
import blood from './assets/blood.mp4'
import LandingPage from './components/LandingPage'
import useMediaQuery from '@mui/material/useMediaQuery';

function App() {
  const mobile = useMediaQuery("(max-width: 500px)")

  return (
    <>
      <VideoTransitioner video={blood} width={mobile?'100%':'56%'} height='100%' />
      <LandingPage />
    </>
  )
}

export default App
