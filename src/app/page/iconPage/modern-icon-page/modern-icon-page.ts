import { Component, inject, signal } from '@angular/core';
import { Breadcrumb } from '../../../components/breadcrumb/breadcrumb';
import { FontAwesomeIcon, IconCategory, IconTab } from '../../../typescript/home';
import { IconService } from '../../../service/icon/icon-service';
import { ChangeDetectorRef } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-modern-icon-page',
  imports: [Breadcrumb, FormsModule],
  templateUrl: './modern-icon-page.html',
  styleUrl: './modern-icon-page.css',
})
export class ModernIconPage {
  private iconService = inject(IconService)

  private cdr = inject(ChangeDetectorRef)

  iconModern = this.iconService.icon()

  iconTabs = this.iconService.iconTab()

  iconBootstrap = this.iconService.iconBootstrap()

  activeIconTab = signal('FA6');

  selectedIconTab(id: string) : void {
    this.activeIconTab.set(id)
  }

  

  getActiveIconTab(
    tabs: IconTab[],
    activeId: string
  ): IconTab | undefined {

    return tabs.find(tab => tab.id === activeId);
  }



  copyCode(item: FontAwesomeIcon) {
    const code = `<i class="${item.icon}"></i>`;

    navigator.clipboard.writeText(code);

    item.copied = true;

    setTimeout(() => {
      item.copied = false;
      this.cdr.detectChanges();
    }, 1000);
  
  }


  searchText = '';
  searchOutlineText = '';
  

  filteredIconModern: IconCategory[] = [];
  filteredIconOutlineModern: IconCategory[] = [];

  ngOnInit() {
    this.filteredIconModern = this.iconModern;
    this.filteredIconOutlineModern = this.iconBootstrap
  }

  searchIcons() {
    const keyword = this.searchText.trim().toLowerCase();

    if (!keyword) {
      this.filteredIconModern = this.iconModern;
      return;
    }

    this.filteredIconModern = this.iconModern
      .map(category => ({
        ...category,
        icons: category.icons.filter(item =>
          item.name.toLowerCase().includes(keyword)
        )
      }))
      // .filter(category => category.icons.length > 0);

    console.log(this.searchText)
  }


  searchOutlineIcons() {
    const keyword = this.searchOutlineText.trim().toLowerCase();

    if (!keyword) {
      this.filteredIconOutlineModern = this.iconBootstrap;
      return;
    }

    this.filteredIconOutlineModern = this.iconBootstrap
      .map(category => ({
        ...category,
        icons: category.icons.filter(item =>
          item.name.toLowerCase().includes(keyword)
        )
      }))

    console.log(this.searchOutlineText)
  }

  
}
