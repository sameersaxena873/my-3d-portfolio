import'./App.css'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Landing from './Landing'
import Skills from './Skills'
import About from './About'
import Work from './Work'
import Career from './Career'
import Contact from './Contact'
import Navbar from './Navbar'
gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    // Project cards fade-in
    gsap.utils.toArray('.project-card').forEach((card: any) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
        }
      })
    })

    // Timeline items slide-in
    gsap.utils.toArray('.timeline-item').forEach((item: any) => {
      gsap.to(item, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
        }
      })
    })
  }, [])

  return (
    <div className="App">
      <Navbar/>
      <Landing />
      <About />
      <Skills/>
      <Work />
      <Career />
      <Contact />
    </div>
  )
}

export default App