import React from 'react'
import { SRLWrapper } from 'simple-react-lightbox'
import Vito from '../../shared/images/vito.jpg'
import Hyundai from '../../shared/images/ostrava-view-bus.jpg'
import './lightboxcomponent.css'

export const LightboxComponent = () => {
    return (

        <SRLWrapper>
            
            <div className='container-md light' id='fotogalerie'>
            <h1>Fotogalerie</h1>
                <div className='row'>
                    
                    <div className='col-sm'>
                        <img src={Vito} alt='vito' />
                    </div>
                    <div className='col-sm'>
                        <img src={Hyundai} alt='hyundai' />
                    </div>
                </div>
                <div className='row hope' >
                    
                    <div className='col-sm'>
                        <img src={Vito} alt='vito' />
                    </div>
                    <div className='col-sm'>
                        <img src={Hyundai} alt='hyundai' />
                    </div>
                </div>
                <div className='row hope' >
                    
                    <div className='col-sm'>
                        <img src={Vito} alt='vito' />
                    </div>
                    <div className='col-sm'>
                        <img src={Hyundai} alt='hyundai' />
                    </div>
                </div>
            </div>
        </SRLWrapper>
    )
}