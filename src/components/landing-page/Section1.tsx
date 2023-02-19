import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Section1 = () => {
  return (
    <div className="section1">
      <h3 className="rubrik">Vad kan vi hjälpa dig med?</h3>
      <p className="text">
        Ibland så är det svårt att få ihop vardagspusslet med allt vad det
        innebär. Därför finns StädaFint. Vi erbjuder 3 olika städtjänster samt
        fönsterputs. Välj den som passar dig och din vardag bäst. Hoppas vi ses!
      </p>
      <div className="box-tjanster">
        <div className="tjanster">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              sx={{
                bgcolor: " #f5f4f2",
                fontSize: "7rem",
                // use summary background color
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.3rem",
                  padding: "1.2rem",
                  // use summary background color
                }}
              >
                BasicStädning
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: " #f5f4f2", // use summary background color
              }}
            >
              <Typography>
                <li>Dammsuger golv och lister.</li>
                <li>Dammsuger möbler och mattor.</li>
                <li>Fuktmoppar golv.</li>
                <li>Dammtorkar hyllor.</li>
                <li>Dammtorkar fria ytor.</li>
                <li>Putsa speglar.</li>
                <li>Tömmer papperskorgar.</li>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{
                bgcolor: " #f5f4f2", // use summary background color
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.3rem",
                  padding: "1.2rem", // use summary background color
                }}
              >
                TopStädning
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: " #f5f4f2", // use summary background color
              }}
            >
              <Typography>
                <li>Dammsuger golv och lister.</li>
                <li>Dammsuger möbler och mattor.</li>
                <li>Fuktmoppar golv.</li>
                <li>Dammtorkar hyllor.</li>
                <li>Dammtorkar fria ytor.</li>
                <li>Putsa speglar.</li>
                <li>Tömmer papperskorgar.</li>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        <div className="tjanster">
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{
                bgcolor: " #f5f4f2", // use summary background color
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.3rem",
                  padding: "1.2rem", // use summary background color
                }}
              >
                DiamantStädning
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: " #f5f4f2", // use summary background color
              }}
            >
              <Typography>
                <li>Dammsuger golv och lister.</li>
                <li>Dammsuger möbler och mattor.</li>
                <li>Fuktmoppar golv.</li>
                <li>Dammtorkar hyllor.</li>
                <li>Dammtorkar fria ytor.</li>
                <li>Putsa speglar.</li>
                <li>Tömmer papperskorgar.</li>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
              sx={{
                bgcolor: " #f5f4f2", // use summary background color
              }}
            >
              <Typography
                sx={{
                  fontSize: "1.3rem",
                  padding: "1.2rem", // use summary background color
                }}
              >
                FönsterPuts
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                bgcolor: " #f5f4f2", // use summary background color
              }}
            >
              <Typography>
                <li>Dammsuger golv och lister.</li>
                <li>Dammsuger möbler och mattor.</li>
                <li>Fuktmoppar golv.</li>
                <li>Dammtorkar hyllor.</li>
                <li>Dammtorkar fria ytor.</li>
                <li>Putsa speglar.</li>
                <li>Tömmer papperskorgar.</li>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>

      {/* <div className="lists">
        <div className="basic">
          <ul>
            <h4 className="underrubrik">Basic Städning</h4>
            <li>Dammsuger golv och lister.</li>
            <li>Dammsugen möbler och mattor</li>
            <li>Fuktmoppar golv</li>
            <li>Dammtorkar hyllor</li>
            <li>Dammtorkar fria ytor</li>
            <li>Putsa speglar</li>
            <li>Tömmer papperskorgar</li>
          </ul>
        </div>
        <div className="top">
          <ul>
            <h4 className="underrubrik">Topp städning</h4>
            <li>Dammsuger golv och lister.</li>
            <li>Dammsugen möbler och mattor</li>
            <li>Fuktmoppar golv</li>
            <li>Dammtorkar fönsterbrädor</li>
            <li>Dammtorkar fria ytor</li>
            <li>Putsa speglar</li>
            <li>Bäddar sängar</li>
            <li>Tömmer papperskorgar</li>
          </ul>
        </div>
        <div className="diamond">
          <ul>
            <h4 className="underrubrik">Diamant Städning</h4>
            <li>Dammsuger golv och lister.</li>
            <li>Dammsugen möbler och mattor</li>
            <li>Fuktmoppar golv</li>
            <li>Dammtorkar alla fria ytor</li>
            <li>Rengöring av synliga fläckar</li>
            <li>Rengöring av ugn/micro</li>
            <li>rengöring av skåp</li>
            <li>Källsortera och slänger</li>
          </ul>
        </div>
        <div className="window">
          <ul>
            <h4 className="underrubrik">Fönsterputs</h4>
            <li>Vi putsar alla typer av fönster</li>
            <li>Vi tar med fönsterputsutrustning</li>
            <li>Tvättar bågar </li>
            <li>Rengöring av karmar</li>
            <li>Putsar takfönster</li>
            <li>Vid behov medtags stege</li>
            <li>Tvättning av gardiner</li>
          </ul>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Section1;
