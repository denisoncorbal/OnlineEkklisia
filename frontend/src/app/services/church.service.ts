import { Injectable } from '@angular/core';
import * as constants from '../constants/constants';
import { Church } from '../models/church';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, firstValueFrom, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChurchService {

  private churchUrl = 'http://localhost:' + constants.BACKEND_PORT + '/api/' + constants.BACKEND_VERSION + '/church';

  constructor(private httpClient: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  async createChurch(church: Church) {
    await firstValueFrom(this.httpClient.post<Church>(this.churchUrl, JSON.stringify(church), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError),
      )
    )
  }

  getChurches(): Observable<Church[]> {
    return this.httpClient.get<Church[]>(this.churchUrl)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  async getChurch(id: number): Promise<Church> {
    return await firstValueFrom(this.httpClient.get<Church>(this.churchUrl + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
    )
  }

  handleError(error: HttpErrorResponse) {
    return throwError(() => new Error(error.error.message));
  }

}
