import React from "react";
import '../assets/css/card.css'

const Card = ({ title, desc, icon, type }) => {
  return (
    <div className={`CardBg ${type === 2 ? "cs_type_1" : ""}`}>
      <div className="CardStyle cs_style_1">

        {type !== 2 && (
          <div className="CardIcon">
            <img src={icon} alt="icon" width="40" height="40" />
          </div>
        )}

        <div className="CardContet">
          <h3 className="CardTitle">{title}</h3>
          <p className="CardDesc">{desc}</p>
        </div>

        {/* <a
          className="cs_text_btn cs_fs_14 text-uppercase cs_heading_color cs_bold"
          href="/about"
        >
          READ MORE →
        </a> */}

        {type === 2 && (
          <div className="CardIcon">
            <img src={icon} alt="icon" width="40" height="40" />
          </div>
        )}
      </div>
      {type !== 2 && (<div class="cs_card_shape">
        <svg width="305" height="145" viewBox="0 0 305 145" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M274.465 30.698L35.5518 41.3918L0 6.19539V120.27C0 133.924 11.1913 145 24.9875 145H280.012C293.809 145 305 133.924 305 120.27V0.478516L274.465 30.698Z" fill="currentColor"></path></svg>
      </div>
      )}

      {type === 2 && (
        <div class="cs_card_shape">
          <svg width="305" height="146" viewBox="0 0 305 146" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M274.465 115.014L35.5518 104.253L0 139.669V24.883C0 11.1442 11.1913 -0.000549316 24.9875 -0.000549316H280.012C293.809 -0.000549316 305 11.1442 305 24.883V145.422L274.465 115.014Z" fill="currentColor"></path></svg>
        </div>
      )}
    </div>
  );
};

export default Card;