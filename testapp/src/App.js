import React, { Component } from 'react';
import Carousel from './components/carousel';
import { Carouselitm } from './components/carousel';
const App = () => {
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
 
export default App;