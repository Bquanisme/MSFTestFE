import type { ISidebarItem } from "../typescript/home";

export const getSidebar = async (): Promise<ISidebarItem[]> => {
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
        },
        {
          id: 22,
          title: "Badges",
          path: "/components/badges",
        },
        {
          id: 23,
          title: "Tabs",
          path: "/components/tabs",
        },
        {
          id: 24,
          title: "Cards",
          path: "/components/cards",
        },
        {
          id: 25,
          title: "Alerts",
          path: "/components/alerts",
        },
        {
          id: 26,
          title: "Progress Bar",
          path: "/components/progress-bar",
        },
        {
          id: 27,
          title: "Modals",
          path: "/components/modals",
        },
        {
          id: 28,
          title: "Switches",
          path: "/components/switches",
        },
        {
          id: 29,
          title: "Grids",
          path: "/components/grids",
        },
        {
          id: 210,
          title: "Typography",
          path: "/components/typography",
        },
        {
          id: 211,
          title: "SweetAlert2",
          path: "/components/sweet-alert-2",
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
        },
        {
          id: 32,
          title: "Data Table",
          path: "/tables/data-table",
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
        },
        {
          id: 42,
          title: "Advanced Form",
          path: "/forms/advanced-form",
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
        },
        {
          id: 52,
          title: "Modern Icons",
          path: "/icons/modern-icons",
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
        },
        {
          id: 82,
          title: "Vector Maps",
          path: "/maps/vector-maps",
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
        },
        {
          id: 92,
          title: "Register",
          path: "/pages/register",
        },
        {
          id: 93,
          title: "Forget Password",
          path: "/pages/forget-password",
        },
      ],
    },
  ];
};