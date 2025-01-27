import React from "react";
import "./contactcomponent.css";

export const ContactComponent = () => {
  return (
    <div id="kontakty" className="ipsum">
      <h1>Kontakty</h1>
      
      <div className="contact-container">
        <div className="contact-item">
          <div className="contact-icon">📞</div>
          <div className="contact-info">
            <h3>Telefon</h3>
            <a href="tel:+420777056080" className="contact-link">
              +420 777 056 080
            </a>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">✉️</div>
          <div className="contact-info">
            <h3>Email</h3>
            <a href="mailto:596131042@iol.cz" className="contact-link">
              596131042@iol.cz
            </a>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">📍</div>
          <div className="contact-info">
            <h3>Adresa</h3>
            <p>Větrov 464/22</p>
            <p>725 29 Ostrava - Petřkovice</p>
          </div>
        </div>

        <div className="contact-item">
          <div className="contact-icon">🏢</div>
          <div className="contact-info">
            <h3>Firemní údaje</h3>
            <p>IČ: 10630597</p>
            <p>DIČ: CZ5402192664</p>
          </div>
        </div>
      </div>

      <div className="map-container">
        <iframe
          width="100%"
          height="400"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://www.openstreetmap.org/export/embed.html?bbox=18.238113,49.861377,18.248154,49.865377&layer=mapnik&marker=49.863377018220554,18.243133723691304"
          className="map-frame"
          title="Location map"
        ></iframe>
      </div>
    </div>
  );
};
