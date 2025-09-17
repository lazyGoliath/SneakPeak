import React from "react";
// Import Navigation styles
import 'swiper/css/navigation';


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

const AdsBannerSlider = () => {
    return (
        <div className='homeCatSlider py-8 pt-4'>
            <div className='container rounded-[10px]'>
                <Swiper navigation={true} spaceBetween={10} slidesPerView={5} loop={true}
                    pagination={{
                    clickable: true,
                    }}
                    centeredSlides={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Navigation, Pagination]} className="mySwiper">
                </Swiper>
            </div>
        </div>
    );
}

export default AdsBannerSlider;