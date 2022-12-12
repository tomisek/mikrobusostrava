import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './bannercomponent.css'
import Bus from '../../shared/images/04.jpg'
import Vito from '../../shared/images/vito.jpg'
import Hyundai from '../../shared/images/08.jpg'
import { Carousel } from 'react-bootstrap'
export const BannerComponent = () => {
    return (
            <Carousel className='container' id='nopadd'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Vito} alt='bus'
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Mikrobus Mercedes Vito</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Hyundai} alt='bus'
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Hyundai</h3>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>
    )
}