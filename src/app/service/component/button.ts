import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ButtonService {

  basicButton() {
    return [
      {
        id: 1,
        title: 'Primary',
      },
      {
        id: 2,
        title: 'Secondary',
      },
      {
        id: 3,
        title: 'Success',
      },
      {
        id: 4,
        title: 'Danger',
      },
      {
        id: 5,
        title: 'Warning',
      },
      {
        id: 6,
        title: 'Info',
      },
      {
        id: 7,
        title: 'Light',
      },
      {
        id: 8,
        title: 'Dark',
      },
    ]
  }

  flatButton() {
    return [
      {
        id: 1,
        title: 'Flat Color 1',
      },
      {
        id: 2,
        title: 'Flat Color 2',
      },
      {
        id: 3,
        title: 'Flat Color 3',
      },
      {
        id: 4,
        title: 'Flat Color 4',
      },
      {
        id: 5,
        title: 'Flat Color 5',
      },
      {
        id: 6,
        title: 'Flat Color 6',
      },
    ]
  }

  outlineButton() {
    return [
      {
        id: 1,
        title: 'Primary',
      },
      {
        id: 2,
        title: 'Secondary',
      },
      {
        id: 3,
        title: 'Success',
      },
      {
        id: 4,
        title: 'Danger',
      },
      {
        id: 5,
        title: 'Warning',
      },
      {
        id: 6,
        title: 'Info',
      },
      {
        id: 7,
        title: 'Dark',
      },
    ]
  }

  statesButton() {
    return [
      {
        id: 1,
        title: 'Normal',
      },
      {
        id: 2,
        title: 'Active',
      },
      {
        id: 3,
        title: 'Disabled',
      },
    ]
  }

  buttonIcons() {
    return [
      {
        id: 1,
        title: 'Left Icon',
        icon: 'fa-solid fa-star',
        iconPosition: 'left',
      },
      {
        id: 2,
        title: 'Right Icon',
        icon: 'fa-solid fa-heart',
        iconPosition: 'right',
      },
      {
        id: 3,
        title: 'Success',
        icon: 'fa-solid fa-check',
        iconPosition: 'left',
      },
      {
        id: 4,
        title: 'Warning',
        icon: 'fa-solid fa-warning',
        iconPosition: 'left',
      },
      {
        id: 5,
        title: 'Delete',
        icon: 'fa-solid fa-trash',
        iconPosition: 'left',
      },
    ]
  }

  buttonGroupRaw() {
    return [
      {
        id: 1,
        title: 'Left',
      },
      {
        id: 2,
        title: 'Middle',
      },
      {
        id: 3,
        title: 'Right',
      },
    ]
  }

  buttonGroupColumn() {
    return [
      {
        id: 1,
        title: 'Top',
      },
      {
        id: 2,
        title: 'Middle',
      },
      {
        id: 3,
        title: 'Bottom',
      },
    ]
  }

  buttonSocialMedia() {
    return [
      {
        id: 1,
        title: 'Facebook',
        icon: 'fa-brands fa-facebook-f',
        iconPosition: 'left',
      },
      {
        id: 2,
        title: 'Twitter',
        icon: 'fa-brands fa-twitter',
        iconPosition: 'left',
      },
      {
        id: 3,
        title: 'Instagram',
        icon: 'fa-brands fa-instagram',
        iconPosition: 'left',
      },
      {
        id: 4,
        title: 'GitHub',
        icon: 'fa-brands fa-github',
        iconPosition: 'left',
      },
      {
        id: 5,
        title: 'YouTube',
        icon: 'fa-brands fa-youtube',
        iconPosition: 'left',
      },
      {
        id: 6,
        title: 'LinkedIn',
        icon: 'fa-brands fa-linkedin-in',
        iconPosition: 'left',
      },
    ]
  }
}