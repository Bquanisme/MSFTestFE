import { Component, inject, input, output, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import type { ISidebarItem } from '../../typescript/home';
import { SidebarService } from '../../service/home/sidebar';
// import { getSidebar } from '../../mocks/sidebarApi';

@Component({
  selector: 'app-sidebar',
  imports: [MatIconModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})

export class Sidebar {

  isDrawerOpen = input(true);

  sidebar = signal<ISidebarItem[]>([]);

  openMenu = signal<number | null>(null);

  setIsDrawerOpen = output<boolean>();


  // nếu có private thì chỉ dùng trong ts
  router = inject(Router);

  private sidebarService = inject(SidebarService);

  

  constructor() {
    console.log('SIDEBAR CREATE')
    this.loadSidebar();
  }

  async loadSidebar() {
    const data = await this.sidebarService.getSidebar();
    this.sidebar.set(data);
  }


  handleMenuClick(item: ISidebarItem) {
    // Có submenu
    if (item.children) {
      this.openMenu.update(current =>
        current === item.id
          ? null
          : item.id
      );

      return;
    }

    if (item.path) {
      this.router.navigate([item.path]);
    }
  }


  handleChildClick(path: string) {
    this.router.navigate([path]);
  }



  isItemActive(item: ISidebarItem) {
    if (!item.path) {
      return false;
    }

    return this.router.url === item.path;
  }

  hasActiveChild(item: ISidebarItem) {
    if (!item.children) {
      return false;
    }

    return item.children.some(
      child => this.router.url === child.path
    );
  }


  openDrawer() {
    this.setIsDrawerOpen.emit(true)
  }

  closeDrawer() {
    this.setIsDrawerOpen.emit(false)
  }
}