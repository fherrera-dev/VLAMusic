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
  msg:string="";
  img:string="";
  Noimg:string="";

  constructor(private _route:ActivatedRoute, private _releaseService:ApiserviceService) { }

  ngOnInit(): void {
    this._route.params.subscribe(data =>{
      //console.log(data['busqueda']);
      this.artista=data['busqueda'];
      //console.log(this.artista);
      
    })
   
    if (!this.artista) {
      console.log('No se ha realizado una busqueda');
      this.msg='No se ha realizado una busqueda...'
      
    } else {
      this._releaseService.BuscadorCanciones(this.artista).subscribe((data:any)=>{
        console.log(this.artista)
        //this.img=data.artists.items.images[0].url;
        //this.Noimg='assets/Imagenes/dummy-person.jpg'

        

        this.miBusqueda=data.artists.items
        console.log(this.miBusqueda)
      })
      
    }

    /* this._releaseService.BuscadorCanciones(data["termino"]).subscribe(data =>{
      console.log(data);
    })
    console.log(this.miBusqueda)*/
}
//BuscadorCanciones(nombre:string): Observable<any>{


}
