import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = 'http://localhost:8080/api/lead/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:4200',
  })
};

interface Lead {
  id?: string | null,
  username?: string | null,
  email?: string | null
}

@Injectable({
  providedIn: 'root'
})

export class LeadService {
  constructor(private http: HttpClient) { }

  getAllLeads(page: number, size: number): Observable<any>{
    return this.http.get(API_URL + 'all', {
       params: {page, size}
    });
  };

  createLead(lead: Lead): Observable<any> {
    return this.http.post(API_URL + 'create', lead, { responseType: 'text' });
  };

  getExportFile(): Observable<any> {
    return this.http.get(API_URL + 'export-file', { responseType: 'text'})
  };

  getLeadByFilter(type: string | any, value: any): Observable<any> {
    return this.http.get(API_URL + type + '/' + value, {});
  };

}
