import React from 'react'
import './contactcomponent.css'
import { Map, ZoomControl, MarkerLayer, Marker, KeyboardControl, MouseControl, CompassControl, SyncControl, markerCard } from 'react-mapycz'

export const ContactComponent = () => {

    return (
        <div id='kontakty' className='ipsum'>
            <h1>Kontakty</h1>
            <p>
            <b>Tel.</b>
            <a href='Tel: 00420777056080'> +420 777 056 080</a>
            </p>
            <p>
            <b>Email:</b>
            <a href='mailto: 596131042@iol.cz'> 596131042@iol.cz</a>
            </p>
            <p>
            Větrov 464/22
            </p>
            <p>
            725 29 Ostrava - Petřkovice 
            </p>
            <p>
            IČ:10630597 DIČ: CZ5402192664
            </p>

            <Map  center={{ lat: 49.8631783, lng: 18.2431869 }}>
                <KeyboardControl />
                <ZoomControl />
                <MouseControl zoom={true} pan={true} wheel={true} />
                <CompassControl right={10} top={50} />
                <SyncControl />
                <MarkerLayer>
                    <Marker coords={{ lat: 49.8631783, lng: 18.2431869 }} card={markerCard} />
                </MarkerLayer>
            </Map>

        </div>
    )
}