import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    userBaseUrl:string = 'http://localhost:8080/user/';

  constructor(private http: HttpClient) { }

  register(user:any){
   return this.http.post<any>(`${this.userBaseUrl}register`,user, { responseType: 'text' as 'json' })
   .pipe(map((res:any)=>res))
  }

  // authenticate(user: any) {
  //   return this.http.post<any>(`${this.userBaseUrl}authenticate`, user, { responseType: 'text' as 'json' })
  //   .pipe(map((res:any)=>res));
  // }

  // authenticate(username: string, password: string) {
  //   const params = new HttpParams()
  //     .set('username', username)
  //     .set('password', password);
      
  //   return this.http.post<any>(`${this.userBaseUrl}authenticate`, null, { params });
  // }

  authenticate(username: string, password: string) {
    const loginData = { email: username, password: password };
    return this.http.post<any>(`${this.userBaseUrl}authenticate`, loginData, { responseType: 'text' as 'json' });
  }
}
