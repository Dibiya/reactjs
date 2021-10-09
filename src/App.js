import logo from './logo.svg';
import './App.css';
import Footer from './components/Footer'
import Header from './components/Header'
import StarfieldAnimation from 'react-starfield-animation'
import About from './components/About'
import Mycontent from './components/Mycontent'


function App() {
  return (
    <div className="App bg-black" >

<Header></Header>

      

      <About></About>

      <Mycontent></Mycontent>

      <Footer></Footer>
      

    </div>
  );
}

export default App;
