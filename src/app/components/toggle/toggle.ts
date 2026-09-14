import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-toggle',
  imports: [],
  templateUrl: './toggle.html',
  styleUrl: './toggle.css',
})
export class Toggle {
  
  background = input('')

  isChecked = signal(true)

  isFocused = false;

  toggleUpdate() {
    this.isChecked.update(value => !value)
  }

}
