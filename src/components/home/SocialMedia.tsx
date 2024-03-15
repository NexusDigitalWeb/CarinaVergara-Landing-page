import React from "react";
import { Link } from "react-router-dom";

const SocialMedia = (): React.ReactElement => {
  return (
    <div className="hidden lg:flex items-center gap-[20px] absolute left-15 -bottom-0 ">
      <Link to="https://www.instagram.com/coach_deportiva/" target="_blank">
        <img src="/SocialInstagram.svg" alt="instagram-icon" />
      </Link>
      <Link to="https://www.facebook.com/vikinga2014coach" target="_blank">
        <img src="/facebookicon.svg" alt="facebook-icon" />
      </Link>
      <Link to="/">
        <img src="/whatsappicon.svg" alt="whatsapp-icon" />
      </Link>
    </div>
  );
};

export default SocialMedia;
