import './App.css'
import VideoPlayerBase from './components/VideoPlayerBase'
import blood from './assets/blood.mp4'
import LandingPage from './components/LandingPage'

function App() {

  return (
    <>
      <VideoPlayerBase video={blood} width='54%' height='100%' />
      <LandingPage />
    </>
  )
}

export default App
