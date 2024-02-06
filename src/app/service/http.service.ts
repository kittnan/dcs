import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }
  Url: any = environment.UrlApi


  RawData_lastData(): Observable<any> {
    return this.http.get(this.Url + "/RawData/GetLastData/")
  }

  Master_getall(): Observable<any> {
    return this.http.get(this.Url + "/Master_machine/")
  }

  Master_add(data: any): Observable<any> {
    return this.http.post(this.Url + "/Master_machine/", data)
  }
  Master_update(id: any, data: any): Observable<any> {
    return this.http.put(this.Url + "/Master_machine/insert/" + id, data)
  }
  Master_DelByCondition(data: any): Observable<any> {
    return this.http.post(this.Url + "/Master_machine/delByCondition/", data)
  }





}

// getDataView
