import * as React from "react";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();
const Footer = () => {
  return (
    <Box
      sx={{
        typography: "",
        "& > :not(style) ": {
          ml: 2,
          color: "black",
          textDecoration:"none"
        },
      }}
      onClick={preventDefault}
    >
      <Link href="#">Bergsrådsvägen 10b</Link>
      <Link href="#">12846 Hägersten</Link>
      <Link href="#">Stockholm</Link>

      <TwitterIcon />
      <InstagramIcon />
      <FacebookIcon />

      <Link href="#">info@stadafint.se</Link>
      <Link href="#">StädaFint AB</Link>
      <Link href="#">org-nr: 557123-8618</Link>
    </Box>
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
  );
};
export default Footer;
