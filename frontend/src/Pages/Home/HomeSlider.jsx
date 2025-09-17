import React from 'react';
// Import Navigation styles
import 'swiper/css/navigation';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';

const HomeSlider = () => {
    return (
        <div className='homeSlider'>
            <div className='container rounded-[20px] overflow-hidden'>
                <Swiper navigation={true} spaceBetween={10} slidesPerView={1} loop={true}
                pagination={{
                clickable: true,
                }}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation, Pagination]} className="mySwiper">
                    <SwiperSlide>
                        <img src="https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/bltade94cf09eea34b2/67b7ebc75dcb773a66dcf97d/EN-Nike_Foamposite_Galaxy_(New_Release)Primary_Desktop-Small.jpg?auto=webp&format=pjpg&quality=75&dpr=2&width=1246"
                            alt="slider-1" className='w-full h-full object-cover rounded-lg'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt6a62c9cad734774a/67b799d7ed968eed9e632416/Supreme_SS25_Week_1Primary_Desktop-Small.jpg?auto=webp&format=pjpg&quality=75&dpr=2&width=1246"
                            alt="slider-1" className='w-full h-full object-cover rounded-lg'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt7ff9d787d2789a8a/67b603ee9bea6d8f2249139c/LV_x_Murakami_Trending_-_EN_-_Primary_Desktop-Small.jpg?auto=webp&format=pjpg&quality=75&dpr=2&width=1246"
                            alt="slider-1" className='w-full h-full object-cover rounded-lg'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt00710541b41410ca/67b60442fd5f932a7bfcd35c/EN-Leopard_Print_EditPrimary_Desktop-Small.jpg?auto=webp&format=pjpg&quality=75&dpr=2&width=1246"
                            alt="slider-1" className='w-full h-full object-cover rounded-lg'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt271cb648145a345b/67eab338deb0563a3db01de4/EN-The_Opium_EditPrimary_Desktop-Small.jpg?auto=webp&format=pjpg&quality=75&dpr=2&width=1246"
                            alt="slider-1" className='w-full h-full object-cover rounded-lg'/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt0511d4aa08aa3971/67ea96a3586191469cd4f138/Nike_x_CPFM_-_EN_-_Primary_Desktop-Small.jpg?auto=webp&format=pjpg&quality=75&dpr=2&width=1246"
                            alt="slider-1" className='w-full h-full object-cover rounded-lg'/>
                    </SwiperSlide>
            </Swiper>
            </div>
        </div>
    )
}

export default HomeSlider;
