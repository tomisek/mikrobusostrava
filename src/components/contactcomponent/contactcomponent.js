import React from "react";
import "./contactcomponent.css";
import { Map, MarkerLayer, Marker, MouseControl } from "react-mapycz";

export const ContactComponent = () => {
  return (
    <div id="kontakty" className="ipsum">
      <h1>Kontakty</h1>
      <p>
        <b>Tel.</b>
        <a href="Tel: 00420777056080"> +420 777 056 080</a>
      </p>
      <p>
        <b>Email:</b>
        <a href="mailto: 596131042@iol.cz"> 596131042@iol.cz</a>
      </p>
      <p>Větrov 464/22</p>
      <p>725 29 Ostrava - Petřkovice</p>
      <p>IČ:10630597 DIČ: CZ5402192664</p>
      <iframe
        width="100%"
        height="400"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://www.openstreetmap.org/export/embed.html?bbox=18.238113,49.861377,18.248154,49.865377&layer=mapnik&marker=49.863377018220554,18.243133723691304"
        style={{ border: '1px solid #ccc', borderRadius: '8px' }}
      ></iframe>
    </div>
  );
};
