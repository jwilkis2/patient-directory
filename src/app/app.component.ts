import { Component } from '@angular/core';
import { Patient } from './patient.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  patients: Patient[];

  constructor() {
    this.patients = [
      new Patient(
        'George',
        'Bluth',
        'George.Bluth@gmail.com',
        '/assets/images/patients/george.bluth.jpg',
        'Stein'),
      new Patient(
        'Lucille',
        'Bluth',
        'Lucille.Bluth@gmail.com',
        '/assets/images/patients/lucille.bluth.jpg',
        'Stein'),
      new Patient(
        'Oscar',
        'Bluth',
        'Oscar.Bluth@gmail.com',
        '/assets/images/patients/oscar.bluth.jpg',
        'Norman'),
      new Patient(
        'George Oscar',
        'Bluth',
        'George.Oscar.Bluth@gmail.com',
        '/assets/images/patients/gob.jpg',
        'Stein'),
      new Patient(
        'Michael',
        'Bluth',
        'Michael.Bluth@gmail.com',
        '/assets/images/patients/michael.bluth.jpg',
        'Fishman'),
      new Patient(
        'Lindsay',
        'Funke',
        'Lindsay.Funke@gmail.com',
        '/assets/images/patients/lindsay.funke.jpg',
        'Norman'),
      new Patient(
        'Tobias',
        'Funke',
        'Tobias.Funke@gmail.com',
        '/assets/images/patients/tobias.funke.jpg',
        'Norman'),
      new Patient(
        'Buster',
        'Bluth',
        'Buster.Bluth@gmail.com',
        '/assets/images/patients/buster.bluth.jpg',
        'Fishman'),
      new Patient(
        'George Michael',
        'Bluth',
        'George.Michael.Bluth@gmail.com',
        '/assets/images/patients/george.michael.jpg',
        'Fishman'),
      new Patient(
        'Maeby',
        'Funke',
        'Maeby.Funke@gmail.com',
        '/assets/images/patients/maeby.funke.jpg',
        'Norman'),
    ];
  }
}
