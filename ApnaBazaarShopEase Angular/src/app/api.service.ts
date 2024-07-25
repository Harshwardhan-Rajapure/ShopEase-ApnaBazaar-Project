import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl:string="http://localhost:8080/apnaapi/";

  constructor(private http : HttpClient) { }

  getProduct(){
    return this.http.get<any>(`${this.baseUrl}getallproducts`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  addProduct(product: any) {
    return this.http.post<any>(`${this.baseUrl}postproduct`, product)
      .pipe(
        map((res: any) => res),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}getproduct/${id}`);
  }

  updateProduct(id: number, product: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}putproduct/${id}`, product);
  }

  deleteProduct(productId: number): Observable<any> {
    // const url = `${this.apiUrl}/products/${productId}`;
    return this.http.delete<any>(`${this.baseUrl}deleteproduct/${productId}`);
  }
}
