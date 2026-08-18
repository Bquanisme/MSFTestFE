import { Component, inject } from '@angular/core';
import { Breadcrumb } from "../../../components/breadcrumb/breadcrumb";
import { BadgeService } from '../../../service/component/badge/badge-service';
import { Badge } from "../../../components/badge/badge";
import { MatIcon } from "@angular/material/icon";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-badge-page',
  imports: [Breadcrumb, Badge, MatIcon, RouterLink],
  templateUrl: './badge-page.html',
  styleUrl: './badge-page.css',
})
export class BadgePage {

  private badge = inject(BadgeService)

  basic = this.badge.basicBadges()

  flat = this.badge.flatBadges()

  flatColor = this.badge.flatColorPillBadges()

  box = this.badge.badgeBoxs()

  navigation = this.badge.navigationBadges()

  buttonStatus = this.badge.buttonStatusBadge()

  linkBadge = this.badge.linkBadges()

  smallBadge = this.badge.smallBadges()

  outline = this.badge.outlineBadges()

  //Nhảy lên đầu trang
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
