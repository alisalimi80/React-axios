import React, { Component, useContext, useRef, useState } from 'react';
import { useEffect } from 'react';
import './../css//style.css'
import axios from 'axios'
import  ReactDOM  from 'react-dom';
import Moviecontext from './context';
import Carousel from './carousel';
import {Carouselitm} from './carousel'
import CRender from './carouselrendered';



const Movie = (props) => {
    const [movie,setmovie] = useState({})
    const [genres,setgenres] = useState([])
    const [images,setimages] =useState([])
    const slides = useRef()
    const context = useContext(Moviecontext) 
   
    
    
    
    
    useEffect(async()=>{
       const response =  await axios.get(`http://moviesapi.ir/api/v1/movies/${props.match.params.id}`)
       setmovie(response.data)
       setgenres(response.data.genres)
       setimages(response.data.images)
    },[])

    
    return ( 
    <>
    
    <div className="container main p-5">
        <div className="poster  w-25 ">
            <img className='posterimg w-75' src={movie.poster} alt="" />
        </div>
        <div  className="descreption  w-75   pb-0 ">
            <h3 className='text-white mb-2' >{movie.title} </h3>
            <span  className='text-white fs-6 fw-lighter'>{movie.released}</span>
            <div  className="details mt-5">
                <img className='imdb' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/IMDb_Logo_Square.svg/2048px-IMDb_Logo_Square.svg.png" alt="" />
                <span className='m-3 text-white'>{movie.imdb_rating}</span>
                {genres.map((g,index)=>{
                    return(
                        <span key={index} className='m-3 text-white'>{g}</span>
                    )
                })}
                <span className='m-3 text-white'>{movie.year}</span>
                <span className='m-3 text-white'>{movie.country}</span>
                <hr />
                <div className="details2 text-white">
                    <div>
                    <span className='text-white fw-lighter'>runtime: </span>
                    {movie.runtime}
                    </div>
                    <div>
                    <span className='text-white fw-lighter'>director: </span>
                    {movie.director}
                    </div>
                    <div>
                    <span className='text-white fw-lighter'>writer: </span>
                    {movie.writer}
                    </div>
                    <div>
                    <span className='text-white fw-lighter'>actors: </span>
                    {movie.actors}
                    </div>
                </div>
                <hr />
            </div>
            <div className="container p-0">
                <div className="details3">
                    <div className="d-left w-50   ">
                        <p className='text-white'><span className='text-white fw-lighter'>plot: </span>{movie.plot}</p>
                    </div>
                    <div className="d-right w-50  ">
                      <div className="container">
                      </div>                    
                    </div>                 
                </div>
            </div>
            <hr />
            
            <Carousel {...props}>
               {(images).map((image)=>{
                   return (<Carouselitm><img style={{objectFit:'cover',width:'100%'}} src={image} alt="" /></Carouselitm>)
               })}
           </Carousel>
        </div>
        
            
            
    </div>
    
            
    
    </>
     );
    



    
      
}
 
export default Movie;