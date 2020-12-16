import { urlGeneral } from '../urls/urls.js'
export const  todosLosEstados = async ()=> {
     let  res = await fetch(urlGeneral);
     return res.json()
};