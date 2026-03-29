
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Carts from './Components/Carts/Carts'
import Footer from './Components/Footer/Footer'
import Model from './Components/Model/Model'
import Navbar from './Components/Navbar/Navbar'



const fetchModel = async () => {
  let res = await fetch('/model.json');
  return res.json()
}
const modelPromise = fetchModel()


function App() {
  const [activeModel, setActiveModel] = useState('model')

  return (
    <>
      <Navbar setActiveModel={setActiveModel} />
      <Banner />

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent ">
        <input type="radio" name="my_tabs_1" className="tab rounded-full w-50 py-2 " aria-label="Model" defaultChecked onClick={() => setActiveModel('model')} />
        <input type="radio" name="my_tabs_1" className="tab rounded-full w-50 py-2 " aria-label="Carts" onClick={() => setActiveModel('carts')} />

      </div>
      
      {activeModel === 'model' && <Model modelPromise={modelPromise} />}
      {
        activeModel === 'carts' && <Carts />
      }
      <Footer />
    </>
  )
}

export default App
