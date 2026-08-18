import { Component, inject, signal } from '@angular/core';
import { TabService } from '../../../service/component/tab/tab-service';
import { Tab } from '../../../typescript/home';
import { Breadcrumb } from "../../../components/breadcrumb/breadcrumb";

@Component({
  selector: 'app-tab-page',
  imports: [Breadcrumb],
  templateUrl: './tab-page.html',
  styleUrl: './tab-page.css',
})
export class TabPage {

  private tabService = inject(TabService)

  defaultTabs = this.tabService.defaultTab()

  customTab = this.tabService.customTab()

  centerTab = this.tabService.centerTab()

  dynamicTab = this.tabService.dynamicTab()


  //Tab đầu tiên
  activeDefaultTab = signal('home');
  activeCustomTab = signal('home');
  activeCenteredTab = signal('home');
  activeDynamicTab = signal('home');

  selectDefaultTab(id: string): void {
    this.activeDefaultTab.set(id);
  }

  selectCustomTab(id: string): void {
    this.activeCustomTab.set(id);
  }

  selectCenteredTab(id: string): void {
    this.activeCenteredTab.set(id);
  }

  selectDynamicTab(id: string): void {
    this.activeDynamicTab.set(id);
  }

  getActiveTab(
    tabs: Tab[],
    activeId: string
  ): Tab | undefined {

    return tabs.find(tab => tab.id === activeId);
  }

}
