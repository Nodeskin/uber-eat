import React from "react";


const ListOfCities = () => {

  const city1 = ["Aberdeen", "Belfast", "Birmingham", "Brighton and Sussex", "Cambridge and East Anglia", "Cardiff" ]
  const city2 = ["Edinburg", "Glasgow", "Hull", "Leeds", "Leicester", "London" ]
  const city3 = ["Manchester", "Merseyside", "North East, UK", "Nottingham", "Oxford, UK",]
  const city4 = ["Sheffield", "South coast, UK", "South West, UK", "Stoke"]
  return (
      <div  className = "cities-map">
       <ul className="city-list"> {city1.map((x) => <li> {x} </li>)} </ul>
       <ul className="city-list"> {city2.map((x) => <li> {x} </li>)} </ul>
       <ul className="city-list"> {city3.map((x) => <li> {x} </li>)} </ul>
       <ul className="city-list"> {city4.map((x) => <li> {x} </li>)} </ul>
      </div >

  );
};

export default ListOfCities;
