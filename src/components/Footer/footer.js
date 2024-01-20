import React from "react";
import "./footer.css"; // Make sure the CSS file is named Footer.css and is in the same directory
import FooterImg from "../../assets/footer/team.jpg";
import GmailIcon from "../../assets/gmail.png";
import ResumeIcon from "../../assets/footer/resume.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="footer-text-container ">
          <h2>Let's Build Something Together!</h2>
          <p>
            I'm all about delivering high quality results and enhancing team
            dynamics with my expertise. If you're looking for a dedicated and
            skilled engineer to help move projects forward,{" "}
            <span className="bold-white">let's</span>{" "}
            <span className="portfolio-footer-yellow">talk.</span>
          </p>
        </div>
        <div className="footer-links-container">
          <div className="icon-link-wrapper">
            <img src={GmailIcon} alt="mail" className="footer-icon" />
            <a href="https://m.me/YourMessengerLink">
              rasmus.henriksen@live.dk
            </a>
          </div>
          <div className="icon-link-wrapper">
            <img src={ResumeIcon} alt="mail" className="footer-icon" />
            <a href="https://m.me/YourMessengerLink">Download my resume</a>
          </div>
        </div>
      </div>

      <div className="footer-right">
        <img src={FooterImg} alt="laptop" className="team-work-img" />
      </div>
    </footer>
  );
};

export default Footer;
