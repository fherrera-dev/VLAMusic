import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';

const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json;charset=UTF-8'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  
 
  constructor(private Http:HttpClient) { 
    console.log("funcionando");

  }

  
  OptenerCanciones():Observable<any>{
    const headers = new HttpHeaders({
      "Authorization" : "Bearer BQCex8YTAZCD1tLCmItu1-uKqx1RZQ7x8K7h9faPkQ7gZbsMFZk67kRdvZyUolpZRJCMV7CykJS4UM8cU2_AVk0xaiGOWda2EJUq5xqq1M1_Sxm7fj1J"
    })
    return this.Http.get<any>("https://api.spotify.com/v1/browse/new-releases?country=US&limit=30",{headers});
  }

  BuscadorCanciones(nombre:string): Observable<any>{
    const headers = new HttpHeaders({
      "Authorization" : "Bearer BQCex8YTAZCD1tLCmItu1-uKqx1RZQ7x8K7h9faPkQ7gZbsMFZk67kRdvZyUolpZRJCMV7CykJS4UM8cU2_AVk0xaiGOWda2EJUq5xqq1M1_Sxm7fj1J"
    })
    return this.Http.get<any>(`https://api.spotify.com/v1/search?q=${nombre}&type=artist`,{headers});
  }



  




}
