import React from 'react'
import { SRLWrapper } from 'simple-react-lightbox'
import Vito from '../../shared/images/vito.jpg'
import Hyundai from '../../shared/images/ostrava-view-bus.jpg'
import Side from '../../shared/images/side.jpg'
import Backside from '../../shared/images/backside.jpeg'
import Mercedes from '../../shared/images/mikrobus_black.jpg'
import './lightboxcomponent.css'

const options = {
    settings: {
        overlayColor: 'rgba(0, 0, 0, 0.9)',
        autoplaySpeed: 3000,
        transitionSpeed: 600,
    },
    buttons: {
        showAutoplayButton: false,
        showDownloadButton: false,
    },
    caption: {
        showCaption: true,
        captionColor: '#fff'
    }
}

export const LightboxComponent = () => {
    return (
        <SRLWrapper options={options}>
            <div className='container-md light' id='fotogalerie'>
                <h1>Fotogalerie</h1>
                <p className="gallery-subtitle">Prohlédněte si náš moderní vozový park</p>
                
                <div className='row gallery-row'>
                    <div className='col-sm gallery-item'>
                        <div className="image-container">
                            <img src={Vito} alt='Mercedes Vito - přední pohled' 
                                 data-caption="Mercedes Vito - moderní a pohodlný vůz pro vaši přepravu" />
                            <div className="image-overlay">
                                <span>Mercedes Vito</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm gallery-item'>
                        <div className="image-container">
                            <img src={Backside} alt='Prostorný zavazadlový prostor' 
                                 data-caption="Prostorný zavazadlový prostor pro vaše zavazadla" />
                            <div className="image-overlay">
                                <span>Zavazadlový prostor</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row gallery-row'>
                    <div className='col-sm gallery-item'>
                        <div className="image-container">
                            <img src={Side} alt='Komfortní interiér vozu' 
                                 data-caption="Komfortní interiér pro pohodlné cestování" />
                            <div className="image-overlay">
                                <span>Interiér vozu</span>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm gallery-item'>
                        <div className="image-container">
                            <img src={Hyundai} alt='Boční pohled na vůz' 
                                 data-caption="Elegantní design našeho vozu" />
                            <div className="image-overlay">
                                <span>Boční pohled</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row gallery-row'>
                    <div className='col-sm gallery-item'>
                        <div className="image-container">
                            <img src={Mercedes} alt='Mercedes třída V - luxusní přeprava' 
                                 data-caption="Mercedes třída V - luxus a komfort pro vaše cesty" />
                            <div className="image-overlay">
                                <span>Mercedes třída V</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SRLWrapper>
    )
}