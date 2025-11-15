import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import Performance from './components/Performence'
import { ScrollTrigger,SplitText } from 'gsap/all'
import { gsap } from 'gsap'
import ShowCase from './components/ShowCase'
gsap.registerPlugin(ScrollTrigger,SplitText)
const App = () => {
  return (
   <main>
    <NavBar/>
    <Hero/>
    <ProductViewer/>
    <ShowCase/>
    <Performance/>
   </main>
  )
}   


export default App
