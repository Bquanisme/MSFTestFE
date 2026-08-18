import { Component, inject } from '@angular/core'
import { MatIconModule } from '@angular/material/icon';
import { ButtonService } from '../../../service/component/button';
import { Breadcrumb } from '../../../components/breadcrumb/breadcrumb';

@Component({
  selector: 'app-button',
  imports: [Breadcrumb, MatIconModule],
  templateUrl: './button-page.html',
  styleUrl: './button-page.css',
})
export class ButtonPage {
  title = 'Buttons'

  folderTitle = 'UI Elements'

  private basicButton = inject(ButtonService)

  basic = this.basicButton.basicButton()

  flat = this.basicButton.flatButton()

  outline = this.basicButton.outlineButton()

  states = this.basicButton.statesButton()

  icons = this.basicButton.buttonIcons()

  groupRaw = this.basicButton.buttonGroupRaw()

  groupColumn = this.basicButton.buttonGroupColumn()

  socialMedia = this.basicButton.buttonSocialMedia()


}
