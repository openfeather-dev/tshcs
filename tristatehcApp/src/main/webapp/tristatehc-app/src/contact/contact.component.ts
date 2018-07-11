import { Component } from '@angular/core';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {FileUploadModule} from 'primeng/fileupload';
import {InputMaskModule} from 'primeng/inputmask';
@Component({
  selector: 'contact',
  templateUrl: '../contact/contact.component.html',
  styleUrls: ['../contact/contact.component.css']
})
export class Contact {
  title = 'Contact';
  filteredCountriesSingle: any[];
  
  
  
  filterCountrySingle(event) {
      let query = event.query;
     // this.countryService.getCountries().then(countries => {
       //   this.filteredCountriesSingle = this.filterCountry(query, countries);
      //});
  }
}
