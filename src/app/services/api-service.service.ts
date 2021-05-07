import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from "@angular/common/http"
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { 

  }
  doApiget(url:string):any {
    return this.http.get(url)
  }
}
