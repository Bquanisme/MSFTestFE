import { Component, inject } from '@angular/core';
import { DashboardService } from '../../../service/dashboard/dashboard-service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-topproducts-page',
  imports: [MatIconModule],
  templateUrl: './topproducts-page.html',
  styleUrl: '../recentactivities-page/recentactivities-page.css',
})
export class TopproductsPage {

  private dashboardService = inject(DashboardService)

  topProducts = this.dashboardService.topProducts()

}
