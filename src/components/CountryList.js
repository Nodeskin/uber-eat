import React from "react";

const CountryList = () => {
  const country1 = ["Australia", "Belguim", "Canada", "Chile", "Costa Rica", "Dominican Republic", "Ecuador", "El Salvador"]
  const country2 = ["France", "Germany", "Guatemala", "Ireland", "Italy", "Japan", "Kenya", "Mexico" ]
  const country3 = ["Netherlands", "New Zealand", "Panama", "Poland", "South Africa", "Spain", "Sri Lanka"]
  const country4 = ["Sweden", "Switzerland", "Taiwan", "United Kingdom", "United States"]

  return (
    <div className="country-list">

      <div className="country-header">
        <h1> Countries with Uber Eats </h1>
        <a className="view-link" href="view-link">
          View all countries
        </a>
      </div>

      <div className="country">
        <ul className="country-li"> {country1.map((x)=> <li> {x} </li>)} </ul>
        <ul className="country-li"> {country2.map((x)=> <li> {x} </li>)} </ul>
        <ul className="country-li"> {country3.map((x)=> <li> {x} </li>)} </ul>
        <ul className="country-li"> {country4.map((x)=> <li> {x} </li>)} </ul>
    
      </div>
    </div>
  );
};

export default CountryList;
