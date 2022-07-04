import logo from './logo.svg';
import './App.css';

import FirstComponent from './components/FirstComponent';
import ImgComponent from './components/ImgComponent';
import Hooks from './components/Hooks'


function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <FirstComponent />
      <ImgComponent />
      <Hooks />
   
    </div>
  );
}

export default App;
