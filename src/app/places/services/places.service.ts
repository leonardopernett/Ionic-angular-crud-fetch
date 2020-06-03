import { Injectable } from '@angular/core';

import { Place } from '../model/Place';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private places:Place[]= [ 
    {
      id:'1',
      title:'eiffel', 
      imageURL:'https://4.bp.blogspot.com/-MhP6v_wNedQ/T5cdguQ3CLI/AAAAAAAABO8/2CWxOFgr8O0/s1600/Tour+Eiffel+495+a_04CC.jpg',
      comments:['awesome place', 'awesome experience']
    },
    {
      id:'2',
      title:'statue libertad',
      imageURL:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/250px-Statue_of_Liberty_7.jpg',
      comments:['big statue', 'great monumentss']
    },
    {
      id:'3',
      title:'statue libertad',
      imageURL:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Statue_of_Liberty_7.jpg/250px-Statue_of_Liberty_7.jpg',
      comments:[]
    }
  ]
  constructor() { }

  getPlaces(){
    return this.places
  }

  addPlaces(title:string, imageURL:string){
     this.places.push({
       id: this.places.length.toString() +1,
       title:title,
       imageURL:imageURL,
       comments:[]
     })
  }
  getOnePlace(id:string){
     return {
       ...this.places.find(t=>t.id===id)
     }
  }

  deletePlace(id:string){
      return this.places =  this.places.filter(t=> t.id!==id)
  }

  updatePlace(){

  }

}
