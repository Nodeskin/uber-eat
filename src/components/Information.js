import applestore from "../assests/apple.svg";
import googleplay from "../assests/googleplay.png";

const Information = () => {
  const info1 = ["Get help", "Add your resturant", "Sign up to deliver", "Create a business account", "Promotions"]
  const info2 = ["Resturants near me", "View all cities", "View all countries", "Pick-up near me", "About Uber Eats", "English"]

  return (
    <div>
      <div className="line"></div>

      <div className="infos">
        <div className="info-store">
          <h1>
            Uber <span className="eat-style">Eats</span>
          </h1>
          <div className="app-store">
            <img src={applestore} alt="" />
            <img src={googleplay} alt="" />
          </div>
        </div>

        <div className="info-lists">
          <ul className="info-list-ul"> {info1.map((x)=> <li>{x}</li>)} </ul>
          <ul className="info-list-ul"> {info2.map((x)=> <li>{x}</li>)} </ul>   
        </div>

      </div>

      <div className="line2"></div>
    </div>
  );
};

export default Information;
