import { TestBed } from '@angular/core/testing';

import { HttpClient, HttpClientModule, HttpErrorResponse, HttpResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { Church } from '../models/church';
import { ChurchService } from './church.service';

describe('ChurchService', () => {
  let service: ChurchService;
  let mockHttpClient: HttpClient;
  let mockChurchService: ChurchService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ChurchService, HttpClient],
    });
    service = TestBed.inject(ChurchService);
    mockChurchService = service as jasmine.SpyObj<ChurchService>;
    mockHttpClient = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should call httpclient and perform post on createChurch', () => {
    const spyHttpClient = spyOn(mockHttpClient, 'post').and.returnValue(new Observable<Church>(
      (observer) => {
        observer.next({ id: 1, name: 'Church', abbreviation: 'CHC', cnpj: '00112233445566' } as Church);
        observer.complete();
      }
    ));
    service.createChurch({ name: 'Church', abbreviation: 'CHC', cnpj: '00112233445566' });
    expect(spyHttpClient).toHaveBeenCalled();
  })

  it('should call httpclient and perform put on updateChurch', () => {
    const spyHttpClient = spyOn(mockHttpClient, 'put').and.returnValue(new Observable<Church>(
      (observer) => {
        observer.next({ id: 1, name: 'Church', abbreviation: 'CHC', cnpj: '00112233445566' } as Church);
        observer.complete();
      }
    ));
    service.updateChurch({ id: 1, name: 'Church', abbreviation: 'CHC', cnpj: '00112233445566' });
    expect(spyHttpClient).toHaveBeenCalled();
  })

  it('should call httpclient and perform delete on deleteChurch', () => {
    const spyHttpClient = spyOn(mockHttpClient, 'delete').and.returnValue(of(new HttpResponse()));
    service.deleteChurch(1);
    expect(spyHttpClient).toHaveBeenCalled();
  })

  it('should throw error on handleError', () => {
    service.handleError(new HttpErrorResponse({ status: 404 })).subscribe({ error: (error) => expect(error).toBeTruthy() });
  })
});
