import type { IBadgeBoxs, IButtonIcon3, ILinkBoxs } from "../../typescript/home";

export const flatBadges = [
  {
    id: 1,
    title: '#00c292',
  },
  {
    id: 2,
    title: '#ab8ce4',
  },
  {
    id: 3,
    title: '#03a9f3',
  },
  {
    id: 4,
    title: '#fb9678',
  },
  {
    id: 5,
    title: '#66bb6a',
  },
  {
    id: 6,
    title: '#5c6bc0',
  },
];

export const flatColorPillBadges = [
  {
    id: 1,
    title: 'Teal',
  },
  {
    id: 2,
    title: 'Purple',
  },
  {
    id: 3,
    title: 'Blue',
  },
  {
    id: 4,
    title: 'Orange',
  },
  {
    id: 5,
    title: 'Green',
  },
  {
    id: 6,
    title: 'Indigo',
  },
];


export const badgeBoxs: IBadgeBoxs[] = [
  {
    id: 1,
    title: 'Notifications',
    number: 4,
  },
  {
    id: 2,
    title: 'Messages',
    number: 12,
  },
  {
    id: 3,
    title: 'Warnings',
    number: 3,
  },
  {
    id: 4,
    title: 'Errors',
    number: 1,
  },
  {
    id: 5,
    title: 'Updates',
    number: 7,
  },
];


export const navigationBadges = [
  {
    id: 1,
    name: 'Inbox',
    count: 14,
    type: 'blue',
  },
  {
    id: 2,
    name: 'Sent Messages',
    count: 2,
    type: 'green',
  },
  {
    id: 3,
    name: 'Drafts',
    count: 1,
    type: 'orange',
  },
  {
    id: 4,
    name: 'Spam',
    count: '99+',
    type: 'red',
  },
];


export const buttonStatusBadge: IButtonIcon3[] = [
  {
    id: 1,
    title: 'Active',
    icon: 'active',
    iconPosition: 'left',
  },
  {
    id: 2,
    title: 'Pending',
    icon: 'pending',
    iconPosition: 'left',
  },
  {
    id: 3,
    title: 'Inactive',
    icon: 'inactive',
    iconPosition: 'left',
  },
  {
    id: 4,
    title: 'Processing',
    icon: 'processing',
    iconPosition: 'left',
  },
  {
    id: 5,
    title: 'Paused',
    icon: 'paused',
    iconPosition: 'left',
  },
  {
    id: 6,
    title: 'Blocked',
    icon: 'blocked',
    iconPosition: 'left',
  },
];


export const linkBadges: ILinkBoxs[] = [
  {
    id: 1,
    name: 'News',
    count: 5,
  },
  {
    id: 2,
    name: 'Comments',
    count: 10,
  },
  {
    id: 3,
    name: 'Updates',
    count: 2,
  },
];


export const smallBadges = [
  {
    id: 1,
    name: 'Extra Small',
  },
  {
    id: 2,
    name: 'Small',
  },
  {
    id: 3,
    name: 'Regular',
  },
  {
    id: 4,
    name: 'Large',
  },
];


export const outlineBadges = [
  {
    id: 1,
    name: 'Primary',
  },
  {
    id: 2,
    name: 'Success',
  },  
  {
    id: 3,
    name: 'Danger',
  },
  {
    id: 4,
    name: 'Warning',
  },
];