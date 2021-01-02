export const url = {
  seasonLater:'/season/later',
  animeDetail(id:string){
    return `/anime/${id}`;
  },
  animeDetailEpisodes(id:string){
    return `/anime/${id}/episodes`;
  },
  animeDetailStats(id:string){
    return `/anime/${id}/stats`;
  }
}