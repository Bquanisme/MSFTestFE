import { Component, inject } from '@angular/core';
import { DashboardService } from '../../../service/dashboard/dashboard-service';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-recentactivities-page',
  imports: [MatIconModule],
  templateUrl: './recentactivities-page.html',
  styleUrl: './recentactivities-page.css',
})
export class RecentactivitiesPage {

  private dashboardService = inject(DashboardService)

  recentActivity = this.dashboardService.recentActivities()

}
