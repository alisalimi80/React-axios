import React, { Component } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import { useState } from 'react';
import {Link} from 'react-router-dom'
const Home = () => {
    const [movies,setmovies] = useState([])
    useEffect(async()=>{
        const response = await axios.get('http://moviesapi.ir/api/v1/movies')
        console.log(response.data.data)
        setmovies(response.data.data)
    },[])
    
    return ( <>
    <div className="container mt-5">
    
        {movies.map((m)=>{
            return(
            
                <div className="col-2 text-center d-inline-block mb-5">
                    <Link to={`movie/${m.id}`}>
                    <img className='poster' src={m.poster} alt="" />
                    </Link>           
                </div>
            
            
            
            )
        })}
        </div>
        


    </>  );
}
 
export default Home;