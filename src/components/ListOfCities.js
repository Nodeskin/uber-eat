import React from "react";

const ListOfCities = () => {
  return (
    <div>
      <section className="cities">
        <ul className="cities-ul">
          <li>Aberdeen</li>
          <li>Belfast</li>
          <li>Birmingham</li>
          <li>Brighton and Sussex</li>
          <li>Cambridge and East Anglia</li>
          <li>Cardiff</li>
        </ul>
        <ul className="cities-ul">
          <li>Edinburg</li>
          <li>Glasgow</li>
          <li>Hull</li>
          <li>Leeds</li>
          <li>Leicester</li>
          <li>London</li>
        </ul>
        <ul className="cities-ul">
          <li>Manchester</li>
          <li>Merseyside</li>
          <li>North East, UK</li>
          <li>Northampton and Milton Keynes</li>
          <li>Nottingham</li>
          <li>Oxford, UK</li>
        </ul>
        <ul className="cities-ul">
          <li>Sheffield</li>
          <li>South coast, UK</li>
          <li>South West, UK</li>
          <li>Stoke</li>
        </ul>
      </section>
    </div>
  );
};

export default ListOfCities;
