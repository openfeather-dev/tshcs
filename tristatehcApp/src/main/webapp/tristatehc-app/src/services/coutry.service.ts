import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { OktaAuthService } from '@okta/okta-angular';

@Injectable({
  providedIn: 'root'
})
export class CoutryService {

  constructor(private http: HttpClient,private oktaAuth: OktaAuthService) { }
    
    
    getUser() {
       
  /* let accessToken = this.getAccessToken();
        console.log( 'accessToken    ' +accessToken);
        var headers_object = new HttpHeaders();
         headers_object.append('Accept', 'application/json');
        headers_object.append('Content-Type', 'application/json');
        headers_object.append("Authorization",'SSWS ' + accessToken);
          const headers = new Headers({
    Authorization: 'Bearer ' + accessToken
    });
        
        console.log('headers' +headers);
        */
         //const accessToken = this.oktaAuth.getAccessToken().accessToken;
        // const userInfo = this.oktaAuth.getOktaAuth().token.getUserInfo(accessToken);
          //console.log('userInfo  ----> '+userInfo);

// return this.http.get('https://dev-444763.oktapreview.com/api/v1/users/me',{headers:headers_object});
        return '';
}
    
    async getAccessToken(){
      //  const accessToken = await this.oktaAuth.get;
       
    // Make request
    return '';
    }
}
