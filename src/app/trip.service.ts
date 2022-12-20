import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private _HttpClient:HttpClient) { }

  create(tripData:any):Observable<any>
  {
    return this._HttpClient.post('https://back100-milcu18076-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/admin/create',tripData)

  }

  getAll():Observable<any>
  {
    return this._HttpClient.get('https://back100-milcu18076-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/admin/getAllTrips')

  }


  updateTrip(tripData:any, id:number):Observable<any>
  {
    return this._HttpClient.put('https://back100-milcu18076-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/admin/updateTrip/'+id,tripData)

  }

  deleteTrip(id:number):Observable<any>
  {
    return this._HttpClient.delete('https://back100-milcu18076-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/admin/deleteTrip/'+id)

  }

  


}
