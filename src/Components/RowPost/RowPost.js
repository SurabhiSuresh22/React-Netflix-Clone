import React, {useEffect, useState} from 'react';
import axios from '../../axios';
import { API_KEY, imageUrl } from '../../Constants/constants';
import './RowPost.css'
import Youtube from 'react-youtube'

function RowPost(props) {

  const [movies,setMovies] = useState([])
  const [urlId,seturlId] = useState('')

  useEffect(() => {
    axios.get(props.url).then((res)=>{
    console.log(res.data)
    setMovies(res.data.results)
    }).catch((err=>{
      alert('network error')
    }))
  }, []);
  
 const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    }

const handleMovie = (id)=>{
  console.log(id)
  axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-us`).then(res=>{
    if(res.data.results.length!==0){
      console.log(res.data.results[0])
      seturlId(res.data.results[0])
    }else{
      console.log('Array empty')
    }
  })
}
  return (
  <div className='row'>
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj)=>
           <img onClick={()=>handleMovie(obj.id)} className={props.isSmall ? "smallposter" : "poster"} alt="" src={`${imageUrl + obj.backdrop_path}`}/>
        )}
      </div>
     { urlId && <Youtube opts={opts} videoId={urlId.key}/> }
  </div>);
}

export default RowPost;
