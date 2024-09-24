import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class RandomUserService {

  constructor(private http: HttpClient) {}

  public getRandomUser(): Observable<any> {
    return this.http.get("https://randomuser.me/api/");
  }

}
