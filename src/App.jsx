import './App.css'
import AdsBanner from './components/AdsBanner'
import Navbar from './components/Navbar'
import MenuBar from './components/MenuBar';
import Banner from './components/Banner';
import HeroSection from './components/HeroSection';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Card from './components/Card';
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
    <ProductList/>
    <div>
      <Card url={'../public/acDeals.json'} title={'Beat the Heat - AC Deals'}/>
      <Card url={'../public/bestSelling.json'} title={'Best Selling Product'}/>
      <Card url={'../public/mobileStore.json'} title={'The Mobile Store'}/>
      <Card url={'../public/television.json'} title={'Television'}/>
      <Card url={'../public/electronics.json'} title={'Electronics and Appliances'}/>
      <Card url={'../public/kitchen.json'} title={'Kitchen Appliances'}/>
      <Card url={'../public/gadgets.json'} title={'Gadgets'}/>
      <Card url={'../public/lifeStyle.json'} title={'Life Style'}/>
      <Card url={'../public/computers.json'} title={'Your Computers Essentials'}/>
    </div>
    <Footer/>
    </div>
  )
}

export default App
