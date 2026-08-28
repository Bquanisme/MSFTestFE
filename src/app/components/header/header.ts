import {
  Component,
  inject,
  output,
  signal
} from '@angular/core';

import { Badge } from '../badge/badge';
import { MatIconModule } from '@angular/material/icon';

import { HeaderService } from '../../service/home/header/header-service';
import { map, tap } from 'rxjs';

import { HeaderTs } from '../../typescript/home';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  imports: [
    Badge,
    MatIconModule,
    FormsModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  setIsDrawerOpen = output<void>();


  tabLogo = '/tabs.png';

  authLogo = '/adminLogo.jpg';


  private headerService = inject(HeaderService);

  private router = inject(Router)


  notificationData = signal<HeaderTs[]>([]);

  messageData = signal<HeaderTs[]>([]);

  searchData = signal<HeaderTs[]>([]);



  showNotification = signal(false);

  showMessage = signal(false);

  showSearch = signal(false);

  showUser = signal(false);

  searchInput = "";



  toggleNotification() {

    this.showNotification.update(value => !value);

    this.showSearch.set(false)
    this.showMessage.set(false);
    this.showUser.set(false)

    if (this.showNotification()) {
      this.notificationHeader();
    }

  }


  toggleMessage() {

    this.showMessage.update(value => !value);

    this.showSearch.set(false)
    this.showNotification.set(false);
    this.showUser.set(false)

    if (this.showMessage()) {
      this.messageHeader();
    }

  }

  toggleSearch() {

    this.showSearch.update(value => !value);

    this.showMessage.set(false);
    this.showNotification.set(false);
    this.showUser.set(false)

    if (this.showSearch()) {
      this.searchHeader();
    }
  }


  toggleUser() {

    this.showUser.update(value => !value);

    this.showMessage.set(false);
    this.showNotification.set(false);
    this.showSearch.set(false)

  }



  notificationHeader() {

    this.headerService
      .notificaton()
      .pipe(
        tap(data => console.log(data)),
        map(res => res.data)
      )
      .subscribe(data => {

        this.notificationData.set(data);

      });

  }



  messageHeader() {

    this.headerService
      .message()
      .pipe(
        map(res => res.data)
      )
      .subscribe(data => {

        this.messageData.set(data);

      });

  }



  searchHeader() {

    this.headerService
      .search()
      .pipe(
        map(res => res.data)
      )
      .subscribe(data => {

        this.searchData.set(data);

      });

  }


  scrollToTop() {

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });


  }


  handleClose() {
    this.showSearch.set(false)

    this.showUser.set(false)

    this.showNotification.set(false)

    this.showMessage.set(false)

    this.searchInput = ''

    this.scrollToTop()

  }


  routerPath(item: any) {
    this.router.navigate([item])
    this.handleClose()
  } 

  


}