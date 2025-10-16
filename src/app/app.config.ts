import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideIcons } from '@ng-icons/core';
import { heroChevronLeft, heroChevronRight, heroMagnifyingGlass, heroStar, heroUsers } from '@ng-icons/heroicons/outline';
import { heroStarSolid } from '@ng-icons/heroicons/solid';
import { provideSvgIcons } from '@ngneat/svg-icon';
import { arrowLeftIcon } from './core/icons/arrow-left';
import { arrowRightIcon } from './core/icons/arrow-right';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideIcons({
      heroUsers,
      heroMagnifyingGlass,
      heroChevronLeft,
      heroChevronRight,
      heroStarSolid
    }),
    provideSvgIcons([arrowLeftIcon, arrowRightIcon])
  ]
};
