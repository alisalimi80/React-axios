import React, { Component } from 'react';
import Carousel from './carousel';
import { Carouselitm } from './carousel';
const Crender = () => {
    return ( 
        <>
        <Carousel>
                <Carouselitm>item1</Carouselitm>
                <Carouselitm>item2</Carouselitm>
                <Carouselitm>item3</Carouselitm>
            </Carousel>
        </>
     );
}
 
export default Crender;