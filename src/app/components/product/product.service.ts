import { Product } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = 'http://localhost:3001/products';

  constructor( private snackBar: MatSnackBar, private http: HttpClient) { }

  showSnackBar(msg: string): void {
    this.snackBar.open(msg,'X',{
      duration: 3000,
      verticalPosition: "top",
      horizontalPosition: "right",
    });
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  read() : Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  readById(id: string| null) : Observable<Product> {
    let url = `${this.baseUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  udpdate(product: Product) :Observable<Product> {
    let url: string = `${this.baseUrl}/${product.id}`
    return this.http.put<Product>(url, product);
  }

  delete(id: string): Observable<Product> {
    let url : string = `${this.baseUrl}/${id}`; 
    return this.http.delete<Product>(url);
  }
}
