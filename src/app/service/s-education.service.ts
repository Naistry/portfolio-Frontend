import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class SEducationService {
  eduURL= "http://localhost:8080/education/";
  constructor( private httpClient: HttpClient) { }

  public lista():Observable<Educacion[]>{
    return this.httpClient.get<Educacion[]>(this.eduURL + 'lista');
    
  }

  public details(id: number):Observable<Educacion>{
    return this.httpClient.get<Educacion>(this.eduURL + `detail/${id}`);
  }

  public save(education: Educacion):Observable<any>{
    return this.httpClient.post<any>(this.eduURL + 'create', education);
  }

  public update(id: number, education: Educacion):Observable<any>{

    return this.httpClient.put<any>(this.eduURL + `update/${id}`, education);
  }

  public delete(id: number):Observable<any>{
    
    return this.httpClient.delete<any>(this.eduURL + `delete/${id}`);
  }
}
