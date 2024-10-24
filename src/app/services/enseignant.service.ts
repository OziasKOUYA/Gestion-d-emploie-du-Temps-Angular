import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enseignant } from '../models/enseignant.model';

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  private url = 'http://localhost:8080/api/enseignant';

  constructor(private http: HttpClient) {}

  getEnseignants(): Observable<Enseignant[]> {
    return this.http.get<Enseignant[]>(this.url);
  }

  getEnseignantById(id: number): Observable<Enseignant> {
    return this.http.get<Enseignant>(`${this.url}/${id}`);
  }

  createEnseignant(Enseignant: Enseignant): Observable<Enseignant> {
    return this.http.post<Enseignant>(`${this.url}/save`, Enseignant);
  }

  updateEnseignant(Enseignant: Enseignant): Observable<Enseignant> {
    return this.http.put<Enseignant>(`${this.url}/update/${Enseignant.id}`, Enseignant);
  }

  deleteEnseignant(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  getEnseignantsByNom(nom: string): Observable<Enseignant[]> {
    return this.http.get<Enseignant[]>(`${this.url}/search/${nom}`);
  }
}
