import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private httpClient: HttpClient) { }

  //for github profile
  getProfile(searchUser){
    let dataUrl = 'http://api.github.com/users/ ${searchUser}';
  }

  //for github repositories
}
