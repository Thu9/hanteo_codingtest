import { BannerType } from '../../../types/enum';
import Paragraph from '../../common/Paragraph';
import './banner.scss';

export default function BannerButton({ type }: { type: BannerType }) {
  return (
    <>
      {type === BannerType.vote && (
        <div className="button-vote">
          <Paragraph size="xs" weight="semibold" color="pink">
            투표하기
          </Paragraph>
        </div>
      )}
    </>
  );
}
