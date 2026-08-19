import { Component, signal } from '@angular/core';
import { Header } from "../components/header/header";
import { Sidebar } from "../components/sidebar/sidebar";
import { Footer } from "../components/footer/footer";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [Header, Sidebar, RouterOutlet, Footer],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {
  isDrawerOpen = signal(false);

  setIsDrawerOpen() {
    this.isDrawerOpen.update(value => !value);
  }
}
