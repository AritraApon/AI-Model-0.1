
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Carts from './Components/Carts/Carts'
import Footer from './Components/Footer/Footer'
import Model from './Components/Model/Model'
import Navbar from './Components/Navbar/Navbar'
import { use } from 'react'



const fetchModel = async () => {
  let res = await fetch('/model.json');
  return res.json()
}
const modelPromise = fetchModel()


function App() {
  const [activeModel, setActiveModel] = useState('model');
  const [carts , setCarts] = useState([])

  return (
    <>
      <Navbar setActiveModel={setActiveModel} />
      <Banner />

      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center bg-transparent ">
        <input
        type="radio"
        name="my_tabs_1"
         className={`tab rounded-full w-50 py-2 ${activeModel === 'model' && 'bg-linear-to-r from-pink-500 to-red-500 text-white'}`}
         aria-label="Model"
         defaultChecked
         onClick={() => setActiveModel('model')} />
        <input
        type="radio"
        name="my_tabs_1"
        className={`tab rounded-full w-50 py-2 ${activeModel === 'carts' && 'bg-linear-to-r from-pink-500 to-red-500 text-white'}`}
        aria-label={`Carts (${carts.length})`}
        onClick={() => setActiveModel('carts')} />

      </div>

      {activeModel === 'model' && <Model modelPromise={modelPromise} setCarts={setCarts}  carts={carts} />}
      {
        activeModel === 'carts' && <Carts carts={carts} setCarts={setCarts}  />
      }
      <Footer />
    </>
  )
}

export default App
