import React from "react";

const Section2 = () => {
  return (
    <div className="section2">
      <h3 className="rubrik">Varför välja städaFint?</h3>
      <div className="cirklarna">
        <div className="cirkel-box">
          <div className="cirkel">
            <img
              className="cirkel-img"
              src="https://img.icons8.com/wired/344/handshake.png"
              alt="icon-bild händer som tar i hand"
            />
          </div>
          <h4 className="underrubrik">Registrera dig</h4>
          <p className="cirkel-text">
            Genom att registrera dig hos oss kan du smidigt boka dina tjänster.
          </p>
        </div>

        <div className="cirkel-box">
          <div className="cirkel">
            <img
              className="cirkel-img"
              src="https://img.icons8.com/windows/512/login-rounded-down.png"
              alt="Icon-bild sörsäkring"
            />
          </div>
          <h4 className="underrubrik">Logga in</h4>
          <p className="cirkel-text">
            Logga in och få tillgång till personliga erbjudanden.
          </p>
        </div>

        <div className="cirkel-box">
          <div className="cirkel">
            <img
              className="cirkel-img"
              src="https://img.icons8.com/wired/344/home.png"
              alt="icon-bild på ett hem"
            />
          </div>
          <h4 className="underrubrik">Boka</h4>
          <p className="cirkel-text">
            Under mina sidor bokar/avbokar du smidigt en ny städning hos oss.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section2;
