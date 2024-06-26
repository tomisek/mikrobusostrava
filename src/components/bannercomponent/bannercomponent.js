import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import './bannercomponent.css'
import Vito from '../../shared/images/ostrava-view-bus.jpg'
import Hyundai from '../../shared/images/vito.jpg'
import Mercedes from '../../shared/images/mikrobus_black.jpg'
import { Carousel } from 'react-bootstrap'
export const BannerComponent = () => {
    return (
            <Carousel className='container' id='nopadd'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Vito}
                        alt="Vito"
                    />
                    <Carousel.Caption>
                        <h3>Mikrobus Mercedes Vito</h3>
                    </Carousel.Caption>
                </Carousel.Item>  
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Mercedes}
                        alt="Mercedes"
                    />
                    <Carousel.Caption>
                        <h3>Mercedes třída V</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Hyundai}
                        alt="Hyundai"
                    />
                    <Carousel.Caption>
                        <h3>Mikrobus Mercedes Vito</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                
            </Carousel>
    )
}