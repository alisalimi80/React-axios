import  ReactDOM  from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App'
import Movie from "./components/movie";
import Home from './components//Home'
import {BrowserRouter} from 'react-router-dom'




ReactDOM.render(<BrowserRouter>
<App/>
</BrowserRouter>,document.getElementById("root"))
