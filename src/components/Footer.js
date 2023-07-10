import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
const Footer = () => {
  const style = {
    fontSize: "30px",
    marginRight: "20px",
  };

  return (
    <div className="footer">
      <div className="footer1">
        <div className="footer-icons">
          <FaFacebook style={style} />
          <FaTwitter style={style} />
          <FaInstagram style={style} />
        </div>
        <div className="footer-details">
          <ul className="footer-detail">
            <li>Privacy Policy</li>
            <li>Terms</li>
            <li>Pricing</li>
            <li>Do not sell or share my personal information</li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>
          This site is protected by reCAPTCHA and the Google Privac and Terms of
          Service apply.{" "}
        </p>
        <p>&copy; 2023 Uber Technologies Inc.</p>
      </div>
    </div>
  );
};

export default Footer;
