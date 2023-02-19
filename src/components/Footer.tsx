import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <div className="footer">
      <div className="text-footer">
        <h6>Adress</h6>
        <a href="# ">Bergsrådsvägen 10b</a>
        <a href="# ">12846 Hägersten</a>
        <a href="# ">Stockholm</a>
      </div>
      <div className="bilder-footer">
        <InstagramIcon />
        <FacebookIcon />
        <LinkedInIcon />
      </div>
      <div className="text-footer">
        <h6>Kontakt</h6>
        <a href="# ">info@stadafint.se</a>
        <a href="# ">StädaFint AB</a>
        <a href="# ">org-nr: 557123-8618</a>
      </div>
    </div>
  );
};

export default Footer;
