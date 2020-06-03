import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import {HttpClientModule} from '@angular/common/http'
import { HomePageRoutingModule } from './home-routing.module';
import { PhotoService } from './services/photo.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HttpClientModule

  ],
  providers:[PhotoService],
  declarations: [HomePage]
})
export class HomePageModule {}
