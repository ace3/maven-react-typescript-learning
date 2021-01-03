import React,{useEffect, useState} from 'react'

import {AnimeDetail} from '../components';
import {AnimeDetail as AnimeDetailType} from '../models';
import Loader from 'react-loader-spinner'
import {RouteComponentProps} from 'react-router-dom';
import {axios}from '../services';
import {url} from '../constants';

interface Props extends RouteComponentProps<{id:string}>{
  
}

function Detail(props:Props) {
const mal_id = props.match.params.id;
  const [item, setItem] = useState<AnimeDetailType|null>(null)
  useEffect(() => {
    const fetchAnime = async ()=>{
      const fetchResult = await axios.get(url.animeDetail(mal_id));

      if(fetchResult){

        setItem(fetchResult.data);

      }
    }
    fetchAnime();
  }, [mal_id])

  if(item ===null) return (<div className="flex justify-center align-center items-center w-full h-full"><Loader
type="Puff"
color="#00BFFF"
height={100}
width={100}
         timeout={3000} //3 secs
      /></div>)
  return (
    <div>
      {item !==null && (<AnimeDetail item={item}/>)}
    </div>
  )
}

export default Detail
