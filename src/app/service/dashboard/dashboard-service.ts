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
        icon: 'attach_money'
      },
      {
        id: 2,
        cost: 3393,
        title: 'SALES',
        percent: '4.3%',
        isIncrease: false,
        icon: 'shopping_cart'
      },
      {
        id: 3,
        cost: 1409,
        title: 'CUSTOMERS',
        percent: '3.5%',
        isIncrease: true,
        icon: 'people'
      },
      {
        id: 4,
        cost: 48.6,
        title: 'BOUNCE RATE',
        percent: '3.8%',
        isIncrease: true,
        icon: 'show_chart'
      },
    ]
  }

  recentActivities() {
    return [
      {
        id: 1,
        type: 'shopping_basket',
        title: 'New order received',
        description: 'Order #12345 from John Doe',
        time: '2 minutes ago',
      },
      {
        id: 2,
        type: 'person_add',
        title: 'New customer registered',
        description: 'Jane Smith joined the platform',
        time: '15 minutes ago',
      },
      {
        id: 3,
        type: 'warning',
        title: 'Low stock alert',
        description: 'Product SKU #789 is running low',
        time: '1 hour ago',
      },
      {
        id: 4,
        type: 'message',
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
        type: 'inbox',
        name: 'Premium Widget',
        sales: 245,
        revenue: 12250,
        status: 'In Stock',
      },
      {
        id: 2,
        type: 'markunread_mailbox',
        name: 'Standard Package',
        sales: 189,
        revenue: 9450,
        status: 'In Stock',
      },
      {
        id: 3,
        type: 'tab',
        name: 'Basic Module',
        sales: 156,
        revenue: 4680,
        status: 'Low Stock',
      },
      {
        id: 4,
        type: 'card_giftcard',
        name: 'Pro Bundle',
        sales: 98,
        revenue: 19600,
        status: 'In Stock',
      },
    ]
  }
  

}
