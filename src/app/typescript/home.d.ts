interface ISidebar {
  isDrawerOpen: boolean;
  setIsDrawerOpen: () => void;
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


export interface Tab {
  id: string;
  label: string;
  title?: string;
  content: string;
}

export interface TabsResponse {
  defaultTabs: Tab[];
  customTabs: Tab[];
  centeredTabs: Tab[];
  dynamicTabs: Tab[];
}