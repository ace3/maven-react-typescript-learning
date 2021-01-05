import React,{useEffect, useState} from 'react'

import {AnimeInfo} from '../components/'
import { AnimeItem } from '../models';
import Loader from 'react-loader-spinner'
import {axios} from '../services';
import {url} from '../constants/';

function List() {

  const [animes, setAnimes] = useState<AnimeItem[]>([]);
 
  useEffect(() => {
    const fetchAnime = async()=>{
      const fetchResult = await axios.get(url.seasonLater);
      
      let arr:AnimeItem[] =[];
      arr.push(fetchResult.data.anime[0])
      if(fetchResult){
        setAnimes(fetchResult.data.anime);
      }

    }
    fetchAnime();
  }, [])

   if(animes.length ===0) return (<div className="flex justify-center align-center items-center w-full h-full"><Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs
 
      /></div>)

  return (
    <div className="container mx-auto">
      <p>Upcoming Anime List</p>

{
  animes.length !==0 && (
    animes.map((item:AnimeItem) =>{
      return (<AnimeInfo key={item.mal_id} item={item}/>)
    })
  )
}

      
    </div>
  )
}

export default List
