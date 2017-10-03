import { Component } from '@angular/core';
import { Patient } from './patient.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filter: string;
  //style: string;
  patients: Patient[];

  constructor() {
  this.filter = '';
    this.patients = [
      new Patient(
        'George',
        'Oscar',
        'Bluth',
        'Sr.',
        'George.Bluth@bluth.com',
        '/assets/images/patients/george.bluth.jpg',
        'Stein'),
      new Patient(
        'Lucille',
        '',
        'Bluth',
        '',
        'Lucille.Bluth@bluth.com',
        '/assets/images/patients/lucille.bluth.jpg',
        'Stein'),
      new Patient(
        'Oscar',
        'George',
        'Bluth',
        '',
        'Oscar.Bluth@bluth.com',
        '/assets/images/patients/oscar.bluth.jpg',
        'Norman'),
      new Patient(
        'George',
        'Oscar',
        'Bluth',
        'II',
        'GOB@bluth.com',
        '/assets/images/patients/gob.jpg',
        'Stein'),
      new Patient(
        'Buster',
        '',
        'Bluth',
        '',
        'Buster.Bluth@bluth.com',
        '/assets/images/patients/buster.bluth.jpg',
        'Fishman'),
      new Patient(
        'Michael',
        '',
        'Bluth',
        '',
        'Michael.Bluth@bluth.com',
        '/assets/images/patients/michael.bluth.jpg',
        'Fishman'),
      new Patient(
        'George',
        'Michael',
        'Bluth',
        '',
        'George.Michael.Bluth@gmail.com',
        '/assets/images/patients/george.michael.bluth.jpg',
        'Fishman'),
      new Patient(
        'Lindsay',
        '',
        'Funke',
        '',
        'Lindsay.Funke@gmail.com',
        '/assets/images/patients/lindsay.funke.jpg',
        'Norman'),
      new Patient(
        'Tobias',
        'Onyango',
        'Funke',
        '',
        'Tobias.Funke@gmail.com',
        '/assets/images/patients/tobias.funke.jpg',
        'Norman'),
      new Patient(
        'Mae',
        '',
        'Funke',
        '',
        'Maeby.Funke@gmail.com',
        '/assets/images/patients/maeby.funke.jpg',
        'Norman'),
    ];
  }

  /** MIGRATED TO search-text COMPONENT
  searchPatients(search: HTMLInputElement): boolean {
    console.log(this.patients[0].toString());
    console.log(search.value);
    this.searchText = search.value;
    return false;
  }

  clearInput(inputElement: HTMLInputElement): boolean {
    console.log("clearing input element");
    inputElement.value = '';
    this.searchText = '';
    return false;
  }
  */

  searchResultsReceived(results: string): void {
    console.log('received results: ' + results);
    this.filter = results;
  }


}
