import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Mycontract from './Components/Contract/Mycontract'


function App() {
  return (
    <div className="App">
      <Header></Header>
     
      <Routes>
        
        <Route path='home' element={<Home></Home>} ></Route>
        <Route path='about' element={<About></About>} ></Route>
        <Route path='contract' element={<Mycontract></Mycontract>} ></Route>
        <Route path='/' element={<Home></Home>} ></Route>
      </Routes>
      <Footer></Footer>
     
      
    </div>
  );
}

export default App;
