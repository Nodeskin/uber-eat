import React from "react";

const CountryList = () => {
  return (
    <div className="country-list">
      <div className="country-header">
        <h1>Countries with Uber Eats</h1>
        <a className="view-link" href="view-link">
          View all countries
        </a>
      </div>

      <section className="country">
        <ul className="country-ul">
          <li>Australia</li>
          <li>Belguim</li>
          <li>Canada</li>
          <li>Chile</li>
          <li>Costa Rica</li>
          <li>Dominican Republic</li>
          <li>Ecuador</li>
          <li>El Salvador</li>
        </ul>
        <ul className="country-ul">
          <li>France</li>
          <li>Germany</li>
          <li>Guatemala</li>
          <li>Ireland</li>
          <li>Italy</li>
          <li>Japan</li>
          <li>Kenya</li>
          <li>Mexico</li>
        </ul>
        <ul className="country-ul">
          <li>Netherlands</li>
          <li>New Zealand</li>
          <li>Panama</li>
          <li>Poland</li>
          <li>Portugal</li>
          <li>South Africa</li>
          <li>Spain</li>
          <li>Sri Lanka</li>
        </ul>
        <ul className="country-ul">
          <li>Sweden</li>
          <li>Switzerland</li>
          <li>Taiwan </li>
          <li>United Kingdom</li>
          <li>United States</li>
        </ul>
      </section>
    </div>
  );
};

export default CountryList;
