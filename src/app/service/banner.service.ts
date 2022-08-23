import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Banner } from '../model/banner';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  bannerURL = 'https://backendmpp.herokuapp.com/banner/';

  constructor(private httpClient: HttpClient) { }

  public getBanner():Observable<Banner[]>{
    return this.httpClient.get<Banner[]>(this.bannerURL+"list");
  }

  public createBanner(banner: Banner):Observable<any>{
    return this.httpClient.post<any>(this.bannerURL+"create", banner);
  }

  public updateBanner (id: number, banner: Banner):Observable<any>{
    return this.httpClient.put<any>(this.bannerURL+`update/${id}`, banner);
  }
}
