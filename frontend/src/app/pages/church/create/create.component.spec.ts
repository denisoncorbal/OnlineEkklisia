import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComponent } from './create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule]
    });
    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement as HTMLElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render input name', () => {
    const name = compiled.querySelector('#name');
    expect(name).toBeTruthy();
    expect(name).toBeInstanceOf(HTMLInputElement);
  })

  it('should render input abbreviation', () => {
    const abbreviation = compiled.querySelector('#abbreviation');
    expect(abbreviation).toBeTruthy();
    expect(abbreviation).toBeInstanceOf(HTMLInputElement);
  })

  it('should render input cnpj', () => {
    const cnpj = compiled.querySelector('#cnpj')
    expect(cnpj).toBeTruthy();
    expect(cnpj).toBeInstanceOf(HTMLInputElement);
  })

  it('should render submit button', () => {
    const submit = compiled.querySelector('button');
    expect(submit).toBeTruthy();
    expect(submit?.getAttribute('type')).toEqual('submit');
    expect(submit).toBeInstanceOf(HTMLButtonElement);
  })

  it('should process form on click submit', () => {
    const submit = compiled.querySelector('button');
    spyOn(component, 'submitForm');
    submit?.click();
    expect(component.submitForm).toHaveBeenCalledTimes(1);
  })
});
