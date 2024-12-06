import React from "react";
import slide1 from "../assets/slide1.webp";
import Card from "./Card";
import {data} from '../data'

const Home = () => {
  return (
    <div>
      <div className="p-3 flex flex-col items-center">
      <img src={slide1} alt="" className="w-full object-contain pt-6" />
      <h1 className="text-3xl">
        Your Personal Assistant on a “pay as you go” basis
      </h1>
      <p>
        A professional Executive Personal Assistant who demonstrates excellent
        organizational ability to ensure that goals and targets are met. Noted
        for her flair and vision when problem solving – always relishes a
        challenge. Possesses excellent communication skills, confident when
        dealing with people of all cultures particularly Italian due to her
        having lived in Milan.
      </p>
    </div>
    <div className="flex px-4 m-3">
      {
        data.map((item,index)=><Card image={item.img} title={item.title} description={item.desc} path={item.path} key={index}/>)
      }
      
    </div>
    
    </div>
    
  );
};

export default Home;
