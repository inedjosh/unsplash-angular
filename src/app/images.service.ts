import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  private jsonUrl = 'assets/data.json';

  constructor(private http: HttpClient) { }

  getJsonData() {
    return this.http.get(this.jsonUrl);
  }
}
