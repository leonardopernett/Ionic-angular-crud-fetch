import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { PlacesService } from '../services/places.service';
import { Place } from '../model/Place';
import {AlertController} from '@ionic/angular'
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  place:Place= {}
 
  constructor(
    private router :Router, 
    private activeRouter: ActivatedRoute, 
    private placeservice: PlacesService,
    private alertController:AlertController
    ) { }
 
  ngOnInit() {
    this.activeRouter.paramMap.subscribe(param=>{
       const id = param.get('id')
       this.place =this.placeservice.getOnePlace(id); 
    })
    
  }

 
  async deletePlace(){

     const alert = await this.alertController.create({
      header: 'are you sure want delete it!',
      message: 'be carefull',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          
        }, 
        {
          text: 'delete',
          handler: () => {
            this.placeservice.deletePlace(this.place.id);
            this.router.navigate(['/places'])
          }
        }
      ]
    });

    await alert.present()

  }

}
