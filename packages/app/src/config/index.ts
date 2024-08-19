import noticeBarImg from '@/assets/images/noticeBar@2x.webp';
import drawerImg from '@/assets/images/drawer@2x.webp';
import tabBarImg from '@/assets/images/tabbar@2x.webp';
import pulseImg from '@/assets/images/pulse@2x.webp';
import letterUpImg from '@/assets/images/letterUp@2x.webp';
import type { ExampleCard } from '@/types';

export const exampleList: ExampleCard[] = [
  {
    id: 'notice-bar',
    name: 'NoticeBar',
    cover: noticeBarImg,
    url: 'https://codesandbox.io/p/sandbox/notice-bar-v4zrdc',
    desc: 'infinite scrolling notice bar',
    tags: ['useAnimate']
  },
  {
    id: 'drawer',
    name: 'Drawer',
    cover: drawerImg,
    desc: 'the application of view transition, this is used as Drawer component',
    url: 'https://codesandbox.io/p/sandbox/drawer-g39q59',
    tags: ['useMotion']
  },
  {
    id: 'tabBar',
    name: 'TabBar',
    cover: tabBarImg,
    desc: 'svg path animation, used in tabBar component',
    url: 'https://codesandbox.io/p/sandbox/tabbar-9pgyq5',
    tags: ['useLineDraw', 'svg']
  },
  {
    id: 'pulse',
    name: 'Pulse',
    cover: pulseImg,
    desc: 'pulse like animation',
    url: 'https://codesandbox.io/p/sandbox/pulse-9w4cj8',
    tags: ['useAnimate', 'svg']
  },
  {
    id: 'letterUp',
    name: 'LetterUp',
    cover: letterUpImg,
    desc: 'letter up animation with blur effect',
    url: 'https://codesandbox.io/p/sandbox/letterup-fvz894',
    tags: ['letter', 'useGroup']
  }
];
