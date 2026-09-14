import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {

  getSidebar() {
    return [
      {
        id: 1,
        title: "Dashboard",
        path: "/",
      },
      {
        id: 2,
        title: "Components",
        children: [
          {
            id: 21,
            title: "Buttons",
            path: "/components/buttons",
            icon: "fa-regular fa-circle"
          },
          {
            id: 22,
            title: "Badges",
            path: "/components/badges",
            icon: "fa-regular fa-circle"
          },
          {
            id: 23,
            title: "Tabs",
            path: "/components/tabs",
            icon: "fa-regular fa-circle"
          },
          {
            id: 24,
            title: "Cards",
            path: "/components/cards",
            icon: "fa-regular fa-circle"
          },
          {
            id: 25,
            title: "Alerts",
            path: "/components/alerts",
            icon: "fa-regular fa-circle"
          },
          {
            id: 26,
            title: "Progress Bar",
            path: "/components/progress-bar",
            icon: "fa-regular fa-circle"
          },
          {
            id: 27,
            title: "Modals",
            path: "/components/modals",
            icon: "fa-regular fa-circle"
          },
          {
            id: 28,
            title: "Switches",
            path: "/components/switches",
            icon: "fa-regular fa-circle"
          },
          {
            id: 29,
            title: "Grids",
            path: "/components/grids",
            icon: "fa-regular fa-circle"
          },
          {
            id: 210,
            title: "Typography",
            path: "/components/typography",
            icon: "fa-regular fa-circle"
          },
          {
            id: 211,
            title: "SweetAlert2",
            path: "/components/sweet-alert-2",
            icon: "fa-regular fa-circle"
          },
        ],
      },
      {
        id: 3,
        title: "Tables",
        children: [
          {
            id: 31,
            title: "Basic Table",
            path: "/tables/basic-table",
            icon: "fa-regular fa-circle"
          },
          {
            id: 32,
            title: "Data Table",
            path: "/tables/data-table",
            icon: "fa-regular fa-circle"
          },
        ],
      },
      {
        id: 4,
        title: "Forms",
        children: [
          {
            id: 41,
            title: "Basic Form",
            path: "/forms/basic-form",
            icon: "fa-regular fa-circle"
          },
          {
            id: 42,
            title: "Advanced Form",
            path: "/forms/advanced-form",
            icon: "fa-regular fa-circle"
          },
        ],
      },
      {
        id: 5,
        title: "Icons",
        children: [
          {
            id: 51,
            title: "Font Awesomes",
            path: "/icons/font-awesome",
            icon: "fa-solid fa-font-awesome"
          },
          {
            id: 52,
            title: "Modern Icons",
            path: "/icons/modern-icons",
            icon: "fa-solid fa-icons"
          },
        ],
      },
      {
        id: 6,
        title: "Widgets",
        path: "/widgets",
      },
      {
        id: 7,
        title: "Charts",
        children: [
          {
            id: 71,
            title: "Chart JS",
            path: "/charts/chart-js",
            icon: "fa-solid fa-chart-line"
          },
        ],
      },
      {
        id: 8,
        title: "Maps",
        children: [
          {
            id: 81,
            title: "Google Maps",
            path: "/maps/google-maps",
            icon: "fa-solid fa-map"
          },
          {
            id: 82,
            title: "Vector Maps",
            path: "/maps/vector-maps",
            icon: ""
          },
        ],
      },
      {
        id: 9,
        title: "Pages",
        children: [
          {
            id: 91,
            title: "Login",
            path: "/pages/login",
            icon: "fa-solid fa-right-to-bracket"
          },
          {
            id: 92,
            title: "Register",
            path: "/pages/register",
            icon: "fa-solid fa-user-plus"
          },
          {
            id: 93,
            title: "Forget Password",
            path: "/pages/forget-password",
            icon: "fa-solid fa-key"
          },
        ],
      },
    ]
  }

}
