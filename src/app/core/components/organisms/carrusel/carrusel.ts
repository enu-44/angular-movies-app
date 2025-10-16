import {
  Component,
  ElementRef,
  TemplateRef,
  input,
  viewChild,
  signal,
  ChangeDetectorRef,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarruselButton } from '../../atoms/buttons/carrusel-button/carrusel-button';

@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [CommonModule, CarruselButton],
  templateUrl: './carrusel.html',
  styleUrl: './carrusel.scss',
})
export class CarruselComponent {
  items = input<unknown[]>([]);
  itemTemplate = input<TemplateRef<any>>();
  scrollContainer = viewChild<ElementRef<HTMLDivElement>>('scrollContainer');
  canScrollLeft = signal(false);
  canScrollRight = signal(false);
  constructor(private cdr: ChangeDetectorRef) {
  }

   ngAfterViewInit() {
    this.checkScroll();
    this.cdr.detectChanges();
  }

  checkScroll() {
    const el = this.scrollContainer()?.nativeElement;
    if (!el) return;
    this.canScrollLeft.set(el.scrollLeft > 0);
    this.canScrollRight.set(el.scrollLeft + el.clientWidth < el.scrollWidth);
  }

  scrollLeft() {
    this.scrollContainer()?.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
  }

  scrollRight() {
    this.scrollContainer()?.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
  }
}
