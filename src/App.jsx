import Home from "./pages/Home"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import MyTeam from "./pages/MyTeam"
import Report from "./pages/Report"
import Teametails from "./pages/Teametails"
import VideoPage from "./pages/VideoPage"

function App() {

  return (
    <>
      <div className="">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/MyTeam" element={<MyTeam/>}/>
          <Route path="/Report" element={<Report/>}/>
          <Route path="/teamdetails" element={<Teametails/>}/>
          <Route path="/videopage" element={<VideoPage/>}/>
        </Routes>
        </BrowserRouter>
        
      </div>
     
    </>
  )
}

export default App
