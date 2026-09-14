import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {

  dashboard() {
    return [
      {
        id: 1,
        cost: 31261.00,
        title: 'REVENUE',
        percent: '0.2%',
        isIncrease: true,
        icon: 'fa-solid fa-dollar-sign'
      },
      {
        id: 2,
        cost: 3393,
        title: 'SALES',
        percent: '4.3%',
        isIncrease: false,
        icon: 'fa-solid fa-shopping-cart'
      },
      {
        id: 3,
        cost: 1409,
        title: 'CUSTOMERS',
        percent: '3.5%',
        isIncrease: true,
        icon: 'fa-solid fa-users'
      },
      {
        id: 4,
        cost: 48.6,
        title: 'BOUNCE RATE',
        percent: '3.8%',
        isIncrease: true,
        icon: 'fa-solid fa-chart-line'
      },
    ]
  }

  recentActivities() {
    return [
      {
        id: 1,
        type: 'fa-solid fa-shopping-bag',
        title: 'New order received',
        description: 'Order #12345 from John Doe',
        time: '2 minutes ago',
      },
      {
        id: 2,
        type: 'fa-solid fa-user-plus',
        title: 'New customer registered',
        description: 'Jane Smith joined the platform',
        time: '15 minutes ago',
      },
      {
        id: 3,
        type: 'fa-solid fa-exclamation-triangle',
        title: 'Low stock alert',
        description: 'Product SKU #789 is running low',
        time: '1 hour ago',
      },
      {
        id: 4,
        type: 'fa-solid fa-comment',
        title: 'New review posted',
        description: '5-star review on Product XYZ',
        time: '3 hours ago',
      },
    ]
  }

  topProducts() {
    return [
      {
        id: 1,
        type: 'fa-solid fa-box',
        name: 'Premium Widget',
        sales: 245,
        revenue: 12250,
        status: 'In Stock',
      },
      {
        id: 2,
        type: 'fa-solid fa-cube',
        name: 'Standard Package',
        sales: 189,
        revenue: 9450,
        status: 'In Stock',
      },
      {
        id: 3,
        type: 'fa-solid fa-layer-group',
        name: 'Basic Module',
        sales: 156,
        revenue: 4680,
        status: 'Low Stock',
      },
      {
        id: 4,
        type: 'fa-solid fa-gift',
        name: 'Pro Bundle',
        sales: 98,
        revenue: 19600,
        status: 'In Stock',
      },
    ]
  }
  

}
