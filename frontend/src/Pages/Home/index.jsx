import React from "react";
import HomeSlider from "./HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider";
import { FaShippingFast } from "react-icons/fa";
import AdsBannerSlider from "../../components/AdsBannerSlider";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const products = [
        { 
            id: 1, 
            name: 'Nike Air Max', 
            type: 'sneakers', 
            brand: 'Nike', 
            price: '$120',
            image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-max-270-mens-shoes-KkLcGR.png'
        },
        { 
            id: 2, 
            name: 'Adidas Ultraboost', 
            type: 'running shoes', 
            brand: 'Adidas', 
            price: '$180',
            image: 'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/b4fbfbe2558449e4ab45921887d110a0_9366/Ultraboost_1.0_Shoes_White_JQ0823_05_standard.jpg'
        },
        { 
            id: 3, 
            name: 'Classic Clog', 
            type: 'crocs', 
            brand: 'Crocs', 
            price: '$50',
            image: 'https://m.media-amazon.com/images/I/717XgIzBP4L._SX625_.jpg'
        },
        { 
            id: 4, 
            name: 'Air Jordan 1', 
            type: 'basketball shoes', 
            brand: 'Jordan', 
            price: '$170',
            image: 'https://cdn.luxe.digital/media/20230927084701/best-jordans-of-all-time-ranking-list-luxe-digital-1200x600.jpg'
        },
        { 
            id: 5, 
            name: 'Nike Air Force 1', 
            type: 'casual shoes', 
            brand: 'Nike', 
            price: '$110',
            image: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/12424d46-b851-4633-8a36-3088635f44cb/AIR+FORCE+1+RETRO+LL+QS.png'
        },
        { 
            id: 6, 
            name: 'Adidas NMD_R1', 
            type: 'lifestyle', 
            brand: 'Adidas', 
            price: '$130',
            image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/1c3d884f0e0043408142aef900fd8116_9366/NMD_R1_Shoes_White_HQ4451_02_standard_hover.jpg'
        },
        {
            id: 7,
            name: 'New Balance 550',
            type: 'lifestyle',
            brand: 'New Balance',
            price: '$110',
            image: 'https://nb.scene7.com/is/image/NB/bb550wt1_nb_05_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440'
        },
        {
            id: 8,
            name: 'Puma RS-X',
            type: 'lifestyle',
            brand: 'Puma',
            price: '$120',
            image: 'https://images.puma.net/images/370539/01/sv01/fnd/IND/600/w/1000/h/1000/bg/255,255,255'
        },
        {
            id: 9,
            name: 'Vans Old Skool',
            type: 'skateboarding',
            brand: 'Vans',
            price: '$75',
            image: 'https://assets.vans.com/images/t_img/c_fill,g_center,f_auto,h_573,w_458,e_unsharp_mask:100/dpr_2.0/v1747942437/VN000D3HY28-ALT1/Old-Skool-Shoe.png'
        },
        {
            id: 10,
            name: 'Converse Chuck 70',
            type: 'casual',
            brand: 'Converse',
            price: '$85',
            image: 'https://converse.static.n7.io/media/catalog/product/1/6/162050c_e_107x1.jpg'
        }
    ]

    const goToProductDetail = (id) => {
        navigate(`/products/${id}`);
    };

    return (
        <>
            <HomeSlider />
            <br />
            <h2 className="text-[25px] px-20 py-2 w-full font-bold">Browse Popular Brands</h2>
            <HomeCatSlider />

            <section className="py-16 bg-white mt">
                <div className="container">
                    <div className="freeShipping w-full p-4 border-2 border-[red] rounded-md py-4 flex items-center justify-between">
                        <div className="col1 flex items-center gap-4">
                            <FaShippingFast className="text-[40px]" />
                            <span className="text-[20px] font-[600]">Free Shipping!!</span>
                        </div>

                        <div className="col2 flex items-center gap-4">
                            <span className="mb-0 font-[500]">Free delivery now on your first order and over $200.</span>
                        </div>

                        <div>
                            <p className="font-bold text-[25px]">-Only $200</p>
                        </div>
                    </div>

                    <AdsBannerSlider />

                    {/* Product Cards Section */}
                    <div className="product-cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-4 sm:px-6 md:px-8">
                        {products.map(product => (
                            <div 
                                key={product.id} 
                                onClick={() => goToProductDetail(product.id)} 
                                className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border border-gray-100"
                            >
                                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-100">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-64 w-full object-contain object-center p-4 group-hover:opacity-90 transition-opacity"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = 'https://via.placeholder.com/300x300?text=Image+Not+Available';
                                        }}
                                    />
                                </div>
                                <div className="p-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-1">{product.name}</h3>
                                            <p className="text-sm text-gray-600 capitalize">{product.brand} • {product.type}</p>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-lg font-bold text-gray-900">{product.price}</p>
                                            {parseInt(product.price.replace('$', '')) > 100 && (
                                                <span className="text-xs text-green-600 font-medium">Free Shipping</span>
                                            )}
                                        </div>
                                    </div>
                                    <button className="mt-4 w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors text-sm font-medium">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <br /><br /><br /><br />
        </>
    );
}

export default Home;