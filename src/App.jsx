import './App.css'
import AdsBanner from './components/AdsBanner'
import Navbar from './components/Navbar'
import MenuBar from './components/MenuBar';
import Banner from './components/Banner';
import HeroSection from './components/HeroSection';
function App() {
  
  return (
    <div className='bg-[#f0f0f0]'>
    <AdsBanner/>
    <Navbar/>
    <div className='flex justify-between min-h-[40vh]'>
      <MenuBar/>
      <Banner/>
    </div>
    <HeroSection/>
    </div>
  )
}

export default App
