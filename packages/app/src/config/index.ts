import noticeBarImg from '@/assets/images/noticeBar@2x.webp';
import drawerImg from '@/assets/images/drawer@2x.webp';
import type { ExampleCard } from '@/types';

export const exampleList: ExampleCard[] = [
  {
    id: 'notice-bar',
    name: 'NoticeBar',
    cover: noticeBarImg,
    url: 'https://codesandbox.io/p/sandbox/noticebar-y2ylrc',
    desc: 'infinite scrolling notice bar',
    tags: ['useAnimate']
  },
  {
    id: 'drawer',
    name: 'Drawer',
    cover: drawerImg,
    desc: 'the application of view transition, this is used as Drawer component',
    url: 'https://codesandbox.io/p/sandbox/serene-borg-rggcfz',
    tags: ['useMotion']
  }
];
