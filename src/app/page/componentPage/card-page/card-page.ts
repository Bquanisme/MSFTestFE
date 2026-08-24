import { Component, inject, signal } from '@angular/core';
import { Breadcrumb } from "../../../components/breadcrumb/breadcrumb";
import { CardService } from '../../../service/component/card/card-service';
import { Card } from '../../../typescript/home';
import { map, tap } from 'rxjs';
import { MatIcon } from "@angular/material/icon";
import { Toggle } from "../../../components/toggle/toggle";

@Component({
  selector: 'app-card-page',
  imports: [Breadcrumb, MatIcon, Toggle],
  templateUrl: './card-page.html',
  styleUrl: './card-page.css',
})
export class CardPage {

  private cardService = inject(CardService)

  cardDataRow1 = signal<Card[]>([])
  cardDataRow3 = signal<Card[]>([])
  cardDataRow4 = signal<Card[]>([])
  cardDataRow5 = signal<Card[]>([])
  cardDataRow6 = signal<Card[]>([])
  cardDataRow7 = signal<Card[]>([])

  authLogo = '/adminLogo.jpg'

  backgroundToggle = '#06c00f'

  scrollToTop(event: Event) {
    event.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  cardRow1() {
    this.cardService.card1()
    .pipe(
      // tap(data => console.log(data)),
      map(res => res.data) 
    )
    .subscribe(data => {
      this.cardDataRow1.set(data)
    })
  }

  cardRow3() {
    this.cardService.card3()
    .pipe(
      // tap(data => console.log(data)),
      map(res => res.data) 
    )
    .subscribe(data => {
      this.cardDataRow3.set(data)
    })
  }

  cardRow4() {
    this.cardService.card4()
    .pipe(
      // tap(data => console.log(data)),
      map(res => res.data) 
    )
    .subscribe(data => {
      this.cardDataRow4.set(data)
    })
  }

  cardRow5() {
    this.cardService.card5()
    .pipe(
      // tap(data => console.log(data)),
      map(res => res.data) 
    )
    .subscribe(data => {
      this.cardDataRow5.set(data)
    })
  }

  cardRow6() {
    this.cardService.card6()
    .pipe(
      tap(data => console.log(data)),
      map(res => res.data) 
    )
    .subscribe(data => {
      this.cardDataRow6.set(data)
    })
  }

  cardRow7() {
    this.cardService.card7()
    .pipe(
      // tap(data => console.log(data)),
      map(res => res.data) 
    )
    .subscribe(data => {
      this.cardDataRow7.set(data)
    })
  }

   ngOnInit() {
    this.cardRow1();
    this.cardRow3();
    this.cardRow4();
    this.cardRow5();
    this.cardRow6();
    this.cardRow7();
  }

}
