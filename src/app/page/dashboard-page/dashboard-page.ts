import { Component, inject } from '@angular/core';
import { DashboardService } from '../../service/dashboard/dashboard-service';
import { MatIcon } from "@angular/material/icon";
import { DecimalPipe } from '@angular/common'; //thêm thập phân sau chữ số cuối cùng

@Component({
  selector: 'app-dashboard-page',
  imports: [MatIcon, DecimalPipe],
  templateUrl: './dashboard-page.html',
  styleUrl: './dashboard-page.css',
})
export class DashboardPage {

  private dashboardService = inject(DashboardService)

  dashboard = this.dashboardService.dashboard()

  activities = this.dashboardService.recentActivities()

  products = this.dashboardService.topProducts()
}
