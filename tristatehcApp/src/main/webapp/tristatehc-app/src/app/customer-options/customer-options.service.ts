import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerOptionsService {
        
    private isEnabledSource = new Subject<boolean>();
    
    public isEnabled = this.isEnabledSource.asObservable();

    constructor() { }
    
    enableButton (value: boolean){
       this.isEnabledSource.next(value);
   }
    
    
}
