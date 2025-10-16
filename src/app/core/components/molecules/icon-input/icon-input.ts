import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';
import { Input } from '../../atoms/input/input';
import { NgIcon } from '@ng-icons/core';
@Component({
  selector: 'app-icon-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, Input, NgIcon],
  templateUrl: './icon-input.html',
  styleUrl: './icon-input.scss',
})
export class IconInput {
  label = input<string>('');
  placeholder = input<string>('');
  type = input<'text' | 'email' | 'password' | 'number'>('text');
  control = input<FormControl | null>(null);
  class = input<string>('');
  icon = input<string>('');
  onValueChanged = output<string>(); 
}
