import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { observable } from 'rxjs';
import { ApiserviceService } from 'src/app/Services/apiservice.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Releases:any[]=[];

  constructor(private _newReleases:ApiserviceService) {

   }

  ngOnInit(): void {
    this.GetReleases()
  }

  GetReleases(){
    this._newReleases.OptenerCanciones().subscribe(data =>{
      console.log(data);
      this.Releases=data.albums.items;
     
    })
  }



}
