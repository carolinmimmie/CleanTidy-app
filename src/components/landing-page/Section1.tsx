import React from "react";

const Section1 = () => {
  return (
    <div className="section1">
      <h3 className = "section1-rubrik">Vad vill du ha hjälp med?</h3>
      <p className="section1-text">
        Ibland så är det svårt att få ihop vardagspusslet med allt vad det
        innebär. Därför finns StädaFint. Vi erbjuder 3 olika städtjänster samt
        fönsterputs. Välj den som passar dig och din vardag bäst. Hoppas vi ses!
      </p>
      <div className="lists">
        <div className="basic">
          <ul>
            <h4>Basic Städning</h4>
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
            <h4>Topp städning</h4>
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
            <h4>Diamant Städning</h4>
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
            <h4>Fönsterputs</h4>
            <li>Vi putsar alla typer av fönster</li>
            <li>Vi tar med fönsterputsutrustning</li>
            <li>Tvättar bågar </li>
            <li>Rengöring av karmar</li>
            <li>Putsar takfönster</li>
            <li>Vid behov medtags stege</li>
            <li>Tvättning av gardiner</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section1;
