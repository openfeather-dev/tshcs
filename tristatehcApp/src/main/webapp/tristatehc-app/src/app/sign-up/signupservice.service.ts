import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ShiftConfiguration } from '../model/shift-configuration';

@Injectable({
  providedIn: 'root'
})
export class SignupserviceService {

  constructor(private http: HttpClient) { }
    
    createUserInOkta(user : any){
  
        const _headers = new HttpHeaders();
        const headers = _headers.append('Content-Type', 'application/json')
                        .append('Accept', 'application/json')
                        .append('Access-Control-Allow-Origin', '*')
                        .append('Authorization', 'SSWS 0oafuhs95vCjTXe6f0h7');

    return this.http.post<any>("https://dev-444763.oktapreview.com/api/v1/users?activate=false",user,{headers:headers});
  }
}
