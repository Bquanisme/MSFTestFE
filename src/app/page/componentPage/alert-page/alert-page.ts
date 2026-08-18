import { Component, inject, signal } from '@angular/core';
import { Breadcrumb } from "../../../components/breadcrumb/breadcrumb";
import { AlertService } from '../../../service/component/alert/alert-service';
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-alert-page',
  imports: [Breadcrumb, MatIcon],
  templateUrl: './alert-page.html',
  styleUrl: './alert-page.css',
})
export class AlertPage {

  private alertService = inject(AlertService)

  firstAlert = this.alertService.alertFirst()

  linkAlert = this.alertService.alertLink()

  dismissAlert = this.alertService.alertDismiss()

  contentAlert = this.alertService.alertContent()



  alerts = signal(this.dismissAlert)

  handleCloseAlert(id: number) {
    this.alerts.update(alerts =>
      alerts.map(alert =>
        alert.id === id
          ? { ...alert, isShow: false }
          : alert
      )
    );
  }



  handleAlertClick(event: Event) {
    const target = event.target as HTMLElement;
    const link = target.closest('a');

    if (link) {
      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
}
