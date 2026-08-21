import { Component, inject, signal } from '@angular/core';
import { MatIcon } from "@angular/material/icon";
import { WidgetService } from '../../service/widget/widget-service';
import { map, tap } from 'rxjs';
import { Widget } from '../../typescript/home';

@Component({
  selector: 'app-widget-page',
  imports: [MatIcon],
  templateUrl: './widget-page.html',
  styleUrl: './widget-page.css',
})
export class WidgetPage {

  private widgetService = inject(WidgetService)

  widgetDataRow1 = signal<Widget[]>([])
  widgetDataRow2 = signal<Widget[]>([])
  widgetDataRow3 = signal<Widget[]>([])
  widgetDataRow4 = signal<Widget[]>([])

  getRow1() {
    this.widgetService.widget1()
      .pipe(
        // tap(data => console.log('Row 1:', data)),
        map(res => res.data)
      )
      .subscribe(data => {
        this.widgetDataRow1.set(data)
      })
  }

  getRow2() {
    this.widgetService.widget2()
      .pipe(
        // tap(data => console.log('Row 2:', data)),
        map(res => res.data)
      )
      .subscribe((data) => {
        this.widgetDataRow2.set(data)
      })
  }

  getRow3() {
    this.widgetService.widget3()
      .pipe(
        // tap(data => console.log('Row 3:', data)),
        map(res => res.data)
      )
      .subscribe(data => {
        this.widgetDataRow3.set(data)
      })
  }

  getRow4() {
    this.widgetService.widget4()
      .pipe(
        // tap(data => console.log('Row 4:', data)),
        map(res => res.data)
      )
      .subscribe(data => {
        this.widgetDataRow4.set(data)
      })
  }

  ngOnInit() {
    this.getRow1();
    this.getRow2();
    this.getRow3();
    this.getRow4();
  }


}
