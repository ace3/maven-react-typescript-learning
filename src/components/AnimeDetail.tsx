import {AnimeDetail as AnimeDetailType} from '../models/';
import React from 'react'
import {useHistory} from 'react-router-dom';
interface Props{
  item:AnimeDetailType
}
function AnimeDetail(props:Props) {
  const {item} = props;
  let history = useHistory();
  return (
    <>
    <button onClick={()=>history.goBack()}>Back</button>
    <div className="flex flex-col justify-center items-center">
      <img className="w-96" alt={item.title} src={item.image_url}/>
      <h1 className="text-xl">{item.title}</h1>
      <h6>English Title:{item.title_english}</h6>
      <h6>Japanese Title:{item.title_japanese}</h6>
      <h3 style={{color:item.airing? 'green':'red'}} >{item.airing ? 'Currently Airing':'Not Yet Aired'}</h3>
      {item.aired.to && (<h5>Aired from {item.aired.from} to {item.aired.to}</h5>)}
      <h6>Episodes: {item.episodes ===null? "TBA": item.episodes}</h6>
      <h6>Durations: {item.duration}</h6>
      <h6>Rating: {item.rating}</h6>
    </div>
    </>
  )
}

export default AnimeDetail
