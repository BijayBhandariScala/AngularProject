import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  private REST_API_SERVER = "http://desktop-0a7dpg8:8000";

  constructor(private http: HttpClient) { }

  getAllRooms() {
    return this.http.get(this.REST_API_SERVER + '/rooms');
  }
}
