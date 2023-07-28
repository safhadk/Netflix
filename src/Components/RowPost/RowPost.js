import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY,imageURL} from '../../constants/constants'
import YouTube from 'react-youtube'

function RowPost(props) {
    const [movies, setMovies] = useState([])
    const [urlId, setUrlId] = useState("");
    useEffect(() => {
     axios.get(props.url).then((response)=>{
        console.log(response.data)
        setMovies(response.data.results)
     })
    }, [])
    const opts = {
      height: "590",
      width: "100%",
      playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
      },
  };
  const HandleMovie = (id)=>{
    console.log("safad")
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) => {
      if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
      } else {
          console.log("Video Not Available");
      }
  });
  }
  return (
    <div class='row'>
        <h2>{props.title}</h2>
        <div className="posters">
            {movies.map((obj)=>
                <img onClick={()=>HandleMovie(obj.id)} className={props.isSmall ?'smallPoster': 'poster'} alt='poster' src={`${imageURL+obj.backdrop_path}`} />
             )}    
        </div>
        {urlId && <YouTube opts={opts} videoId={urlId.key} />}
        
    </div>
  )
}

export default RowPost
