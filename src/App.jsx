import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import ProductViewer from './components/ProductViewer'
import Performance from './components/Performence'
import { ScrollTrigger,SplitText } from 'gsap/all'
import { gsap } from 'gsap'
import ShowCase from './components/ShowCase'
import Features from './components/Features'
import Highlisht from './components/Highlisht'
import Footer from './components/Footer'

gsap.registerPlugin(ScrollTrigger,SplitText)
const App = () => {
  return (
   <main>
    <NavBar/>
    <Hero/>
    <ProductViewer/>
    <ShowCase/>
    <Performance/>
    <Features/>
    <Highlisht/>
    <Footer/>
   </main>
  )
}   


export default App
