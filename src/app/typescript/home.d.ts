export interface IRecentActivity {
  id: number;
  type: 'order' | 'customer' | 'stock' | 'review';
  title: string;
  description: string;
  time: string;
}


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



// export interface PositionItem {
//   id: number;
//   title: string;
//   iconButton: string;
//   icon: 'top-start' | 'top' | 'top-end' |
//         'center-start' | 'center' | 'center-end' |
//         'bottom-start' | 'bottom' | 'bottom-end';
// }


export interface Widget {
  id: number;
  number?: number;
  value?: string;
  title: string;
  icon: string;
  percent?: number
  
}

export interface WidgetResponse {
  id: number;
  data: Widget[]
  
}





export interface Card {
  id: number;
  name: number;
  title: string;
  address: string;
  icon: string;
  description?: string;
  icon2?: string;
  icon3?: string;
  time?: string;
  status?: string;
  color?: string;
  action?: string;
  badge?: string;
  badgeColor?: string;
  image?: string
} 

export interface CardResponse {
  id: number;
  data: Card[]
  
}


export interface ProgressBar {
  id: number;
  title: string;
  percent: number;
  showLabel?: boolean
} 

export interface ProgressBarResponse {
  id: number;
  data: ProgressBar[]
}



interface HeaderTs {
  id: number;
  title: string;
  description: string;
  time: string;
  icon?: string;
  image?: string;
  status?: string;
  status2?: string;
  path?: string
}

interface HeaderResponse {
  id: number;
  data: Header[]
}