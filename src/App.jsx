import './css//style.css'
import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios'
import { Route,Switch } from 'react-router-dom';
import Movie from './components/movie';
import Home from './components/Home';
import ReactDOM from 'react-dom';
import Moviecontext from './components/context';

const App = () => {
    
    
return(
    <>
    <Moviecontext.Provider >
    <Switch>
        <Route path='/movie/:id' render={(props)=><Movie {...props}/>}/>
        <Route path='/' render={(props)=><Home {...props}/>}/>
    </Switch>
    </Moviecontext.Provider>
    </>
)
}
export default App;