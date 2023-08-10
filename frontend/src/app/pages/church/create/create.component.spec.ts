import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChurchService } from 'src/app/services/church.service';
import { CreateComponent } from './create.component';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;
  let compiled: HTMLElement;
  let mockChurchService: jasmine.SpyObj<ChurchService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, HttpClientModule, FormsModule, ReactiveFormsModule],
      providers: [ChurchService]
    });
    mockChurchService = TestBed.inject(ChurchService) as jasmine.SpyObj<ChurchService>;
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

  it('should pass validation when valid church input', () => {
    component.name.setValue("Church");
    component.abbreviation.setValue("CHC");
    component.cnpj.setValue("00112233445566");

    expect(component.name.errors).toBeNull();
    expect(component.abbreviation.errors).toBeNull();
    expect(component.cnpj.errors).toBeNull();
  })

  it('should render required error message for name', () => {

    component.name.setValue('');
    fixture.detectChanges();
    expect(component.name.hasError('required')).toBeTruthy();

  })

  it('should render minLength error message for name', () => {
    component.name.setValue('AA');
    fixture.detectChanges();
    expect(component.name.hasError('minlength')).toBeTruthy();
  })

  it('should render maxLength error message for name', () => {
    component.name.setValue('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
    fixture.detectChanges();
    expect(component.name.hasError('maxlength')).toBeTruthy();
  })

  it('should render pattern error message for name', () => {
    component.name.setValue('*,./');
    fixture.detectChanges();
    expect(component.name.hasError('pattern')).toBeTruthy();
  })

  it('should render required error message for abbreviation', () => {

    component.abbreviation.setValue('');
    fixture.detectChanges();
    expect(component.abbreviation.hasError('required')).toBeTruthy();

  })

  it('should render minLength error message for abbreviation', () => {
    component.abbreviation.setValue('AA');
    fixture.detectChanges();
    expect(component.abbreviation.hasError('minlength')).toBeTruthy();
  })

  it('should render maxLength error message for abbreviation', () => {
    component.abbreviation.setValue('AAAAAAAAAAA');
    fixture.detectChanges();
    expect(component.abbreviation.hasError('maxlength')).toBeTruthy();
  })

  it('should render pattern error message for abbreviation', () => {
    component.abbreviation.setValue('*,./');
    fixture.detectChanges();
    expect(component.abbreviation.hasError('pattern')).toBeTruthy();
  })

  it('should render required error message for cnpj', () => {

    component.cnpj.setValue('');
    fixture.detectChanges();
    expect(component.cnpj.hasError('required')).toBeTruthy();

  })

  it('should render minLength error message for cnpj', () => {
    component.cnpj.setValue('0011223344556');
    fixture.detectChanges();
    expect(component.cnpj.hasError('minlength')).toBeTruthy();
  })

  it('should render maxLength error message for cnpj', () => {
    component.cnpj.setValue('001122334455667');
    fixture.detectChanges();
    expect(component.cnpj.hasError('maxlength')).toBeTruthy();
  })

  it('should render pattern error message for cnpj', () => {
    component.cnpj.setValue('A0112233445566');
    fixture.detectChanges();
    expect(component.cnpj.hasError('pattern')).toBeTruthy();
  })

  it('should call service with valid church', () => {
    const spyChurchService = spyOn(mockChurchService, 'createChurch');
    component.name.setValue("Church");
    component.abbreviation.setValue("CHC");
    component.cnpj.setValue("00112233445566");
    component.submitForm();
    expect(spyChurchService).toHaveBeenCalled();
  })
});
