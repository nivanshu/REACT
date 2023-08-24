import React from "react";
import './App.css';
import Nav_Bar from './component/Nav_Bar';
// import Carousel from "./component/Home_Carousel";
import ImgCard from "./component/ImgCard";
import data from "./component/data";
import Home_Carousel from "./component/Home_Carousel";


function App() {
  return (
    <div>
    <Nav_Bar/>
     <Home_Carousel/>
    <div className="image">
      {
        data.map((item)=>{
       return <ImgCard title={item.title} imgUrl={item.imgUrl} desc={item.desc}/>
        })
      }
       
    </div>
  </div>

 
  
  

  );
}

export default App;