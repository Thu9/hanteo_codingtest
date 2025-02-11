import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { PaginationResponse } from '../mock/handlers';
import { ChartsData } from '../types/common';

export const fetchCharts = async ({ pageParam = 0 }) => {
  const size = 10;
  const response = await axios.get<PaginationResponse<ChartsData>>(
    '/api/getCharts',
    {
      params: { page: pageParam, size },
    },
  );
  return response.data;
};

export const useChart = () => {
  return useInfiniteQuery({
    queryKey: ['charts'],
    queryFn: fetchCharts,
    initialPageParam: 0,
    getNextPageParam: (lastPage) =>
      lastPage.hasNext ? lastPage.pageNumber + 1 : undefined,
  });
};
