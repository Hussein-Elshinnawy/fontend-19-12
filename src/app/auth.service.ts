import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }

  signup(formData:object):Observable<any>
  {
    return this._HttpClient.post('https://conback-git-milcu18076-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/admin/signup',formData)

  }
}

