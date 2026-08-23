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
        title: 'Disable',
      },
    ]
  }

  buttonIcons() {
    return [
      {
        id: 1,
        title: 'Left Icon',
        icon: 'star',
        iconPosition: 'left',
      },
      {
        id: 2,
        title: 'Right Icon',
        icon: 'favorite',
        iconPosition: 'right',
      },
      {
        id: 3,
        title: 'Success',
        icon: 'check',
        iconPosition: 'left',
      },
      {
        id: 4,
        title: 'Warning',
        icon: 'warning',
        iconPosition: 'left',
      },
      {
        id: 5,
        title: 'Delete',
        icon: 'delete',
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
        icon: 'fa-brands fa-facebook',
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
        title: 'Github',
        icon: 'fa-brands fa-github',
        iconPosition: 'left',
      },
      {
        id: 5,
        title: 'Youtube',
        icon: 'fa-brands fa-youtube',
        iconPosition: 'left',
      },
      {
        id: 6,
        title: 'LinkedIn',
        icon: 'fa-brands fa-linkedin',
        iconPosition: 'left',
      },
    ]
  }
}