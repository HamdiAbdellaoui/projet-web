import React, { Fragment } from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Footer = (props) => {
  const logoSize = 50;
  return (
    <Fragment>
      <footer
      
        style={{ background: "#303031", color: "#87898A" }}
        className="z-10 py-6 px-4 md:px-12 text-center"
      >
         <div className="social-media">
         <a href="https://api.whatsapp.com/send?phone=123456789" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faWhatsapp}
            style={{ fontSize: `${logoSize}px`, marginRight: "10px" }}
          />
        </a>
         <a href="https://www.facebook.com/your-facebook-page" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faFacebook}
            style={{ fontSize: `${logoSize}px`, marginRight: "10px" }}
          />
        </a>
         <a href="https://www.instagram.com/your-instagram-page" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ fontSize: `${logoSize}px`, marginRight: "10px" }}
          />
        </a>
       
      </div>
          <div><b>Informations :</b> </div>
        <div>📍 HyperDev Express</div>
        <div>Rue 20 Mars</div>
        <div>4000 Jawhara SOUSSE</div>
        <div>Tunisie</div>
        <div>
        📞 73367253 / 58123691 / 58388892 / 58784693
        </div>
        <div>
        ☎️ 73123456
        </div>
        <div>
        📩 info@hyperdev_express.com
        </div>
        <div>{moment().format("YYYY")}</div>
      </footer>
    </Fragment>
  );
};

export default Footer;