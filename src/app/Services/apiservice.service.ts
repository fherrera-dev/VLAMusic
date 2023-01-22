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
      "Authorization" : "Bearer BQCLtEuZJPVqQKrW3Klpo42U5HlHisJogliFe-hzGgANImxIIWp-g5eKzJQp9Bmk8DzO7GUN8qyevUJw6thKC2QfstapeSykWLznrcghD2WICKtEo-I"
    })
    return this.Http.get<any>("https://api.spotify.com/v1/browse/new-releases?country=US&limit=50",{headers});
  }

  BuscadorCanciones(nombre:string): Observable<any>{
    const headers = new HttpHeaders({
      "Authorization" : "Bearer BQCLtEuZJPVqQKrW3Klpo42U5HlHisJogliFe-hzGgANImxIIWp-g5eKzJQp9Bmk8DzO7GUN8qyevUJw6thKC2QfstapeSykWLznrcghD2WICKtEo-I"
    })
    return this.Http.get<any>(`https://api.spotify.com/v1/search?q=${nombre}&type=artist`,{headers});
  }


 /*buscador(busqueda:string){
    let arreglo:any[]=[];
    busqueda = busqueda.toLocaleLowerCase();

    for (let i = 0; i < this.Releases.length; i++) {
      let rel = this.Releases[i];
      let nombre = rel.nombre.toLocaleLowerCase();

      if (nombre.indexOf(busqueda) >=0) {
        arreglo.push(rel);
      }
      
    }
    return arreglo;
  }*/
 
  




}