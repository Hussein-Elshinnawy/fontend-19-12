import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(private _HttpClient:HttpClient) { }

  create(stationData:any):Observable<any>
  {
    return this._HttpClient.post('https://conback-git-milcu18076-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/station/create',stationData)

  }

  getAllStations():Observable<any>
  {
    return this._HttpClient.get('https://conback-git-milcu18076-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/station/getall')

  }

  deleteStation(id:number):Observable<any>
  {
    return this._HttpClient.delete('https://conback-git-milcu18076-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/station/delete/'+id)

  }
  
}
