import { http, HttpResponse } from 'msw';
import { charts } from '../constants/chartList';
import { ChartsData } from '../types/common';

export interface PaginationResponse<T> {
  list: T[];
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  totalCount: number;
  hasNext: boolean;
}

export const handlers = [
  http.get('/api/getCharts', ({ request }) => {
    const url = new URL(request.url);
    const size = Number(url.searchParams.get('size')) || 10;
    const page = Number(url.searchParams.get('page')) || 0;
    const totalCount = charts.length;
    const totalPages = Math.round(totalCount / size);
    const hasNext = page < totalPages;

    return HttpResponse.json<PaginationResponse<ChartsData>>({
      list: charts.slice(page * size, (page + 1) * size),
      pageNumber: page,
      pageSize: size,
      totalCount,
      totalPages,
      hasNext,
    });
  }),
];
