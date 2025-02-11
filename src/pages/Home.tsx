import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Banner from '../components/layout/banner/Banner';
import Charts from '../components/layout/charts/Charts';
import Footer from '../components/layout/footer/Footer';
import NavBar from '../components/layout/navbar/NavBar';
import { menuList } from '../constants/menuList';
import './home.scss';
import { setCategory } from '../redux/action';

export default function Home() {
  const swiperRef = useRef<SwiperClass>(null);
  const dispatch = useDispatch();
  const activeCategory = useSelector(
    (state: any) => state.category.activeCategory,
  );

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(activeCategory);
    }
  }, [swiperRef, activeCategory]);

  const handleSlideChange = (event: SwiperClass) => {
    dispatch(setCategory(event.activeIndex));
  };

  return (
    <div className="home-container">
      <NavBar />

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="category-swiper"
        spaceBetween={48}
        onSlideChange={(event) => handleSlideChange(event)}
      >
        {menuList.map((_, index) => (
          <SwiperSlide key={index}>
            <Banner />
            <Charts />
            <Footer />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
