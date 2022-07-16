import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {User} from "../user";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RealworldService {

  private ApiServiceUrl= environment.ApiBaseUrl;

  constructor(private http: HttpClient) { }

  public getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.ApiServiceUrl}/user/all`)
  }

  public addUser(user: User): Observable<User>{
    return this.http.post<User>(`${this.ApiServiceUrl}/user/add`, user)
  }

  public getUserById(id: number): Observable<any>{
    return this.http.get(`${this.ApiServiceUrl}/user/find/${id}`)
  }

  public deleteUser(userId: number): Observable<void>{
    return this.http.delete<void>(`${this.ApiServiceUrl}/user/delete/${userId}`)

  }

  public updateUser(userId: number, user: User): Observable<User>{
    return this.http.put<User>(`${this.ApiServiceUrl}/user/update/${userId}`, user)
  }





}
