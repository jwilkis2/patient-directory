import { 
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { Patient } from '../patient.model';

@Component({
  selector: 'app-search-text',
  templateUrl: './search-text.component.html',
})
export class SearchTextComponent {
  searchText: string;
  @Output() onSearchResults: EventEmitter<string>;

  constructor() {
    this.onSearchResults = new EventEmitter();
   }

  searchPatients(search: HTMLInputElement): boolean {
    //console.log(search.value);
    this.searchText = search.value;
    this.onSearchResults.emit(search.value);
    return false;
  }

  clearInput(inputElement: HTMLInputElement): boolean {
    //console.log('clearing input element');
    this.onSearchResults.emit('');
    inputElement.value = '';
    this.searchText = '';
    return false;
  }
}
