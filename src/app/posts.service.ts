import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DataService } from './services/data.service';
//import { error } from '@angular/compiler/src/util';
@Injectable({
  providedIn: 'root'
})
export class PostsService extends DataService {
 
  constructor(http:HttpClient) { super("http://jsonplaceholder.typicode.com/posts",http) }

}
