import { Component } from '@angular/core';
import { IconInput } from "../icon-input/icon-input";

@Component({
  selector: 'app-navbar',
  imports: [IconInput],
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

}
