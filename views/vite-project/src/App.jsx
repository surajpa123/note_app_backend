import './App.css'
import Body from './components/Body'
import LoginForm from "./components/LoginForm"
import SignupForm from "./components/SignupForm"
import Notes from "./components/Notes"
import DashBoard from './components/DashBoard'


import { Route, Routes } from 'react-router-dom';


function App() {

  return (
    <>

    <Routes>
<Route  path='/login' element = {<LoginForm/>} />
<Route  path='/signup' element = {<SignupForm/>} />

<Route path='/' element = {<Notes/>}/>



<Route path='/dashboard' element = {<DashBoard/>}/>


    </Routes>
    </>
  )
}

export default App


