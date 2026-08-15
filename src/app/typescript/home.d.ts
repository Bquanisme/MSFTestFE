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