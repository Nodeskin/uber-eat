import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  const style = {
    fontSize: "17px",
    marginRight: "20px",
  };

  const footerList = ["Privacy Policy", "Terms", "Pricing", "Do not sell or share my personal information"]
  return (
    <div className="footer">
      <div className="footer1">
        <div className="footer-icons">
          <FaFacebook style={style} />
          <FaTwitter style={style} />
          <FaInstagram style={style} />
        </div>

        <ul className="footer-ul"> {footerList.map((x)=> <li style={{marginRight: "40px"}}> {x} </li>)} </ul>  
      </div>

      <div className="copyright">
        <p>
          This site is protected by reCAPTCHA and the Google Privac and Terms of
          Service apply.
        </p>
        <p>&copy; 2023 Uber Technologies Inc.</p>
      </div>
    </div>
  );
};

export default Footer;
