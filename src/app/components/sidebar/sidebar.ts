import { Component, inject, input, output, signal } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import type { ISidebarItem } from '../../typescript/home';
import { SidebarService } from '../../service/home/sidebar';

@Component({
  selector: 'app-sidebar',
  imports: [MatIconModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {

  // Mở bằng hamburger → ảnh hưởng layout
  isDrawerOpen = input(false);

  // Mở tạm bằng hover → không ảnh hưởng layout
  isHoverSidebar = signal(false);

  sidebar = signal<ISidebarItem[]>([]);

  openMenu = signal<number | null>(null);

  setIsDrawerOpen = output<boolean>();

  router = inject(Router);

  private sidebarService = inject(SidebarService);


  constructor() {
    console.log('SIDEBAR CREATE');
    this.loadSidebar();
  }


  async loadSidebar() {
    const data = await this.sidebarService.getSidebar();
    this.sidebar.set(data);
  }


  // =========================
  // HAMBURGER
  // =========================

  toggleDrawer() {
    this.setIsDrawerOpen.emit(!this.isDrawerOpen());
  }


  // =========================
  // HOVER
  // =========================

  openDrawer() {

    // Đã mở bằng hamburger
    // → hover không được làm gì
    if (this.isDrawerOpen()) {
      return;
    }

    // Chỉ mở tạm bằng hover
    this.isHoverSidebar.set(true);
  }


  closeDrawer() {

    // Đang mở bằng hamburger
    // → hover ra không được đóng
    if (this.isDrawerOpen()) {
      return;
    }

    // Đang mở do hover → đóng
    this.isHoverSidebar.set(false);
  }


  // =========================
  // MENU
  // =========================

  handleMenuClick(item: ISidebarItem) {

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


  isItemActive(item: any): boolean {

    const currentUrl = this.router.url.split('?')[0];

    if (item.id === 1) {
      return false;
    }

    if (item.children?.length) {
      return false;
    }

    return currentUrl === item.path;
  }


  hasActiveChild(item: ISidebarItem) {

    if (!item.children) {
      return false;
    }

    return item.children.some(
      child => this.router.url === child.path
    );
  }
}