import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import { ListItem } from "@mui/material";

const Section1 = () => {
  const basic = [
    { id: 1, name: "Dammsuger golv och lister." },
    { id: 2, name: "Dammsuger möbler och mattor." },
    { id: 3, name: "Fuktmoppar golv." },
    { id: 4, name: "Dammtorkar hyllor." },
    { id: 5, name: "Dammtorkar fria ytor." },
    { id: 6, name: "Puta speglas." },
    { id: 7, name: "Tömmer papperskorgar." },
  ];
  const top = [
    { id: 8, name: "Dammsuger golv och lister." },
    { id: 9, name: "Dammsuger möbler och mattor." },
    { id: 10, name: "Fuktmoppar golv." },
    { id: 11, name: "Dammtorkar fönsterbrädor." },
    { id: 12, name: "Dammtorkar fria ytor." },
    { id: 13, name: "Puta speglas." },
    { id: 14, name: "Bäddar sängar." },
    { id: 15, name: "Tömmer papperskorgar." },
  ];
  const diamond = [
    { id: 16, name: "Dammsuger golv och lister." },
    { id: 17, name: "Dammsuger möbler och mattor." },
    { id: 18, name: "Fuktmoppar golv." },
    { id: 19, name: "Dammtorkar hyllor." },
    { id: 20, name: "Dammtorkar alla fria ytor." },
    { id: 21, name: "Rengöring av synliga fläckar." },
    { id: 22, name: "Rengöring av ugn och micro." },
    { id: 23, name: "Rengöring av skåp." },
    { id: 24, name: "Källsorta och slänger." },
  ];

  const window = [
    { id: 25, name: "Dammsuger yta runt fönstret." },
    { id: 26, name: "Vi putsar alla typer av fönster." },
    { id: 27, name: "Vi tar med fönsterputsutrustning." },
    { id: 28, name: "Tvättar bågar." },
    { id: 29, name: "Tvättar karmar." },
    { id: 30, name: "Putsa takfönster." },
    { id: 31, name: "Vid behov medtags stege." },
    { id: 32, name: "Tvätting av gardiner." },
  ];

  return (
    <div className="section1">
      <h3 className="rubrik">Vad kan vi hjälpa dig med?</h3>
      <p className="text">
        Ibland så är det svårt att få ihop vardagspusslet med allt vad det
        innebär. Därför finns StädaFint. Vi erbjuder 3 olika städtjänster samt
        fönsterputs. Välj den som passar dig och din vardag bäst. Hoppas vi ses!
      </p>
      <Box
        sx={{
          width: "80%",
          margin: "auto",
          display: "flex",
          flexDirection: "row",
          gap: "1rem",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            gap: "1rem",
            flexDirection: "column",
          }}
        >
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
                {basic.map((x) => (
                  <ListItem key={x.id}>{x.name}</ListItem>
                ))}
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
                {top.map((x) => (
                  <ListItem key={x.id}>{x.name}</ListItem>
                ))}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            gap: "1rem",
            flexDirection: "column",
          }}
        >
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
                {diamond.map((x) => (
                  <ListItem key={x.id}>{x.name}</ListItem>
                ))}
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
                {window.map((x) => (
                  <ListItem key={x.id}>{x.name}</ListItem>
                ))}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </div>
  );
};

export default Section1;
