import {AnimeItem} from '../models/index';
import {Link} from 'react-router-dom';
import React from 'react'
interface Props{
  item:AnimeItem
}
function AnimeInfo(props:Props) {
const {item} = props;
  return (
    <div className="flex flex-row justify-center items-center w-full my-8">
      <div className="flex w-2/5">
      <img className="h-48" alt={item.title} src={item.image_url}/></div>
        <div className="flex flex-col w-3/5 ">  
          <Link to={`/detail/${item.mal_id}`} ><h1 className="text-xl text-indigo-700 font-bold mb-2">{item.title}</h1></Link>
        <h6 className="text-sm text-gray-600">{item.synopsis}</h6>
        </div>
    </div>
  )
}

export default AnimeInfo
