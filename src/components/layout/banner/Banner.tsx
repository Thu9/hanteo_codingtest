import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { bannerList } from '../../../constants/bannerList';
import './banner.scss';
import BannerCard from './BannerCard';

export default function Banner() {
  return (
    <div className="banner-section">
      <Swiper
        className="banner-swiper"
        slidesPerView="auto"
        centeredSlides={true}
        spaceBetween={8}
        loop={true}
        modules={[Pagination]}
        pagination={{ enabled: true }}
      >
        {bannerList.map((list, index) => (
          <SwiperSlide key={index} className="slide-item">
            <BannerCard list={list}></BannerCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
