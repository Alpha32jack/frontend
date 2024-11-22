import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiUrl = 'http://127.0.0.1:8000/api/students'
  constructor(private http: HttpClient) { }

  getStudents(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
  createStudent(studentData: any): Observable<any> {
    console.log('Datos enviados al backend:', studentData);  
    return this.http.post<any>(this.apiUrl, studentData);
  }
  login(credentials: { email: string; password: string }): Observable<any> {
    const loginUrl = `${this.apiUrl}/login`;
    return this.http.post<any>(loginUrl, credentials);
  }
  
}

