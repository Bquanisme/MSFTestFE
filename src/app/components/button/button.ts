import { Component, inject } from '@angular/core'
import { ButtonService } from '../../service/component/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button',
  imports: [MatIconModule],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
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
