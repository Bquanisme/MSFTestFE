export interface IRecentActivity {
  id: number;
  type: 'order' | 'customer' | 'stock' | 'review';
  title: string;
  description: string;
  time: string;
}


export interface ITopProduct {
  id: number;
  type: 'premium' | 'standard' | 'basic' | 'pro';
  name: string;
  sales: number;
  revenue: number;
  status: 'In Stock' | 'Low Stock';
}

export interface IDashboard {
  id: number;
  cost: number;
  title: string;
  percent: string;
  isIncrease: boolean;
}

export interface ISidebarItem {
  id: number;
  title: string;
  path?: string;
  children?: {
    id: number;
    title: string;
    path: string;
  }[];
}

export interface IButtonIcon {
  id: number;
  title: string;
  icon: 'star' | 'favorite' | 'check' | 'warning' | 'delete';
  iconPosition: 'left' | 'right';
}

export interface IButtonIcon2 {
  id: number;
  title: string;
  icon: 'facebook' | 'twitter' | 'instagram' | 'github' | 'youtube' | 'linkedin'
  iconPosition: 'left' | 'right';
}

export interface IButtonIcon3 {
  id: number;
  title: string;
  icon: 'active' | 'pending' | 'inactive' | 'processing' | 'paused' | 'blocked'
  iconPosition: 'left' | 'right';
}

export interface IBadgeBoxs {
  id: number;
  title: string;
  number: number
}

export interface ILinkBoxs {
  id: number;
  name: string;
  count: number
}