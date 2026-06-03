
import './App.css'
import Header from './components/Header'
import HeroSection from './components/Hero'
import FeatureSection from './components/Feature'
import Offer from './components/Offer'
import Footer from './components/Footer'
function App() {
  

  return (
    <div className="w-full bg-white min-h-screen flex flex-col">
    <Header/>
    <HeroSection/> 
    <FeatureSection/>
    <Offer/>
    <Footer/>     

  </div>
  )
}

export default App
