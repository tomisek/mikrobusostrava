import React from "react";
import './contentcomponent.css';

export const ContentComponent = () => {
    return (
        <div id="content" className="offer">
            <h1>Nabízíme</h1>
            
            <div className="offer-container">
                <div className="offer-intro">
                    <h2>Kvalitní autodoprava na Severní Moravě</h2>
                    <p className="intro-text">
                        Hledáte spolehlivého <b>autodopravce</b> na Severní Moravě? 
                        Jsme tu pro vás s profesionálními službami přepravy osob.
                    </p>
                </div>

                <div className="offer-grid">
                    <div className="offer-item">
                        <div className="offer-icon">🚐</div>
                        <h3>Moderní vozový park</h3>
                        <p>
                            Mikrobus Mercedes VITO (rok výroby 2013) s kapacitou až 8 osob
                        </p>
                    </div>

                    <div className="offer-item">
                        <div className="offer-icon">🌍</div>
                        <h3>Široký dosah</h3>
                        <p>
                            Přeprava v rámci celé České republiky
                            
                        </p>
                    </div>

                    <div className="offer-item">
                        <div className="offer-icon">🛡️</div>
                        <h3>Bezpečnost především</h3>
                        <p>
                            Zkušení profesionální řidiči a pravidelné technické kontroly vozidel
                        </p>
                    </div>

                    <div className="offer-item">
                        <div className="offer-icon">👥</div>
                        <h3>Různé typy přepravy</h3>
                        <p>
                            Přeprava zaměstnanců, dětí i soukromých osob
                        </p>
                    </div>
                </div>

                <div className="offer-cta-slim">
                    <span className="license-badge-compact">Koncesní listina: tuzemsko a zahraničí</span>
                </div>
            </div>
        </div>
    );
}