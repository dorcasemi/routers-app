import Header from './Components/Header';
import Home from './Components/Routers/Home';
import About from './Components/Routers/About';
import Contact from './Components/Routers/Contact.js';
import Hero from './Components/Hero';
import Mui from './Components/Mui.js'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
    
    return ( 
        <div>  
     <Router>

     <Header/>

         <Routes>
           <Route path='/' element= {<Home />}></Route>
           <Route path='/about' element={<About />}></Route>
           <Route path='/contact' element={<Contact />}></Route>
         </Routes>
     </Router>
    
      {/* <Mui/> */}
     {/* <Hero/> */}

    </div>

    );
}

export default App;