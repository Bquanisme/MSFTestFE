import { Component, signal } from '@angular/core';
import { Breadcrumb } from "../../../components/breadcrumb/breadcrumb";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-switch-page',
  imports: [Breadcrumb, FormsModule],
  templateUrl: './switch-page.html',
  styleUrl: './switch-page.css',
})
export class SwitchPage {

  name = ""


  //  Bootstrap 5 Switches
  isCheckedDefault = signal(true)
  isCheckedCheck = signal(true)
  isCheckedCheckDisable = signal(true)
  isCheckedDisable = signal(false)

  isFocusedDefault = true;
  isFocusedChecked = true;



  // Colored Switches
  
  background1 = '#06c00f'
  
  toggleUpdateDefault() {
    this.isCheckedDefault.update(value => !value)
  }
  
  toggleUpdateCheck() {
    this.isCheckedCheck.update(value => !value)
  }
  
  isCheckedPrimary = signal(true);
  isCheckedSuccess = signal(true);
  isCheckedDanger = signal(false);
  isCheckedWarning = signal(false);

  isFocusedPrimary = false;
  isFocusedSuccess = false;
  isFocusedDanger = false;
  isFocusedWarning = false;

  toggleUpdatePrimary() {
    this.isCheckedPrimary.update(value => !value);
  }

  toggleUpdateSuccess() {
    this.isCheckedSuccess.update(value => !value);
  }

  toggleUpdateDanger() {
    this.isCheckedDanger.update(value => !value);
  }

  toggleUpdateWarning() {
    this.isCheckedWarning.update(value => !value);
  }





 //Switch Sizes
  isCheckedSmall = signal(true);
  isCheckedMedium = signal(true);
  isCheckedLarge = signal(true);
  isCheckedExtra = signal(true);

  isFocusedSmall = false;
  isFocusedMedium = false;
  isFocusedLarge = false;
  isFocusedExtra = false;

  toggleUpdateSmall() {
    this.isCheckedSmall.update(value => !value);
  }

  toggleUpdateMedium() {
    this.isCheckedMedium.update(value => !value);
  }

  toggleUpdateLarge() {
    this.isCheckedLarge.update(value => !value);
  }

  toggleUpdateExtra() {
    this.isCheckedExtra.update(value => !value);
  }





  //Inline Switches
  isCheckedOption1 = signal(true);
  isCheckedOption2 = signal(false);
  isCheckedOption3 = signal(true);

  isFocusedOption1 = false;
  isFocusedOption2 = false;
  isFocusedOption3 = false;

  toggleUpdateOption1() {
    this.isCheckedOption1.update(value => !value);
  }

  toggleUpdateOption2() {
    this.isCheckedOption2.update(value => !value);
  }

  toggleUpdateOption3() {
    this.isCheckedOption3.update(value => !value);
  }



  // Switch States & Examples
  isCheckedEmail = signal(true);
  isCheckedSms = signal(false);
  isCheckedNotifications = signal(true);

  isFocusedEmail = false;
  isFocusedSms = false;
  isFocusedNotifications = false;

  toggleUpdateEmail() {
    this.isCheckedEmail.update(value => !value);
  }

  toggleUpdateSms() {
    this.isCheckedSms.update(value => !value);
  }

  toggleUpdateNotifications() {
    this.isCheckedNotifications.update(value => !value);
  }




  isCheckedRemember = signal(false);
  isCheckedSubscribe = signal(true);

  isFocusedRemember = false;
  isFocusedSubscribe = false;


  toggleUpdateRemember() {
    this.isCheckedRemember.update(value => !value);
  }

  toggleUpdateSubscribe() {
    this.isCheckedSubscribe.update(value => !value);
  }





  isCheckedDarkMode = signal(false);
  isCheckedAutoSave = signal(true);
  isCheckedAnalytics = signal(true);

  isFocusedDarkMode = false;
  isFocusedAutoSave = false;
  isFocusedAnalytics = false;


  toggleUpdateDarkMode() {
    this.isCheckedDarkMode.update(value => !value);
  }

  toggleUpdateAutoSave() {
    this.isCheckedAutoSave.update(value => !value); 
  }

  toggleUpdateAnalytics() {
    this.isCheckedAnalytics.update(value => !value);
  }





  // Implementation Guide
  isCheckedBasicSwitch = signal(true);
  isCheckedWithLabel = signal(false);
  isCheckedColored = signal(true);

  isFocusedBasicSwitch = false;
  isFocusedWithLabel = false;
  isFocusedColored = false;


  toggleUpdateBasicSwitch() {
    this.isCheckedBasicSwitch.update(value => !value);
  }

  toggleUpdateWithLabel() {
    this.isCheckedWithLabel.update(value => !value); 
  }

  toggleUpdateColored() {
    this.isCheckedColored.update(value => !value);
  }


}
