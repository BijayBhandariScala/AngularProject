import { Component, OnInit } from '@angular/core';
import { HttpClient , HttpHeaders  } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

export class RoomComponent implements OnInit {
  
  rooms : any;
  
  constructor(private http: HttpClient) {
   }

  ngOnInit(): void {
    
    let header = httpOptions.headers.append('Access-Control-Allow-Origin', 'http://desktop-0a7dpg8:8000/rooms');

    let res= this.http.get("http://desktop-0a7dpg8:8000/rooms"); 
    //let res= this.http.get("https://jsonplaceholder.typicode.com/todos/10");
    res.subscribe(data=> this.rooms=data);

  }

}
