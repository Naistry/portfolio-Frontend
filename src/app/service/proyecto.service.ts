import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyectos } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  proyectoURL = 'http://localhost:8080/proyectos/';
  constructor(private httClient: HttpClient) { }

  public getProyectos():Observable<Proyectos[]>{
    return this.httClient.get<Proyectos[]>(this.proyectoURL + 'list');
  }

  public details(id:number):Observable<Proyectos>{
    return this.httClient.get<Proyectos>(this.proyectoURL+`detail/${id}`);
  }

  public createProyecto(proyecto: Proyectos):Observable<any>{
    return this.httClient.post<any>(this.proyectoURL+'create', proyecto);
  }

  public deleteProyecto(id: number):Observable<any>{
    return this.httClient.delete<any>(this.proyectoURL+`delete/${id}`);
  }

  public upDateProyecto(id: number, proyecto: Proyectos):Observable<any>{
    return this.httClient.put<any>(this.proyectoURL+`update/${id}`, proyecto);
  }

}
