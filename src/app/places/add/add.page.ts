import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../services/places.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  constructor(private placeService: PlacesService, private router :Router) { }

  ngOnInit() {
  }
  
  savePlace(title:HTMLInputElement, imageURL:HTMLInputElement){
    this.placeService.addPlaces(title.value, imageURL.value);
    this.router.navigate(['/places']);
  }

}
