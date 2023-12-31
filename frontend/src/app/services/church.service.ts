import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, firstValueFrom, retry, throwError } from 'rxjs';
import * as constants from '../constants/constants';
import { Church } from '../models/church';

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

  async updateChurch(church: Church) {
    await firstValueFrom(this.httpClient.put<Church>(this.churchUrl + '/' + church.id, JSON.stringify(church), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError),
      )
    )
  }

  async deleteChurch(id: number) {
    await firstValueFrom(this.httpClient.delete(this.churchUrl + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError),
      )
    )
  }

  handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError(() => new Error(error.message));
  }

}
