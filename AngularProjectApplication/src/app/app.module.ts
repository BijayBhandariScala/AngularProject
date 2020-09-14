import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RoomComponent } from './room/room.component';
import { RoomService } from './room.service';

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [RoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
