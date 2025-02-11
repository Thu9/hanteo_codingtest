import { hanteoResourceURL } from '../../../constants/chartList';
import { ChartsData } from '../../../types/common';
import Paragraph from '../../common/Paragraph';

export default function ChartItem({ list }: { list: ChartsData }) {
  const { rank, artistGlobalName, targetImg, entertainment, value } = list;

  return (
    <div className="charts-item">
      <div className="img-wrapper">
        <img src={hanteoResourceURL + targetImg} alt="album image" />
      </div>
      <div className="content">
        <div className="rank-container">
          <Paragraph size="l" weight="medium">
            {rank}
          </Paragraph>
        </div>
        <div className="row-container">
          <Paragraph weight="semibold">{artistGlobalName}</Paragraph>
          <Paragraph size="s" color="gray">
            {entertainment}
          </Paragraph>
        </div>
        <div className="score-container">
          <Paragraph size="s" weight="semibold">
            {value}
          </Paragraph>
        </div>
      </div>
    </div>
  );
}
