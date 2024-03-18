import React from "react";
import WhatsappIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const SocialMedia = (): React.ReactElement => {
  return (
    <div className="hidden lg:flex items-center gap-[20px]">
      <a href="https://www.instagram.com/coach_deportiva/" target="_blank">
        <InstagramIcon sx={{color: '#220953'}}/>
      </a>
      <a href="https://www.facebook.com/vikinga2014coach" target="_blank">
        <FacebookIcon sx={{color: '#220953'}}/>
      </a>
      <a href="/">
        <WhatsappIcon sx={{color: '#220953'}}/>
      </a>
    </div>
  );
};

export default SocialMedia;
