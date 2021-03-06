import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { catchError,map } from 'rxjs/operators';

import { NotFoundError } from './../common/not-found-error';
import { BadInput } from './../common/bad-input';
import { AppError } from './../common/app-error';
//import { error } from '@angular/compiler/src/util';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private url:string, private http:HttpClient) { }

  getAll(){
  return this.http.get(this.url).pipe(map(response=>response),catchError((this.handleError) ));
  }

  create(resource){
    //return Observable.throw(new AppError());
      return this.http.post(this.url,JSON.stringify(resource)).pipe(map(response=>response),catchError((this.handleError) ));
}

  update(resource){
    return this.http.patch(this.url+"/"+resource.id,JSON.stringify({ isRead : true })).pipe(map(response=>response),catchError((this.handleError)))
    //this.http.put(this.url,JSON.stringify(post)).subscribe();
  }

  delete(resource){  //return Observable.throw(new AppError());
      return this.http.delete(this.url+"/"+resource.id).pipe(map(response=>response),catchError((this.handleError) ));
   }

   private handleError(error : Response){
    if(error.status==400)
      return Observable.throw(new BadInput(error));

    if(error.status==404)
    return Observable.throw(new NotFoundError(error)) 

  return Observable.throw(new AppError(error))
   }
}
