import { Component, OnInit } from '@angular/core';
import {RoomService} from '../room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})

export class RoomComponent implements OnInit {

  rooms : any;
  
  constructor(private roomservice: RoomService) {
   }

  ngOnInit() {
    this.getRoomDetails();
  }

  getRoomDetails(): void{   
    this.roomservice.getAllRooms()
    .subscribe(data=> this.rooms=data);
  }

}
