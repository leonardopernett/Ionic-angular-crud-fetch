import { Component, OnInit } from '@angular/core';
import { PlacesService } from './services/places.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {
   places:any = []
  constructor(private placeService : PlacesService, private router : Router) { }

  ngOnInit() {
    this.places = this.placeService.getPlaces()
   
  }
  ionViewWillEnter(){
    this.places = this.placeService.getPlaces()
  }

  goTohome(){
    this.router.navigate(['/home'])
  }

} 
