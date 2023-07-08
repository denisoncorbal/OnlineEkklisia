import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass'],
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, NgIf, NgxMaskDirective, NgxMaskPipe],
  providers: [provideNgxMask()],
  standalone: true
})
export class CreateComponent {
  name = new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]{3,50}$/), Validators.minLength(3), Validators.maxLength(50)]);
  abbreviation = new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{3,10}$/), Validators.minLength(3), Validators.maxLength(10)]);
  cnpj = new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{14,14}$/), Validators.minLength(14), Validators.maxLength(14)
  ]);

  getNameErrorMessage() {
    if (this.name.hasError('required')) {
      return 'Name cannot be empty';
    }
    if (this.name.hasError('minLength')) {
      return 'Name has to be at least 3 characters';
    }
    if (this.name.hasError('maxLength')) {
      return 'Name has to be at maximum 50 characters';
    }
    if (this.name.hasError('pattern')) {
      return 'Remove the ilegal characters from name';
    }
    return 'Invalid name';
  }

  getAbbreviationErrorMessage() {
    if (this.abbreviation.hasError('required')) {
      return 'Abbreviation cannot be empty';
    }
    if (this.abbreviation.hasError('minLength')) {
      return 'Abbreviation has to be at least 3 characters';
    }
    if (this.abbreviation.hasError('maxLength')) {
      return 'Abbreviation has to be at maximum 10 characters';
    }
    if (this.abbreviation.hasError('pattern')) {
      return 'Remove the ilegal characters from abbreviation';
    }
    return 'Invalid abbreviation';
  }

  getCnpjErrorMessage() {
    if (this.cnpj.hasError('required')) {
      return 'CNPJ cannot be empty';
    }
    if (this.cnpj.hasError('minLength') || this.cnpj.hasError('maxLength')) {
      return 'CNPJ has to be 14 characters';
    }
    if (this.cnpj.hasError('pattern')) {
      return 'Remove the ilegal characters from CNPJ';
    }
    return 'Invalid CNPJ';
  }

  submitForm() {
    // TODO submit request to backend api
    console.log("Church");
    console.log("Name: " + this.name.value);
    console.log("Abbreviation: " + this.abbreviation.value);
    console.log("CNPJ: " + this.cnpj.value);
  }
}
