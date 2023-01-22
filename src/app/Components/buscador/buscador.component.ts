import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiserviceService } from 'src/app/Services/apiservice.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  
  miBusqueda:any[]=[];
  artista:string ="";

  constructor(private _route:ActivatedRoute, private _releaseService:ApiserviceService) { }

  ngOnInit(): void {
    this._route.params.subscribe(data =>{
      //console.log(data['busqueda']);
      this.artista=data['busqueda'];
      //console.log(this.artista);
      
    })

   this._releaseService.BuscadorCanciones(this.artista).subscribe((data:any)=>{
      console.log(this.artista)
      this.miBusqueda=data.artists.items
      console.log(this.miBusqueda)
    })

    
    /* this._releaseService.BuscadorCanciones(data["termino"]).subscribe(data =>{
      console.log(data);
    })
    console.log(this.miBusqueda)*/
}
//BuscadorCanciones(nombre:string): Observable<any>{


}
