import { LIMIT } from "../constant";
import { FETCH_DATA } from '../constant/endpoint'

export default function getEndPoint (page)  {
    if(page===1) return FETCH_DATA;
    const limit = LIMIT;
    const offset = (page-1)*limit;
    return `${FETCH_DATA}?limit=${limit}&offset=${offset}`
  }
