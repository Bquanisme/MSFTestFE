import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class IconService {

  getIconFontAwesome() {
    return [
      {
        "id": 1,
        "icon": "fas fa-home",
        "name": "fa-home",
        "color": "text-primary",
        "copied": false
      },
      {
        "id": 2,
        "icon": "fas fa-user",
        "name": "fa-user",
        "color": "text-info",
        "copied": false
      },
      {
        "id": 3,
        "icon": "fas fa-heart",
        "name": "fa-heart",
        "color": "text-danger",
        "copied": false
      },
      {
        "id": 4,
        "icon": "fas fa-star",
        "name": "fa-star",
        "color": "text-warning",
        "copied": false
      },
      {
        "id": 5,
        "icon": "fas fa-search",
        "name": "fa-search",
        "color": "text-secondary",
        "copied": false
      },
      {
        "id": 6,
        "icon": "fas fa-shopping-cart",
        "name": "fa-shopping-cart",
        "color": "text-success",
        "copied": false
      },
      {
        "id": 7,
        "icon": "fas fa-download",
        "name": "fa-download",
        "color": "text-primary",
        "copied": false
      },
      {
        "id": 8,
        "icon": "fas fa-upload",
        "name": "fa-upload",
        "color": "text-info",
        "copied": false
      },
      {
        "id": 9,
        "icon": "fas fa-trash",
        "name": "fa-trash",
        "color": "text-danger",
        "copied": false
      },
      {
        "id": 10,
        "icon": "fas fa-edit",
        "name": "fa-edit",
        "color": "text-warning",
        "copied": false
      },
      {
        "id": 11,
        "icon": "fas fa-check",
        "name": "fa-check",
        "color": "text-success",
        "copied": false
      },
      {
        "id": 12,
        "icon": "fas fa-times",
        "name": "fa-times",
        "color": "text-danger",
        "copied": false
      },
      {
        "id": 13,
        "icon": "fas fa-cog",
        "name": "fa-cog",
        "color": "text-secondary",
        "copied": false
      },
      {
        "id": 14,
        "icon": "fas fa-envelope",
        "name": "fa-envelope",
        "color": "text-primary",
        "copied": false
      },
      {
        "id": 15,
        "icon": "fas fa-bell",
        "name": "fa-bell",
        "color": "text-warning",
        "copied": false
      },
      {
        "id": 16,
        "icon": "fas fa-calendar",
        "name": "fa-calendar",
        "color": "text-info",
        "copied": false
      },
      {
        "id": 17,
        "icon": "fas fa-lock",
        "name": "fa-lock",
        "color": "text-dark",
        "copied": false
      },
      {
        "id": 18,
        "icon": "fas fa-unlock",
        "name": "fa-unlock",
        "color": "text-success",
        "copied": false
      }
    ]
  }

  iconTab() {
    return [
      {
        id: 'FA6',
        label: 'Font Awesome 6',
        icon: 'fab fa-font-awesome me-2'
      },
      {
        id: 'BI',
        label: 'Bootstrap Icons',
        icon: 'bi bi-bootstrap me-2'
      },
      {
        id: 'UE',
        label: 'Usage Examples',
        icon: 'fas fa-code me-2'
      },
    ]
  }

  icon() {
    return [
      {
      "id": 1,
      "category": "Common Icons",
      "icons": [
          {
            "id": 1,
            "icon": "fas fa-home",
            "name": "fa-home",
            "copied": false
          },
          {
            "id": 2,
            "icon": "fas fa-user",
            "name": "fa-user",
            "copied": false
          },
          {
            "id": 3,
            "icon": "fas fa-cog",
            "name": "fa-cog",
            "copied": false
          },
          {
            "id": 4,
            "icon": "fas fa-search",
            "name": "fa-search",
            "copied": false
          },
          {
            "id": 5,
            "icon": "fas fa-heart",
            "name": "fa-heart",
            "copied": false
          },
          {
            "id": 6,
            "icon": "fas fa-star",
            "name": "fa-star",
            "copied": false
          },
          {
            "id": 7,
            "icon": "fas fa-bell",
            "name": "fa-bell",
            "copied": false
          },
          {
            "id": 8,
            "icon": "fas fa-envelope",
            "name": "fa-envelope",
            "copied": false
          },
          {
            "id": 9,
            "icon": "fas fa-trash",
            "name": "fa-trash",
            "copied": false
          },
          {
            "id": 10,
            "icon": "fas fa-edit",
            "name": "fa-edit",
            "copied": false
          },
          {
            "id": 11,
            "icon": "fas fa-check",
            "name": "fa-check",
            "copied": false
          },
          {
            "id": 12,
            "icon": "fas fa-times",
            "name": "fa-times",
            "copied": false
          }
        ]
      },
      {
        "id": 2,
        "category": "Navigation & Arrows",
        "icons": [
          {
            "id": 1,
            "icon": "fas fa-arrow-up",
            "name": "fa-arrow-up",
            "copied": false
          },
          {
            "id": 2,
            "icon": "fas fa-arrow-down",
            "name": "fa-arrow-down",
            "copied": false
          },
          {
            "id": 3,
            "icon": "fas fa-arrow-left",
            "name": "fa-arrow-left",
            "copied": false
          },
          {
            "id": 4,
            "icon": "fas fa-arrow-right",
            "name": "fa-arrow-right",
            "copied": false
          },
          {
            "id": 5,
            "icon": "fas fa-chevron-up",
            "name": "fa-chevron-up",
            "copied": false
          },
          {
            "id": 6,
            "icon": "fas fa-chevron-down",
            "name": "fa-chevron-down",
            "copied": false
          },
          {
            "id": 7,
            "icon": "fas fa-chevron-left",
            "name": "fa-chevron-left",
            "copied": false
          },
          {
            "id": 8,
            "icon": "fas fa-chevron-right",
            "name": "fa-chevron-right",
            "copied": false
          },
          {
            "id": 9,
            "icon": "fas fa-angle-double-up",
            "name": "fa-angle-double-up",
            "copied": false
          },
          {
            "id": 10,
            "icon": "fas fa-angle-double-down",
            "name": "fa-angle-double-down",
            "copied": false
          },
          {
            "id": 11,
            "icon": "fas fa-caret-up",
            "name": "fa-caret-up",
            "copied": false
          },
          {
            "id": 12,
            "icon": "fas fa-caret-down",
            "name": "fa-caret-down",
            "copied": false
          }
        ]
      },
      {
        "id": 3,
        "category": "Business & Commerce",
        "icons": [
          {
            "id": 1,
            "icon": "fas fa-chart-line",
            "name": "fa-chart-line",
            "copied": false
          },
          {
            "id": 2,
            "icon": "fas fa-chart-bar",
            "name": "fa-chart-bar",
            "copied": false
          },
          {
            "id": 3,
            "icon": "fas fa-chart-pie",
            "name": "fa-chart-pie",
            "copied": false
          },
          {
            "id": 4,
            "icon": "fas fa-dollar-sign",
            "name": "fa-dollar-sign",
            "copied": false
          },
          {
            "id": 5,
            "icon": "fas fa-shopping-cart",
            "name": "fa-shopping-cart",
            "copied": false
          },
          {
            "id": 6,
            "icon": "fas fa-credit-card",
            "name": "fa-credit-card",
            "copied": false
          },
          {
            "id": 7,
            "icon": "fas fa-briefcase",
            "name": "fa-briefcase",
            "copied": false
          },
          {
            "id": 8,
            "icon": "fas fa-building",
            "name": "fa-building",
            "copied": false
          },
          {
            "id": 9,
            "icon": "fas fa-calculator",
            "name": "fa-calculator",
            "copied": false
          },
          {
            "id": 10,
            "icon": "fas fa-coins",
            "name": "fa-coins",
            "copied": false
          },
          {
            "id": 11,
            "icon": "fas fa-receipt",
            "name": "fa-receipt",
            "copied": false
          },
          {
            "id": 12,
            "icon": "fas fa-wallet",
            "name": "fa-wallet",
            "copied": false
          }
        ]
      },
        {
        "id": 4,
        "category": "Files & Documents",
        "icons": [
          {
            "id": 1,
            "icon": "fas fa-file",
            "name": "fa-file",
            "copied": false
          },
          {
            "id": 2,
            "icon": "fas fa-file-alt",
            "name": "fa-file-alt",
            "copied": false
          },
          {
            "id": 3,
            "icon": "fas fa-file-pdf",
            "name": "fa-file-pdf",
            "copied": false
          },
          {
            "id": 4,
            "icon": "fas fa-file-word",
            "name": "fa-file-word",
            "copied": false
          },
          {
            "id": 5,
            "icon": "fas fa-file-excel",
            "name": "fa-file-excel",
            "copied": false
          },
          {
            "id": 6,
            "icon": "fas fa-file-image",
            "name": "fa-file-image",
            "copied": false
          },
          {
            "id": 7,
            "icon": "fas fa-folder",
            "name": "fa-folder",
            "copied": false
          },
          {
            "id": 8,
            "icon": "fas fa-folder-open",
            "name": "fa-folder-open",
            "copied": false
          },
          {
            "id": 9,
            "icon": "fas fa-download",
            "name": "fa-download",
            "copied": false
          },
          {
            "id": 10,
            "icon": "fas fa-upload",
            "name": "fa-upload",
            "copied": false
          },
          {
            "id": 11,
            "icon": "fas fa-paperclip",
            "name": "fa-paperclip",
            "copied": false
          },
          {
            "id": 12,
            "icon": "fas fa-copy",
            "name": "fa-copy",
            "copied": false
          }
        ]
      },
      {
        "id": 5,
        "category": "Social & Brands",
        "icons": [
          {
            "id": 1,
            "icon": "fab fa-facebook",
            "name": "fa-facebook",
            "copied": false
          },
          {
            "id": 2,
            "icon": "fab fa-twitter",
            "name": "fa-twitter",
            "copied": false
          },
          {
            "id": 3,
            "icon": "fab fa-instagram",
            "name": "fa-instagram",
            "copied": false
          },
          {
            "id": 4,
            "icon": "fab fa-linkedin",
            "name": "fa-linkedin",
            "copied": false
          },
          {
            "id": 5,
            "icon": "fab fa-github",
            "name": "fa-github",
            "copied": false
          },
          {
            "id": 6,
            "icon": "fab fa-youtube",
            "name": "fa-youtube",
            "copied": false
          },
          {
            "id": 7,
            "icon": "fab fa-google",
            "name": "fa-google",
            "copied": false
          },
          {
            "id": 8,
            "icon": "fab fa-apple",
            "name": "fa-apple",
            "copied": false
          },
          {
            "id": 9,
            "icon": "fab fa-microsoft",
            "name": "fa-microsoft",
            "copied": false
          },
          {
            "id": 10,
            "icon": "fab fa-slack",
            "name": "fa-slack",
            "copied": false
          },
          {
            "id": 11,
            "icon": "fab fa-discord",
            "name": "fa-discord",
            "copied": false
          },
          {
            "id": 12,
            "icon": "fab fa-whatsapp",
            "name": "fa-whatsapp",
            "copied": false
          }
        ]
      }
    ]
  }

  iconBootstrap() {
    return [
      {
        "id": 1,
        "category": "Common Icons",
        "icons": [
          {
            "id": 1,
            "icon": "bi bi-house",
            "name": "bi-house",
            "copied": false
          },
          {
            "id": 2,
            "icon": "bi bi-person",
            "name": "bi-person",
            "copied": false
          },
          {
            "id": 3,
            "icon": "bi bi-gear",
            "name": "bi-gear",
            "copied": false
          },
          {
            "id": 4,
            "icon": "bi bi-search",
            "name": "bi-search",
            "copied": false
          },
          {
            "id": 5,
            "icon": "bi bi-heart",
            "name": "bi-heart",
            "copied": false
          },
          {
            "id": 6,
            "icon": "bi bi-star",
            "name": "bi-star",
            "copied": false
          },
          {
            "id": 7,
            "icon": "bi bi-bell",
            "name": "bi-bell",
            "copied": false
          },
          {
            "id": 8,
            "icon": "bi bi-envelope",
            "name": "bi-envelope",
            "copied": false
          },
          {
            "id": 9,
            "icon": "bi bi-trash",
            "name": "bi-trash",
            "copied": false
          },
          {
            "id": 10,
            "icon": "bi bi-pencil",
            "name": "bi-pencil",
            "copied": false
          },
          {
            "id": 11,
            "icon": "bi bi-check",
            "name": "bi-check",
            "copied": false
          },
          {
            "id": 12,
            "icon": "bi bi-x",
            "name": "bi-x",
            "copied": false
          }
        ]
      },
      {
        "id": 2,
        "category": "Bootstrap Specific",
        "icons": [
          {
            "id": 1,
            "icon": "bi bi-bootstrap",
            "name": "bi-bootstrap",
            "copied": false
          },
          {
            "id": 2,
            "icon": "bi bi-bootstrap-fill",
            "name": "bi-bootstrap-fill",
            "copied": false
          },
          {
            "id": 3,
            "icon": "bi bi-list",
            "name": "bi-list",
            "copied": false
          },
          {
            "id": 4,
            "icon": "bi bi-grid",
            "name": "bi-grid",
            "copied": false
          },
          {
            "id": 5,
            "icon": "bi bi-grid-3x3",
            "name": "bi-grid-3x3",
            "copied": false
          },
          {
            "id": 6,
            "icon": "bi bi-columns",
            "name": "bi-columns",
            "copied": false
          },
          {
            "id": 7,
            "icon": "bi bi-layout-text-sidebar",
            "name": "bi-layout-text-sidebar",
            "copied": false
          },
          {
            "id": 8,
            "icon": "bi bi-card-text",
            "name": "bi-card-text",
            "copied": false
          },
          {
            "id": 9,
            "icon": "bi bi-menu-button",
            "name": "bi-menu-button",
            "copied": false
          },
          {
            "id": 10,
            "icon": "bi bi-toggles",
            "name": "bi-toggles",
            "copied": false
          },
          {
            "id": 11,
            "icon": "bi bi-sliders",
            "name": "bi-sliders",
            "copied": false
          },
          {
            "id": 12,
            "icon": "bi bi-palette",
            "name": "bi-palette",
            "copied": false
          }
        ]
      },
      {
        "id": 3,
        "category": "Media & Files",
        "icons": [
          {
            "id": 1,
            "icon": "bi bi-image",
            "name": "bi-image",
            "copied": false
          },
          {
            "id": 2,
            "icon": "bi bi-camera",
            "name": "bi-camera",
            "copied": false
          },
          {
            "id": 3,
            "icon": "bi bi-play-circle",
            "name": "bi-play-circle",
            "copied": false
          },
          {
            "id": 4,
            "icon": "bi bi-pause-circle",
            "name": "bi-pause-circle",
            "copied": false
          },
          {
            "id": 5,
            "icon": "bi bi-volume-up",
            "name": "bi-volume-up",
            "copied": false
          },
          {
            "id": 6,
            "icon": "bi bi-volume-mute",
            "name": "bi-volume-mute",
            "copied": false
          },
          {
            "id": 7,
            "icon": "bi bi-file-earmark",
            "name": "bi-file-earmark",
            "copied": false
          },
          {
            "id": 8,
            "icon": "bi bi-file-pdf",
            "name": "bi-file-pdf",
            "copied": false
          },
          {
            "id": 9,
            "icon": "bi bi-file-word",
            "name": "bi-file-word",
            "copied": false
          },
          {
            "id": 10,
            "icon": "bi bi-file-excel",
            "name": "bi-file-excel",
            "copied": false
          },
          {
            "id": 11,
            "icon": "bi bi-file-zip",
            "name": "bi-file-zip",
            "copied": false
          },
          {
            "id": 12,
            "icon": "bi bi-folder",
            "name": "bi-folder",
            "copied": false
          }
        ]
      }
    ]
  }

}
