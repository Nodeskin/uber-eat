import applestore from '../assests/applestore.png'
import googleplay from '../assests/googleplay.png'

const Information = () => {
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
          <ul className='info-list-ul'>
                <li>Get help</li>
                <li>Add your resturant</li>
                <li>Sign up to deliver</li>
                <li>Create a business account</li>
                <li>Promotions</li>
            </ul>
            <ul className='info-list-ul'>
                <li>Resturants near me</li>
                <li>View all cities</li>
                <li>View all countries</li>
                <li>Pick-up near me </li>
                <li>About Uber Eats</li>
                <li>English</li>
            </ul>
      </div>
      </div>

      <div className="line"></div>

      </div>
  )
}

export default Information
