import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import './Categori.css';

const Cateagori = () => {
    // Define local images (must be in the "public" folder)
    const images = [
        "/slide1.jpg",
        "/slide2.jpg",
        "/slide3.jpg",
        "/slide4.jpg",
        "/slide5.jpg"
    ];

    return (
        <div className='mt-32 max-w-screen-2xl mx-auto'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index} className="slide">
                        <img src={img} alt={`Slide ${index + 1}`} className="slide-image" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Cateagori;
