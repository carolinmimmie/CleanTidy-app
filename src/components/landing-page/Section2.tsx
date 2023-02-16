import React from "react";

const Section2 = () => {
  return (
    <div className="section2">
      <h3 className = "section2-rubrik">Varför välja städaFint?</h3>
      <div className="cirklarna">
        <div className="cirkel1">
          <div className="cirkel">
            <img
              className="cirkel-img"
              src="https://img.icons8.com/wired/344/handshake.png"
              alt="icon-bild händer som tar i hand"
            />
          </div>
          <h4 className="section2-underrubrik">Registrera dig</h4>
          <p className="section2-text">
            Genom att registrera dig hos oss kan du smidigt boka dina tjänster.
          </p>
        </div>

        <div className="cirkel2">
          <div className="cirkel">
            <img
              className="cirkel-img"
              src="https://img.icons8.com/windows/512/login-rounded-down.png"
              alt="Icon-bild sörsäkring"
            />
          </div>
          <h4 className="section2-underrubrik">Logga in</h4>
          <p className="section2-text">
            Logga in och få tillgång till personliga erbjudanden.
          </p>
        </div>

        <div className="cirkel3">
          <div className="cirkel">
            <img
              className="cirkel-img"
              src="https://img.icons8.com/wired/344/home.png"
              alt="icon-bild på ett hem"
            />
          </div>
          <h4 className="section2-underrubrik">Boka</h4>
          <p className="section2-text">
            Under mina sidor bokar/avbokar du smidigt en ny städning hos oss.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
