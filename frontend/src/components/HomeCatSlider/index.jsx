import React from 'react';
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

import { Link } from 'react-router-dom';

const HomeCatSlider = () => {
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
                        <SwiperSlide>
                            <img src="https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blte08f252776d5834f/6773260836f5cc36f9db1b35/Copy_of_Brand_Tile_Template_(10).png?auto=webp&format=pjpg&width=234&height=160&dpr=2&quality=75"
                                alt="slider-1" className='w-full h-full object-cover rounded-lg'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/bltc5a55f409dcd724d/6773257bb290b35ed991f4f6/Copy_of_Brand_Tile_Template_(9).png?auto=webp&format=pjpg&width=234&height=160&dpr=2&quality=75"
                                alt="slider-1" className='w-full h-full object-cover rounded-lg'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt7de4e73e15b4ad06/67a2992aecc9d7c5f9413fce/Copy_of_Brand_Tile_Template_(24).png?auto=webp&format=pjpg&width=234&height=160&dpr=2&quality=75"
                                alt="slider-1" className='w-full h-full object-cover rounded-lg'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt53990f215de13e8e/67732787775da7112d1f51d0/Copy_of_Brand_Tile_Template_(13).png?auto=webp&format=pjpg&width=234&height=160&dpr=2&quality=75"
                                alt="slider-1" className='w-full h-full object-cover rounded-lg'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt67260f9960b40bc3/67732801776bc04ff327d1fc/Copy_of_Brand_Tile_Template_(12).png?auto=webp&format=pjpg&width=234&height=160&dpr=2&quality=75"
                                alt="slider-1" className='w-full h-full object-cover rounded-lg'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/bltaa06881e37221628/67732f30258d13663490765a/Copy_of_Brand_Tile_Template_(19).png?auto=webp&format=pjpg&width=234&height=160&dpr=2&quality=75"
                                alt="slider-1" className='w-full h-full object-cover rounded-lg'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt39ab15307f05ef1f/67732f473881b884dfa6fceb/Copy_of_Brand_Tile_Template_(20).png?auto=webp&format=pjpg&width=234&height=160&dpr=2&quality=75"
                                alt="slider-1" className='w-full h-full object-cover rounded-lg'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt27f501d78dcb3f1a/67732f5b5754575b2d18f8b0/Copy_of_Brand_Tile_Template_(21).png?auto=webp&format=pjpg&width=234&height=160&dpr=2&quality=75"
                                alt="slider-1" className='w-full h-full object-cover rounded-lg'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt7429867edc048844/67732f6f91eb612d092ffe92/Copy_of_Brand_Tile_Template_(22).png?auto=webp&format=pjpg&width=234&height=160&dpr=2&quality=75"
                                alt="slider-1" className='w-full h-full object-cover rounded-lg'/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt80bee13092b482f2/67732fa53c2538f95a759403/Copy_of_Brand_Tile_Template_(23).png?auto=webp&format=pjpg&width=234&height=160&dpr=2&quality=75"
                                alt="slider-1" className='w-full h-full object-cover rounded-lg'/>
                        </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default HomeCatSlider;