import React from "react";
import Feed from "../assests/laptopgirl.png";
import Kitchen from "../assests/kitchen.png";
import Bike from "../assests/bikegirl.png";

const Delivery = () => {
  return (
    <div>
      <section id="delivery-methods">
        <div className="method">
          <img src={Feed} alt="feed" />
          <h2>Feed your employees</h2>
          <a href="feed">Create a business account</a>
        </div>
        <div className="method">
          <img src={Kitchen} alt="kitchen" />
          <h2>Your resturant - delivered</h2>
          <a href="kitchen">Add your resturant</a>
        </div>
        <div className="method">
          <img src={Bike} alt="bike" />
          <h2>Deliver with Uber Eat</h2>
          <a href="bike">Sign up to deliver</a>
        </div>
      </section>
    </div>
  );
};

export default Delivery;
