import {  useState } from 'react';
import react from 'react';
import './carouselstyle.css';
import axios from 'axios'
import { useEffect } from 'react';
import {FaAngleLeft} from 'react-icons/fa'
import {FaAngleRight} from 'react-icons/fa'



// function Carousel(props) {
//     const[movie,setmovie] = useState({})
//     const [images,setimages] = useState([])
//     useEffect(async()=>{
//         const response = await axios.get(`http://moviesapi.ir/api/v1/movies/${props.match.params.id}`)
//         setmovie(response.data);
//         setimages(response.data.images)
//         console.log(response.data.images)


//     },[])
 

//   }


export const Carouselitm = ({children,width})=>{
    return(
        <div className="carousel-item1" style={{width:width}}>
            {children}
        </div>
    );
}

const Carousel = (props) =>{
    const [activeindex,setactiveindex] = useState(0)

    const [images,setimages] = useState([])
    useEffect(async()=>{
        const response = await axios.get(`http://moviesapi.ir/api/v1/movies/${props.match.params.id}`)
        setimages(response.data.images)
        console.log(response.data.images)
       


    },[])
      
    const updateindex = (newindex) =>{
        if(newindex<0){
            newindex = 0
        }else if(newindex>=react.Children.count(props.children)){
            newindex = react.Children.count(props.children)-1
        }
        setactiveindex(newindex)
        
    }
    
    return(
        <div className="carousel1">
            <div className="inner1" style={{transform:`translateX(-${activeindex * 100}%)`}}>
                {react.Children.map(props.children,(child,index)=>{
                return react.cloneElement(child,{width:"100%"})
                })}

            </div>
            <div className="indicators1">
                
                <button className='movebtn prev' onClick={()=>{ updateindex(activeindex-1)}}><FaAngleLeft/></button>
                {images.map((image,index)=>{
                    return <img className='m-2' style={{width:"150px",cursor: 'pointer'}} onClick={()=>{updateindex(index)}} src={image} alt="" />
                })}
                <button className='movebtn next'  onClick={()=>{ updateindex(activeindex+1)}}><FaAngleRight/></button>
            </div>
        </div>
    )
    

}
export default Carousel