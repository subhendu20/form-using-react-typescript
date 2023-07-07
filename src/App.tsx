

import React,{ useEffect } from 'react'
import './App.css'
import Forgetpass from './Components/Forgetpassword'
import Form from './Components/Form'
import Login from './Components/Login'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { getCookie, setCookie } from 'typescript-cookie'



// Initialization for ES Users




function App() {
 
  const[logstatus,setlogstatus]=React.useState(true)

  const getCookies=():string | undefined=>{
    return (getCookie('logtoken'))
    

  }
 useEffect(()=>{
  var cookie = getCookies()
  if(cookie){
    setlogstatus(true)
  }
  else{
    setlogstatus(false)
  }
 },[getCookies])



  return (
    <Router>{logstatus?<Form/>:
    <div className="flex flex-row w-full max-[600px]:flex-col justify-center items-center ">
    <div className="image w-1/2 px-10 py-40  max-[600px]:w-full py-0 h-1/2">
      <img src="https://img.freepik.com/free-vector/web-development-programmer-engineering-coding-website-augmented-reality-interface-screens-developer-project-engineer-programming-software-application-design-cartoon-illustration_107791-3863.jpg?w=1380&t=st=1688660521~exp=1688661121~hmac=6d861ada0638b5a49fd9fbafcd6cc95e0e3bd1a1d6c505d540fc0f63cfa44fd7" alt="loading" className='w-full h-full' />

    </div>
    <div className="flex items-center justify-center min-h-screen bg-gray-100  w-1/2  max-[600px]:w-full py-0 h-1/2">
      <Routes>
     
      <Route path='/forgetpassword' element={<Forgetpass/>} />
      <Route path='/' element={<Login/>} />
     
     </Routes>
    </div>

  </div>
}</Router>

  )
}

export default App
