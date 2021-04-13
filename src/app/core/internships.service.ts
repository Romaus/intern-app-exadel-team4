import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Internship, Training} from '../types';

@Injectable({
  providedIn: 'root'
})

export class InternshipsService {
  basePath = 'http://localhost:8080/api/internships';
  trainings: Training[] = [
    {
      country: 'Belarus',
      city: 'Mins',
      form: 'Online',
      technology: 'HTML',
      img: 'assets/icons/html.svg',
      date: '25 april 2021',
    },
    {
      country: 'Belarus',
      city: 'Gomel',
      form: 'Online',
      technology: 'CSS',
      img: 'assets/icons/html.svg',
      date: '25 april 2021',
    }
  ];
  constructor(private http: HttpClient) {
  }

  getInternshipList(){
    return this.http.get<Internship[]>(this.basePath);
  }

  getInternshipById(id: string){
    return this.http.get<Internship>(`${this.basePath}/${id}`);
  }

  getTrainingsLocal(){
    return this.trainings;
  }
}
