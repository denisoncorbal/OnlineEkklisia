import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { Church } from 'src/app/models/church';
import { ChurchService } from 'src/app/services/church.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass'],
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, NgIf, NgxMaskDirective, NgxMaskPipe, MatButtonModule],
  providers: [provideNgxMask()],
  standalone: true
})
export class CreateComponent {

  constructor(private churchService: ChurchService) { }

  name = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50), Validators.pattern(/^[a-zA-Z0-9àáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/)]);
  abbreviation = new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9]{3,10}$/), Validators.minLength(3), Validators.maxLength(10)]);
  cnpj = new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/), Validators.minLength(14), Validators.maxLength(14)
  ]);

  getNameErrorMessage() {
    if (this.name.hasError('required')) {
      return 'Name cannot be empty';
    }
    if (this.name.hasError('minlength')) {
      return 'Name has to be at least 3 characters';
    }
    if (this.name.hasError('maxlength')) {
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
    if (this.abbreviation.hasError('minlength')) {
      return 'Abbreviation has to be at least 3 characters';
    }
    if (this.abbreviation.hasError('maxlength')) {
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
    if (this.cnpj.hasError('minlength') || this.cnpj.hasError('maxlength')) {
      return 'CNPJ has to be 14 characters';
    }
    if (this.cnpj.hasError('pattern')) {
      return 'Remove the ilegal characters from CNPJ';
    }
    return 'Invalid CNPJ';
  }

  submitForm() {
    if (this.name.value && this.abbreviation.value && this.cnpj.value) {
      this.churchService.createChurch(
        {
          name: this.name.value,
          abbreviation: this.abbreviation.value,
          cnpj: this.cnpj.value
        } as Church
      )
    }
    this.name.reset();
    this.abbreviation.reset();
    this.cnpj.reset();
  }
}
