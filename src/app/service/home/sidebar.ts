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
        title: "Roles",
        path: "/roles"
      },
      {
        id: 3,
        title: "Users",
        path: "/users"
      },
      {
        id: 4,
        title: "Components",
        children: [
          {
            id: 41,
            title: "Buttons",
            path: "/components/buttons",
            icon: "fa-regular fa-circle"
          },
          {
            id: 42,
            title: "Badges",
            path: "/components/badges",
            icon: "fa-regular fa-circle"
          },
          {
            id: 43,
            title: "Tabs",
            path: "/components/tabs",
            icon: "fa-regular fa-circle"
          },
          {
            id: 44,
            title: "Cards",
            path: "/components/cards",
            icon: "fa-regular fa-circle"
          },
          {
            id: 45,
            title: "Alerts",
            path: "/components/alerts",
            icon: "fa-regular fa-circle"
          },
          {
            id: 46,
            title: "Progress Bar",
            path: "/components/progress-bar",
            icon: "fa-regular fa-circle"
          },
          {
            id: 47,
            title: "Modals",
            path: "/components/modals",
            icon: "fa-regular fa-circle"
          },
          {
            id: 48,
            title: "Switches",
            path: "/components/switches",
            icon: "fa-regular fa-circle"
          },
          {
            id: 49,
            title: "Grids",
            path: "/components/grids",
            icon: "fa-regular fa-circle"
          },
          {
            id: 410,
            title: "Typography",
            path: "/components/typography",
            icon: "fa-regular fa-circle"
          },
          {
            id: 411,
            title: "SweetAlert2",
            path: "/components/sweet-alert-2",
            icon: "fa-regular fa-circle"
          },
        ],
      },
      {
        id: 5,
        title: "Tables",
        children: [
          {
            id: 51,
            title: "Basic Table",
            path: "/tables/basic-table",
            icon: "fa-regular fa-circle"
          },
          {
            id: 52,
            title: "Data Table",
            path: "/tables/data-table",
            icon: "fa-regular fa-circle"
          },
        ],
      },
      {
        id: 6,
        title: "Forms",
        children: [
          {
            id: 61,
            title: "Basic Form",
            path: "/forms/basic-form",
            icon: "fa-regular fa-circle"
          },
          {
            id: 62,
            title: "Advanced Form",
            path: "/forms/advanced-form",
            icon: "fa-regular fa-circle"
          },
        ],
      },
      {
        id: 7,
        title: "Icons",
        children: [
          {
            id: 71,
            title: "Font Awesomes",
            path: "/icons/font-awesome",
            icon: "fa-solid fa-font-awesome"
          },
          {
            id: 72,
            title: "Modern Icons",
            path: "/icons/modern-icons",
            icon: "fa-solid fa-icons"
          },
        ],
      },
      {
        id: 8,
        title: "Widgets",
        path: "/widgets",
      },
      {
        id: 9,
        title: "Charts",
        children: [
          {
            id: 91,
            title: "Chart JS",
            path: "/charts/chart-js",
            icon: "fa-solid fa-chart-line"
          },
        ],
      },
      {
        id: 10,
        title: "Maps",
        children: [
          {
            id: 101,
            title: "Google Maps",
            path: "/maps/google-maps",
            icon: "fa-solid fa-map"
          },
          {
            id: 102,
            title: "Vector Maps",
            path: "/maps/vector-maps",
            icon: ""
          },
        ],
      },
      {
        id: 11,
        title: "Pages",
        children: [
          {
            id: 111,
            title: "Login",
            path: "/pages/login",
            icon: "fa-solid fa-right-to-bracket"
          },
          {
            id: 112,
            title: "Register",
            path: "/pages/register",
            icon: "fa-solid fa-user-plus"
          },
          {
            id: 113,
            title: "Forget Password",
            path: "/pages/forget-password",
            icon: "fa-solid fa-key"
          },
        ],
      },
    ]
  }

}
