import type { IRecentActivity, ITopProduct } from "../typescript/home";

export const dashboard = [
  {
    id: 1,
    cost: 31261.00,
    title: 'REVENUE',
    percent: '0.2%',
    isIncrease: true,
  },
  {
    id: 2,
    cost: 3393,
    title: 'SALES',
    percent: '4.3%',
    isIncrease: false,
  },
  {
    id: 3,
    cost: 1409,
    title: 'CUSTOMERS',
    percent: '3.5%',
    isIncrease: true,
  },
  {
    id: 4,
    cost: 48.6,
    title: 'BOUNCE RATE',
    percent: '3.8%',
    isIncrease: true,
  },
];

export const recentActivities: IRecentActivity[] = [
  {
    id: 1,
    type: 'order',
    title: 'New order received',
    description: 'Order #12345 from John Doe',
    time: '2 minutes ago',
  },
  {
    id: 2,
    type: 'customer',
    title: 'New customer registered',
    description: 'Jane Smith joined the platform',
    time: '15 minutes ago',
  },
  {
    id: 3,
    type: 'stock',
    title: 'Low stock alert',
    description: 'Product SKU #789 is running low',
    time: '1 hour ago',
  },
  {
    id: 4,
    type: 'review',
    title: 'New review posted',
    description: '5-star review on Product XYZ',
    time: '3 hours ago',
  },
];


export const topProducts: ITopProduct[] = [
  {
    id: 1,
    type: 'premium',
    name: 'Premium Widget',
    sales: 245,
    revenue: 12250,
    status: 'In Stock',
  },
  {
    id: 2,
    type: 'standard',
    name: 'Standard Package',
    sales: 189,
    revenue: 9450,
    status: 'In Stock',
  },
  {
    id: 3,
    type: 'basic',
    name: 'Basic Module',
    sales: 156,
    revenue: 4680,
    status: 'Low Stock',
  },
  {
    id: 4,
    type: 'pro',
    name: 'Pro Bundle',
    sales: 98,
    revenue: 19600,
    status: 'In Stock',
  },
];