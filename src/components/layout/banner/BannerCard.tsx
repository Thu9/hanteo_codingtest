import { BannerList } from '../../../types/common';
import { BannerType } from '../../../types/enum';
import Paragraph from '../../common/Paragraph';
import './banner.scss';
import BannerButton from './BannerButton';

export default function BannerCard({ list }: { list: BannerList }) {
  const { imageUrl, link, title, type, period } = list;

  const handleBannerClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="banner-container" onClick={() => handleBannerClick(link)}>
      <img src={imageUrl} alt="배너이미지" className="banner-image" />
      <div className="banner">
        {type === BannerType.vote ? (
          <>
            <div className="banner-vote">
              <Paragraph size="s" weight="semibold">
                {title}
              </Paragraph>
              <BannerButton type={type} />
            </div>
            <div className="banner-period">
              <Paragraph size="xs" weight="medium">
                {period}
              </Paragraph>
            </div>
          </>
        ) : (
          <div className="banner-common">
            <Paragraph size="s" weight="semibold">
              {title}
            </Paragraph>
          </div>
        )}
      </div>
    </div>
  );
}
