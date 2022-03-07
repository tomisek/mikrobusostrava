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
                        src={Bus} alt='bus'
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Vito} alt='bus'
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={Hyundai} alt='bus'
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
    )
}