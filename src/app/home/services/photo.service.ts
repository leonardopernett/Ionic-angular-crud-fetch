import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class PhotoService implements OnInit{
  URL='https://jsonplaceholder.typicode.com/photos?_limit=15'
  constructor(private http : HttpClient) { }
  ngOnInit(){

  }
   
  getPhoto(){
     return this.http.get<any>(this.URL)
  }

}
