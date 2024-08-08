import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class PackageService extends DataService{

  constructor(http:HttpClient,private httpPrivate : HttpClient){
    super(`${environment.apiUrl}package`,http);
  }
}