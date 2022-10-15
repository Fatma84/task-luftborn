import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './item.interface'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public constructor(private readonly http: HttpClient) { }

  public getItems(): Observable<Item[]> {
    return this.http.get<Item[]>('https://fakestoreapi.com/products?limit=10');
  }
}
