import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  @Input() control!: FormControl;
  @Input() label!: string;
  @Input() mask!: string;

  hasErrors() {
    const { dirty, errors } = this.control;
    return dirty && errors;
  }
}
