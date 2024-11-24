// import logo from './logo.svg';
// import {Routes,Route} from "react-router-dom"
import './App.css';
// import FlipCard from './components/FlipCard';
import React from 'react';
// import ImageSlider from './components/ImageSlider';
// import { SliderData } from './components/SliderData';
import Login from './components/Login';
// import Film from "./components/Film"
// import Test from './components/Test';
// import Practice from './components/Practice';



function App() {
  return (
    <div className="App">
      {/* <Practice/> */}
    
      {/* <React.Fragment>
      <FlipCard/>

      </React.Fragment> */}
      {/* <Film slides={SliderData}/> */}
      {/* <Test/> */}
      {/* <ImageSlider slides={SliderData}/> */}
     <Login/>
     {/* <Routes>
     <Route path= "Film" element={<Film/>}/>

     </Routes> */}
    </div>
  );
}

export default App;
