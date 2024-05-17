import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'text/plain' })
    };

    constructor(private http: HttpClient) { }
    getMessage() {
        return this.http.get('http://localhost:3000/get', { responseType: 'text' });
    }
}