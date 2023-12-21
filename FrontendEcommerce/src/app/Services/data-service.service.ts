import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/photos';
  private $combineData = new BehaviorSubject<any[]>([]);

  constructor(private http: HttpClient) {
  }

  comibeSubjectdata(data: any) {
    this.$combineData.next(data);
  }

  getSubjectData() {
    return this.$combineData.asObservable();
  }

  getData(page: number, pageSize: number): Observable<any[]> {
    const start = (page - 1) * pageSize;
    return this.http.get<any[]>(
      `${this.apiUrl}?_start=${start}&_limit=${pageSize}`
    );
  }

  getDataLength() {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  getItems(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  searchItems(searchTerm: string): Observable<any[]> {
    const searchUrl = `${this.apiUrl}/${searchTerm}?id`;
    return this.http.get<any[]>(searchUrl);
  }
  private dataArray: any[] = []; // Your data array

  searchById(id: number): Observable<any> {
    const result = this.dataArray.find((item) => item.id === id);
    return of(result); // Wrap the result in an Observable
  }
}
