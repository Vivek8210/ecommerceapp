import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';

import Footer from './Footer/Footer';
import AllRoute from './MainRouters/AllRoute';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <AllRoute/>
   
    
     <Footer/>
    </div>
  );
}

export default App;
