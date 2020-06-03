import { Component, OnInit } from '@angular/core';
import { PhotoService } from './services/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
   photos= []
  constructor(private photoService: PhotoService) {}
   
   ngOnInit(){
     this.photoService.getPhoto().subscribe(
       res=>{
         this.photos= res;
       },
       err=>console.log(err)
     )
   }
}
