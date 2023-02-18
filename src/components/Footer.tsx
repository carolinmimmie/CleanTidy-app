import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Link from "@mui/material/Link";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {/* <div className="text-footer">
          <h3>Adress</h3>
          <a href="# ">Bergsrådsvägen 10b</a>
          <a href="# ">12846 Hägersten</a>
          <a href="# ">Stockholm</a>{" "}
        </div> */}
        <BottomNavigationAction label="Instagram" icon={<InstagramIcon />} />
        <BottomNavigationAction label="Twitter" icon={<TwitterIcon />} />
        <BottomNavigationAction label="Facebook" icon={<FacebookIcon />} />
      </BottomNavigation>
      {/* <div className="text-footer">
        <h3>Adress</h3>
        <a href="# ">Bergsrådsvägen 10b</a>
        <a href="# ">12846 Hägersten</a>
        <a href="# ">Stockholm</a>{" "}
      </div> */}
    </Box>
  );
};
// <div className="footer">
//   <div className="text-footer">
//     <h6>Adress</h6>
//     <a href="# ">Bergsrådsvägen 10b</a>
//     <a href="# ">12846 Hägersten</a>
//     <a href="# ">Stockholm</a>
//   </div>
//   <div className="bilder-footer">
//     <img
//       src="https://cdn-icons-png.flaticon.com/128/739/739193.png"
//       alt="instagram-icon"
//     />
//     <img
//       src="https://cdn-icons-png.flaticon.com/128/3128/3128212.png"
//       alt="twitter-icon"
//     />
//     <img
//       src="https://cdn-icons-png.flaticon.com/128/2168/2168281.png"
//       alt="facebook-icon"
//     />
//   </div>
//   <div className="text-footer">
//     <h6>Kontakt</h6>
//     <a href="# ">info@stadafint.se</a>
//     <a href="# ">StädaFint AB</a>
//     <a href="# ">org-nr: 557123-8618</a>
//   </div>
// </div>

export default Footer;
