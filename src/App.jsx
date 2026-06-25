// import { useState } from 'react'
import Header from './Components/Header/Header'
import Content1 from './Components/Body/Content1'
import BoldHeader from './Components/Body/BoldHeader'
import Content2 from './Components/Body/Content2'
import MainContent from './Components/MainContent/MainContent'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  
  return (
    <>
      <div className='content'>
        <Header></Header>
      <Content1></Content1>
      <BoldHeader></BoldHeader>
      <Content2></Content2>
      <MainContent></MainContent>
      <div className='about'>Made By Aviral </div>
      </div>
    </>
  )
}

export default App
