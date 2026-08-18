import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlertService {

  alertFirst() {
    return [
      {
        id: 1,
        title: 'This is a primary alert—check it out!',
      },
      {
        id: 2,
        title: 'This is a secondary alert—check it out!',
      },
      {
        id: 3,
        title: 'This is a success alert—check it out!',
      },
      {
        id: 4,
        title: 'This is a danger alert—check it out!',
      },
      {
        id: 5,
        title: 'This is a warning alert—check it out!',
      },
      {
        id: 6,
        title: 'This is a info alert—check it out!',
      },
      {
        id: 7,
        title: 'This is a light alert—check it out!',
      },
      {
        id: 8,
        title: 'This is a dark alert—check it out!',
      },
    ]
  }

  alertLink() {
    return [
      {
        id: 1,
        title: 'This is a primary alert with <strong><a href="#">an example link</a></strong>. Give it a click if you like.',
      },
      {
        id: 2,
        title: 'This is a secondary alert with <strong><a href="#">an example link</a></strong>. Give it a click if you like.',
      },
      {
        id: 3,
        title: 'This is a success alert with <strong><a href="#">an example link</a></strong>. Give it a click if you like.',
      },
      {
        id: 4,
        title: 'This is a success alert with <strong><a href="#">an example link</a></strong>. Give it a click if you like.',
      },
      {
        id: 5,
        title: 'This is a warning alert with <strong><a href="#">an example link</a></strong>. Give it a click if you like.',
      },
      {
        id: 6,
        title: 'This is a info alert with <strong><a href="#">an example link</a></strong>. Give it a click if you like.',
      },
      {
        id: 7,
        title: 'This is a light alert with <strong><a href="#">an example link</a></strong>. Give it a click if you like.',
      },
      {
        id: 8,
        title: 'This is a dark alert with <strong><a href="#">an example link</a></strong>. Give it a click if you like.',
      },
    ]
  }

  alertDismiss() {
    return [
      {
        id: 1,
        title: 'You successfully read this important alert.',
        isShow: true,
      },
      {
        id: 2,
        title: 'You successfully read this important alert.',
        isShow: true,
      },
      {
        id: 3,
        title: 'You successfully read this important alert.',
        isShow: true,
      },
      {
        id: 4,
        title: 'You successfully read this important alert.',
        isShow: true,
      },
      {
        id: 5,
        title: 'You successfully read this important alert.',
        isShow: true,
      },
      {
        id: 6,
        title: 'You successfully read this important alert.',
        isShow: true,
      },
      {
        id: 7,
        title: 'You successfully read this important alert.',
        isShow: true,
      },        
      {
        id: 8,
        title: 'You successfully read this important alert.',
        isShow: true,
      },
    ]
  }

  alertContent() {
    return [
      {
        id: 1,
        title: 'Well done!',
        description: 'Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.',
        description2: 'Whenever you need to, be sure to use margin utilities to keep things nice and tidy.',
      },
      {
        id: 2,
        title: 'Well done!',
        description: 'Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.',
        description2: 'Whenever you need to, be sure to use margin utilities to keep things nice and tidy.',
      },
      {
        id: 3,
        title: 'Well done!',
        description: 'Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.',
        description2: 'Whenever you need to, be sure to use margin utilities to keep things nice and tidy.',
      },
    ]
  }
}
