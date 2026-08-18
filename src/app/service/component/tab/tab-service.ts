import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TabService {

  defaultTab() {
    return [
      {
        id: 'home',
        label: 'Home',
        content:
          "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, irure terry richardson ex sd. Alip placeat salvia cillum iphone. Seitan alip s cardigan american apparel, butcher voluptate nisi .",
      },
      {
        id: 'profile',
        label: 'Profile',
        content:
          "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, irure terry richardson ex sd. Alip placeat salvia cillum iphone. Seitan alip s cardigan american apparel, butcher voluptate nisi .",
      },
      {
        id: 'contact',
        label: 'Contact',
        content:
          "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, irure terry richardson ex sd. Alip placeat salvia cillum iphone. Seitan alip s cardigan american apparel, butcher voluptate nisi .",
      },
    ]
  }

  customTab() {
    return [
      {
        id: 'home',
        label: 'Home',
        content:
          "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, irure terry richardson ex sd. Alip placeat salvia cillum iphone. Seitan alip s cardigan american apparel, butcher voluptate nisi .",
      },
      {
        id: 'profile',
        label: 'Profile',
        content:
          "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, irure terry richardson ex sd. Alip placeat salvia cillum iphone. Seitan alip s cardigan american apparel, butcher voluptate nisi .",
      },
      {
        id: 'contact',
        label: 'Contact',
        content:
          "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, irure terry richardson ex sd. Alip placeat salvia cillum iphone. Seitan alip s cardigan american apparel, butcher voluptate nisi .",
      },
    ]
  }

  centerTab() {
    return [
      {
        "id": "home",
        "label": "Home",
        "title": "Home",
        "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste nobis, fugit pariatur minima! Dolorum modi pariatur aperiam quas odio nulla, illo necessitatibus dolor a."
      },
      {
        "id": "profile",
        "label": "Profile",
        "title": "Profile",
        "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste nobis, fugit pariatur minima! Dolorum modi pariatur aperiam quas odio nulla, illo necessitatibus dolor a."
      },
      {
        "id": "contact",
        "label": "Contact",
        "title": "Contact",
        "content": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste nobis, fugit pariatur minima! Dolorum modi pariatur aperiam quas odio nulla, illo necessitatibus dolor a."
      }
    ]
  }

  dynamicTab() {
    return [
      {
        "id": "home",
        "label": "Home",
        "title": "Home",
        "content": "Home content here."
      },
      {
        "id": "menu1",
        "label": "Menu 1",
        "title": "Menu 1",
        "content": "Some content here."
      },
      {
        "id": "menu2",
        "label": "Menu 2",
        "title": "Menu 2",
        "content": "Some content here."
      }
    ]
  }

}
