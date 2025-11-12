import "./footer.css";
import Linkdin from "/pIcons/linkedin-ico.png";
import Github from "/pIcons/github-ico.png";
import Instagram from "/pIcons/insta-ico.png";
import Mail from "/pIcons/email.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_upper">
          <div className="footer_row1">
            <h2 className="footer_heading">
              <span>Social</span>
            </h2>
            <div className="footer_social_cont">
              <a href="https://www.linkedin.com/in/sagar-kumar-yadav/">
                <img className="main_footer_icon" src={Linkdin} alt="icon" />
              </a>
              <a href="https://github.com/sagar-kumar-yadav">
                <img className="main_footer_icon" src={Github} alt="icon" />
              </a>
              <a href="https://www.instagram.com/theproffnextdoor/">
                <img className="main_footer_icon" src={Instagram} alt="icon" />
              </a>
              <a href="mailto:sagarkryadav31@gmail.com">
                <img className="main_footer_icon" src={Mail} alt="icon" />
              </a>
            </div>
          </div>
          <div className="footer_row2">
            <h4 className="footer_heading1">Sagar Kumar Yadav</h4>
            <p className="footer_short_desc">
              <span className=" ">sagarkryadav31@gmail.com</span>
              <span>+91 8578858827</span>
              <span>Pune, Maharashtra</span>
            </p>
          </div>
        </div>

        {/* footer lower */}
        <div className="footer_lower">
          &copy; Copyright 2023. Made by <a href="#">Sagar Kumar Yadav</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
