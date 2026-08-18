import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BadgeService {

  basicBadges() {
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

  flatBadges() {
    return [
      {
        id: 1,
        title: '#00c292',
      },
      {
        id: 2,
        title: '#ab8ce4',
      },
      {
        id: 3,
        title: '#03a9f3',
      },
      {
        id: 4,
        title: '#fb9678',
      },
      {
        id: 5,
        title: '#66bb6a',
      },
      {
        id: 6,
        title: '#5c6bc0',
      },
    ]
  }

  flatColorPillBadges() {
    return [
      {
        id: 1,
        title: 'Teal',
      },
      {
        id: 2,
        title: 'Purple',
      },
      {
        id: 3,
        title: 'Blue',
      },
      {
        id: 4,
        title: 'Orange',
      },
      {
        id: 5,
        title: 'Green',
      },
      {
        id: 6,
        title: 'Indigo',
      },
    ]
  }

  badgeBoxs() {
    return [
      {
        id: 1,
        title: 'Notifications',
        number: 4,
      },
      {
        id: 2,
        title: 'Messages',
        number: 12,
      },
      {
        id: 3,
        title: 'Warnings',
        number: 3,
      },
      {
        id: 4,
        title: 'Errors',
        number: 1,
      },
      {
        id: 5,
        title: 'Updates',
        number: 7,
      },
    ]
  }

  navigationBadges() {
    return [
      {
        id: 1,
        name: 'Inbox',
        count: 14,
        type: 'blue',
      },
      {
        id: 2,
        name: 'Sent Messages',
        count: 2,
        type: 'green',
      },
      {
        id: 3,
        name: 'Drafts',
        count: 1,
        type: 'orange',
      },
      {
        id: 4,
        name: 'Spam',
        count: '99+',
        type: 'red',
      },
    ]
  }

  buttonStatusBadge() {
    return [
      {
        id: 1,
        title: 'Active',
        icon: 'done',
        iconPosition: 'left',
      },
      {
        id: 2,
        title: 'Pending',
        icon: 'watch_later',
        iconPosition: 'left',
      },
      {
        id: 3,
        title: 'Inactive',
        icon: 'clear',
        iconPosition: 'left',
      },
      {
        id: 4,
        title: 'Processing',
        icon: 'watch_later',
        iconPosition: 'left',
      },
      {
        id: 5,
        title: 'Paused',
        icon: 'paused',
        iconPosition: 'left',
      },
      {
        id: 6,
        title: 'Blocked',
        icon: 'block',
        iconPosition: 'left',
      },
    ]
  }

  linkBadges() {
    return [
      {
        id: 1,
        name: 'News',
        count: 5,
        path: '/components/badges'
      },
      {
        id: 2,
        name: 'Comments',
        count: 10,
        path: '/components/badges'
      },
      {
        id: 3,
        name: 'Updates',
        count: 2,
        path: '/components/badges'
      },
    ]
  }

  smallBadges() {
    return [
      {
        id: 1,
        name: 'Extra Small',
      },
      {
        id: 2,
        name: 'Small',
      },
      {
        id: 3,
        name: 'Regular',
      },
      {
        id: 4,
        name: 'Large',
      },
    ]
  }

  outlineBadges() {
    return [
      {
        id: 1,
        name: 'Primary',
      },
      {
        id: 2,
        name: 'Success',
      },  
      {
        id: 3,
        name: 'Danger',
      },
      {
        id: 4,
        name: 'Warning',
      },
    ]
  }

}
