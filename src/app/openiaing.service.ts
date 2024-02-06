import { Injectable } from '@angular/core';
import { ResponseOpenia } from './model/response-openia';
import { RequestOpenia } from './model/request-openia';

@Injectable({
  providedIn: 'root'
})
export class OpeniaingService {

  url = "http://localhost:5208/OpenAPI";

  error_responseOpenia:ResponseOpenia = {
    role:"admin",
    content:""
  }

  constructor() {     
  }

  async getResponseia(requestOpenia: RequestOpenia): Promise<ResponseOpenia>{
    try{
      const data = await fetch(this.url, {method:'POST', 
    body:JSON.stringify(requestOpenia), 
    headers: {      
      'Content-Type': 'application/json'
    }, 
    mode: 'cors'});
    if(data.ok){
      return await data.json() ?? {};
    }else{
      this.error_responseOpenia.content = "La peticion hacia el servicio no fue exitosa: " + data.statusText;
      return this.error_responseOpenia;
    }    
    }catch(error){
      console.log(error);
      this.error_responseOpenia.content = "Ocurrio un error al realizar la peticion de red: " + error;
      return this.error_responseOpenia;
    }
    
  }
}
