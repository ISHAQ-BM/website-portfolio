import './App.css'
import Home from './Home';
import NavBar from './components/navbar/Navbar'
import {Routes,Route } from 'react-router-dom';


function App() {

  return (
    <>
      <NavBar />
         <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div>404 Not Found</div>}></Route>
         </Routes>
    </>
  )
}

export default App
