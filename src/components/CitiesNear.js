import Map from "../assests/map.png";
const CitiesNear = () => {
  return (
      <div className="map">
        <div className="cities-heading">
          <h1>cities near me</h1>
          <a className="view-link" href="view-link">
            View all 500+ cities
          </a>
        </div>
        <img style={{ width: "100%" }} src={Map} alt="map" />
      </div>
  );
};

export default CitiesNear;
