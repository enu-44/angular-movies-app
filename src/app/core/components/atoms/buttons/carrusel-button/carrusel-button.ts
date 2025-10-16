import { Component, input, output } from '@angular/core';
import { SvgIconComponent } from '@ngneat/svg-icon';

@Component({
  selector: 'app-carrusel-button',
  standalone: true,
  imports: [SvgIconComponent],
  templateUrl: './carrusel-button.html',
  styleUrl: './carrusel-button.scss'
})
export class CarruselButton {
  position = input<'left' | 'right'>('left');
  ariaLabel = input<string>('Scroll');
  class = input<string>('');
  onClick = output<void>();


  getIcon(): string {
    return this.position() === 'left'
      ? 'arrow-left'
      : 'arrow-right';
  }
}

