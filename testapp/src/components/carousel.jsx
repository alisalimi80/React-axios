import {  useState } from 'react';
import react from 'react';
import './carousel.css';



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
        <div className="carousel-item" style={{width:width}}>
            {children}
        </div>
    );
}

const Carousel = ({children}) =>{
    const [activeindex,setactiveindex] = useState(0)
    const updateindex = (newindex) =>{
        if(newindex<0){
            newindex = 0
        }else if(newindex>=react.Children.count(children)){
            newindex = react.Children.count(children)-1
        }
        setactiveindex(newindex)
        
    }
    
    return(
        <div className="carousel">
            <div className="inner" style={{transform:`translateX(-${activeindex * 100}%)`}}>
                {react.Children.map(children,(child,index)=>{
                return react.cloneElement(child,{width:"100%"})
})}

            </div>
            <div className="indicators">
                
                <button onClick={()=>{ updateindex(activeindex-1)}}>prev</button>
                {react.Children.map(children,(child,index)=>{
                    return <button onClick={()=>{updateindex(index)}}>{index+1}</button>
                })}
                <button onClick={()=>{ updateindex(activeindex+1)}}>next</button>
            </div>
        </div>
    )
    

}
export default Carousel