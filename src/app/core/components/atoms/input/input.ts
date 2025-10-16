import { Component, input, output, OutputEmitterRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class Input {
  placeholder = input<string>('');
  type = input<'text' | 'email' | 'password' | 'number'>('text');
  control = input<FormControl | null>(null);
  class = input<string>('');
  errorMessage = input<string>('');
  valueChanged: OutputEmitterRef<string> = output<string>();

  // Para ngModel cuando no hay FormControl
  modelValue = '';
}
