import './App.css';
import Header from './Components/Header';
import Feature from './Components/Feature';
import About from './Components/About';
import aboutImage from './images/ThuongTV/presentation1.png'

function App() {
  return (
    <div className="App">
      <Header/>
      <Feature/>
      <About img={aboutImage} title='Register now' button='Get app'/>
    </div>
  );
}

export default App;
