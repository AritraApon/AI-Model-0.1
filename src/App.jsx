
import './App.css'
import Banner from './Components/Banner/Banner'
import Footer from './Components/Footer/Footer'
import Model from './Components/Model/Model'
import Navbar from './Components/Navbar/Navbar'


const fetchModel = async()=>{
  let res = await fetch('/model.json');
  return res.json()
}
 const modelPromise = fetchModel()


function App() {


  return (
  <>
     <Navbar/>
     <Banner/>

     <Model modelPromise={modelPromise}/>
     <Footer/>
  </>
  )
}

export default App
