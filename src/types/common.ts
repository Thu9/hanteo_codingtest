import { BannerType } from './enum';

export interface BannerList {
  id: number;
  title: string;
  type: BannerType;
  period?: string;
  imageUrl: string;
  link: string;
}

export interface ChartsData {
  rank: number;
  targetImg: string;
  value: number;
  artistGlobalName: string;
  entertainment: string;
}
