import { useEffect, useRef } from 'react';
import { useChart } from '../../../hooks/useChart';
import Spinner from '../../common/Spinner';
import ChartItem from './ChartItem';
import './charts.scss';
export default function Charts() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useChart();
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    });

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [hasNextPage, fetchNextPage]);

  return (
    <div className="charts-section">
      {data?.pages.flatMap((page) =>
        page.list.map((list) => <ChartItem list={list} key={list.rank} />),
      )}
      <div ref={chartRef}>{isFetchingNextPage && <Spinner />}</div>
    </div>
  );
}
