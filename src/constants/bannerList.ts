import { BannerList } from '../types/common';
import { BannerType } from '../types/enum';

export const bannerList: BannerList[] = [
  {
    id: 0,
    title: 'HANTEO MUSIC AWARDS 2024',
    period: '2025.02.15 ~ 2025.02.16',
    type: BannerType.vote,
    imageUrl: 'src/assets/images/banner1.png',
    link: 'https://awards.hanteo.com/?l=ko&m=false',
  },
  {
    id: 1,
    title: '[M COUNTDOWN] 10월 2주차 엠카 사전 투표',
    period: '2020.02.08 10:00 ~ 2020.04.08 17:00 (KST)',
    type: BannerType.vote,
    imageUrl: 'src/assets/images/banner2.png',
    link: 'https://awards.hanteo.com/?l=ko&m=false',
  },
  {
    id: 2,
    title: '세계 유일의 실시간 음악차트, 한터차트',
    type: BannerType.common,
    imageUrl: 'src/assets/images/banner3.png',
    link: 'https://awards.hanteo.com/?l=ko&m=false',
  },
];
