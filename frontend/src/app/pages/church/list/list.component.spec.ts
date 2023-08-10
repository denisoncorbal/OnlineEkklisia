import { HttpClientModule } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Observable } from "rxjs";
import { Church } from "src/app/models/church";
import { ChurchService } from "src/app/services/church.service";
import { ListComponent } from "./list.component";

describe('ListComponent', () => {
  let mockChurchService: jasmine.SpyObj<ChurchService>;
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let spyChurchService: jasmine.Spy<(() => Observable<Church[]>) & jasmine.Spy<() => Observable<Church[]>>>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    mockChurchService = TestBed.inject(ChurchService) as jasmine.SpyObj<ChurchService>;
    spyChurchService = spyOn(mockChurchService, 'getChurches').and.returnValue(new Observable<Church[]>(
      (observer) => {
        observer.next([{ id: 1, name: 'Church', abbreviation: 'CHC', cnpj: '00112233445566' }] as Church[])
        observer.complete();
      }
    ));
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call servie on ngOnInit', () => {
    component.ngOnInit();
    expect(spyChurchService).toHaveBeenCalled();
  })
});
