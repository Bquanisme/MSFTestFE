import { Component, inject } from '@angular/core';
import { Breadcrumb } from '../../../components/breadcrumb/breadcrumb';
import { IconService } from '../../../service/icon/icon-service';
import { ChangeDetectorRef } from '@angular/core';
import { FontAwesomeIcon } from '../../../typescript/home';

@Component({
  selector: 'app-font-awesome-page',
  imports: [Breadcrumb],
  templateUrl: './font-awesome-page.html',
  styleUrl: './font-awesome-page.css',
})
export class FontAwesomePage {

  private service = inject(IconService)

  fontAwesomeIcon = this.service.getIconFontAwesome();

  constructor(private cdr: ChangeDetectorRef) {}

  copyCode(item: FontAwesomeIcon) {
    const code = `<i class="${item.icon} ${item.color}"></i>`;

    navigator.clipboard.writeText(code);

    item.copied = true;

    setTimeout(() => {
      item.copied = false;
      this.cdr.detectChanges();
    }, 1000);

  }

}