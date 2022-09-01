import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Psicologos } from '../models/Psicologos';
import { CalendarioSemana } from '../models/CalendarioSemana';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  private apiUrl = 'https://localhost:44383/Agenda/'

  constructor(private http: HttpClient) { }

  obterPsicologos(): Observable<Psicologos[]>{
    return this.http.get<Psicologos[]>(this.apiUrl + 'ObterPsicologos');
  }

  obterCalendarioSemana(id : number): Observable<CalendarioSemana[]>{
    return this.http.get<CalendarioSemana[]>(this.apiUrl + 'ObterCalendarioSemana/' + id);
  }
}
