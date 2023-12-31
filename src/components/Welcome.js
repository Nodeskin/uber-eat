const WelcomePage = () => {
  return (
    <div>
      {/* <FaSearchLocation/>  */}
      <section className="welcome-page">
        <div className="background-image"></div>

        <div className="first-header">
          <h1>Order food to your door</h1>
        </div>

        <div className="page1-inputs">
          <input
            className="address-input"
            placeholder="Enter delivery address"
            type="text"
          />
          <select className="delivery-input">
            <option> Deliver now</option>
            <option>Schedule for later</option>
          </select>
          <button className="page1-butt">Find Food</button>
        </div>

        <div className="page1-p">
          <p>
            <u>Sign in</u> for your recent addresses
          </p>
        </div>
      </section>
    </div>
  );
};

export default WelcomePage;
