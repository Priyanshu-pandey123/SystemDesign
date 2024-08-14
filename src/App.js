
import Shimmer from './components/Shimmer';
import Meme from './components/Meme';
import Body from './components/Body';
import Profile from './components/Profile';
import Login from './components/Login';
import About from './components/About';
import ProtectedRoute from './components/ProtectedRoute';
import { BrowserRouter,Route,Routes ,Link} from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [lang,setLang]=useState("en");
  return (
    <div className="App">
     <header  className='bg-gray-200 w-full h-40 flex border-2  border-black '>
    <nav className='text=lg items-center flex  m-2 justify-center '>
         <a className='m-2 text-lg p-2'  href='/'>Home</a>
        <a className='m-2 text-lg p-2' href='/profile'>profile</a>
        <a  className='m-2 text-lg p-2' href='/login'>Login</a>
        <a  className='m-2 text-lg p-2' href='/about'>About</a>

         
    </nav>
    <select value={lang} onChange={(e)=>setLang(e.target.value)} className='w-20 h-16 items-center align-middle mt-11 rounded-lg'>
      <option value="en">English</option>
      <option value="hi">Hindi</option>
      <option value="sp">Spanish</option>
      <option value="ru">Russian</option>
    </select>
  </header>


  <BrowserRouter>
  <Routes>
    
  <Route  path="/" element={<Body/>}></Route>
  <Route  element={<ProtectedRoute/>}>
   <Route path='/about' element={<About  lang={lang}/>}></Route>
   <Route  path="/profile" element={<Profile/>}></Route>
  </Route>
  <Route  path="/login" element={<Login/>}></Route>
  </Routes>
  
  </BrowserRouter>
  
    </div>
  );
}

export default App;
