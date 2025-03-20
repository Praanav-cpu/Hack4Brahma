// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Hero from "./pages/Hero"
import About from "./pages/About"
import MissionTimeline from "./pages/MissionTimeline"
import Partners from "./pages/Partners"
import Prizes from "./pages/Prizes"
import Venue from "./pages/Venue"
import Gallery from "./pages/Gallery"
import Tracks from "./pages/Tracks"
import Organizers from "./pages/Organizers"
import FAQ from "./pages/FAQ"
import Volunteers from "./pages/Volunteers"
import CTA from "./pages/CTA"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/timeline" element={<MissionTimeline />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/prizes" element={<Prizes />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/tracks" element={<Tracks />} />
        <Route path="/organizers" element={<Organizers />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/volunteers" element={<Volunteers />} />
        <Route path="/cta" element={<CTA />} />
      </Routes>
    </Router>
  )
}

export default App
