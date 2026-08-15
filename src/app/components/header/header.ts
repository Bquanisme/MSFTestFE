import { Component, input, output } from '@angular/core';
import { Badge } from '../badge/badge';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [Badge, MatIconModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  setIsDrawerOpen = output<void>()
  

  tabLogo = '/tabs.png'
  authLogo = '/adminLogo.jpg'

}
