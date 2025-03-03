// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react'
import {Route,Routes,Router} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Hom from './Components/Hom'
import Aboutus from './Components/Aboutus'
import Contactus from './Components/Contactus'
import Signup from './Components/Signup'
 import Login from './Components/Login'
import Leaveinfo from './Components/Leaveinfo'
// import Auth from './Components/Auth'
//  import Profile from './Components/Profile';

 //import { AuthProvider } from './Components/Auth';
import ReqAuth from './Components/ReqAuth';

function App() {
  return (
     //<AuthProvider>
    <div className='App'>
       <Routes>
       <Route path='/' element={<Navbar/>}/>
       <Route path='/hom' element={<Hom/>}/>
       <Route path='/aboutus' element={<Aboutus/>}/>
       <Route path='/contactus' element={<Contactus/>}/>
       <Route path='/signup' element={<Signup/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/leaveinfo' element={<Leaveinfo/>}/>
       {/* <Route path='/auth' element={<Auth/>}/>
       <Route path='/profile' element={
            <ReqAuth>
              <Profile/>
               </ReqAuth>}/> */}
       
       </Routes>
    </div>
     //</AuthProvider>
  )
}
export default App
// import React from 'react'
// import {Route} from 'react-router-dom'
// import Leaveinfo from './Components/Leaveinfo'
//  function App() {
//   return (
//     <div className='App'>
//       <Route path='/leaveinfo' element={<Leaveinfo/>}/>
//     </div>
//   )
// }
// export default App