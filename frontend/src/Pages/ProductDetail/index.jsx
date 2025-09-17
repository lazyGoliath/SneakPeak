import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext';
import { FaShoppingCart, FaStar, FaArrowLeft } from 'react-icons/fa';

const productData = {
  1: { 
    id: 1, 
    name: 'Nike Air Max 270', 
    type: 'sneakers', 
    brand: 'Nike', 
    price: '$150', 
    description: 'The Nike Air Max 270 delivers a comfortable fit with a breathable upper and responsive cushioning for all-day comfort.', 
    images: [
      'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-max-270-mens-shoes-KkLcGR.png',
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/162a3c7d-d32b-46dd-b9d1-631494f6f2db/W+AIR+MAX+270.png'
    ] 
  },
  2: { 
    id: 2, 
    name: 'Adidas Ultraboost 22', 
    type: 'running shoes', 
    brand: 'Adidas', 
    price: '$180', 
    description: 'The Ultraboost 22 features a responsive Boost midsole and a Primeknit+ upper that offers a snug, sock-like fit for the ultimate running experience.',
    images: [
      'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/15b67c700fd844908bdabe826af270a6_9366/Ultraboost_1.0_Shoes_White_JQ0823_01_00_standard.jpg',
      'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/b4fbfbe2558449e4ab45921887d110a0_9366/Ultraboost_1.0_Shoes_White_JQ0823_05_standard.jpg'
    ]
  },
  3: { 
    id: 3, 
    name: 'Classic Clog', 
    type: 'casual', 
    brand: 'Crocs', 
    price: '$50', 
    description: 'The iconic Crocs Classic Clog features Croslite material for lightweight comfort and a roomy fit that keeps you comfortable all day long.',
    images: [
      'https://m.media-amazon.com/images/I/717XgIzBP4L._SX625_.jpg',
      'https://m.media-amazon.com/images/I/71yp4LRgxsL._SX625_.jpg'
    ]
  },
  4: { 
    id: 4, 
    name: 'Air Jordan 1 Mid', 
    type: 'basketball', 
    brand: 'Jordan', 
    price: '$125', 
    description: 'The Air Jordan 1 Mid offers a clean, classic look with its iconic design and premium leather upper for superior comfort and durability.',
    images: [
      'https://cdn.luxe.digital/media/20230927084701/best-jordans-of-all-time-ranking-list-luxe-digital-1200x600.jpg',
      'https://cdn.luxe.digital/media/20230203204431/best-nike-jordans-air-jordan-I-review-luxe-digital-780x520.jpg'
    ]
  },
  5: { 
    id: 5, 
    name: 'Nike Air Force 1', 
    type: 'lifestyle', 
    brand: 'Nike', 
    price: '$110', 
    description: 'The radiance lives on in the Nike Air Force 1, the basketball original that puts a fresh spin on what you know best: durably stitched overlays, clean finishes and the perfect amount of flash to make you shine.',
    images: [
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/478ba8f9-cf57-4c23-aa24-68da789c4273/AIR+FORCE+1+RETRO+LL+QS.png',
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/12424d46-b851-4633-8a36-3088635f44cb/AIR+FORCE+1+RETRO+LL+QS.png'
    ]
  },
  6: { 
    id: 6, 
    name: 'Adidas NMD_R1', 
    type: 'lifestyle', 
    brand: 'Adidas', 
    price: '$130', 
    description: 'Inspired by the 80s, the NMD_R1 combines retro style with modern comfort. The responsive Boost cushioning provides energy return with every step.',
    images: [
      'https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/76752172861843209f02aef900fd6858_9366/NMD_R1_Shoes_White_HQ4451_01_standard.jpg',
      'https://assets.adidas.com/images/w_600,f_auto,q_auto/1c3d884f0e0043408142aef900fd8116_9366/NMD_R1_Shoes_White_HQ4451_02_standard_hover.jpg'
    ]
  },
  7: {
    id: 7,
    name: 'New Balance 550',
    type: 'lifestyle',
    brand: 'New Balance',
    price: '$110',
    description: 'The New Balance 550 combines retro basketball style with modern comfort, featuring a premium leather upper and cushioned midsole for all-day wear.',
    images: [
      'https://nb.scene7.com/is/image/NB/bb550wt1_nb_05_i?$pdpflexf2$&qlt=80&fmt=webp&wid=440&hei=440',
      'https://nb.scene7.com/is/image/NB/bb550lgr_nb_05_i?$pdpflexf2$&wid=440&hei=440'
    ]
  },
  8: {
    id: 8,
    name: 'Puma RS-X',
    type: 'lifestyle',
    brand: 'Puma',
    price: '$120',
    description: 'The PUMA RS-X brings back the retro running trend with a chunky silhouette, bold colors, and a comfortable ride for all-day wear.',
    images: [
      'https://images.puma.net/images/370539/01/sv01/fnd/IND/600/w/1000/h/1000/bg/255,255,255',
      'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/392718/07/sv01/fnd/IND/fmt/png/RS-X-Hi-Sneakers'
    ]
  },
  9: {
    id: 9,
    name: 'Vans Old Skool',
    type: 'skateboarding',
    brand: 'Vans',
    price: '$75',
    description: 'The Vans Old Skool is the classic skate shoe featuring the iconic side stripe, durable canvas and suede uppers, and a signature rubber waffle outsole.',
    images: [
      'https://assets.vans.com/images/t_img/c_fill,g_center,f_auto,h_573,w_458,e_unsharp_mask:100/dpr_2.0/v1747942442/VN000D3HY28-HERO/Old-Skool-Shoe.png',
      'https://assets.vans.com/images/t_img/c_fill,g_center,f_auto,h_573,w_458,e_unsharp_mask:100/dpr_2.0/v1747942437/VN000D3HY28-ALT1/Old-Skool-Shoe.png'
    ]
  },
  10: {
    id: 10,
    name: 'Converse Chuck 70',
    type: 'casual',
    brand: 'Converse',
    price: '$85',
    description: 'The Converse Chuck 70 is a modern take on the classic basketball shoe, featuring premium materials, improved cushioning, and a vintage look.',
    images: [
      'https://converse.static.n7.io/media/catalog/product/1/6/162050c_e_107x1.jpg',
      'https://converse.static.n7.io/media/catalog/product/1/6/162050c_a_107x1.jpg'
    ]
  },
};

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const product = productData[productId];

  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return <div className="p-8 text-center">Product not found.</div>;
  }

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity: 1
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= 1) {
      setQuantity(value);
    }
  };

  return (
    <div className="product-detail-container max-w-6xl mx-auto p-4 sm:p-8">
      <button 
        onClick={() => navigate(-1)} 
        className="mb-6 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md flex items-center text-gray-700 transition-colors"
      >
        <FaArrowLeft className="mr-2" /> Back to Products
      </button>
      
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:flex">
          {/* Product Images */}
          <div className="md:w-1/2 p-6">
            <div className="bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src={product.images[0]} 
                alt={product.name} 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-2 mt-4">
              {product.images.map((src, index) => (
                <div key={index} className="border rounded overflow-hidden cursor-pointer hover:border-blue-500">
                  <img 
                    src={src} 
                    alt={`${product.name} ${index + 1}`} 
                    className="w-full h-20 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Product Info */}
          <div className="md:w-1/2 p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="w-5 h-5" />
                ))}
              </div>
              <span className="text-gray-600 ml-2">(24 reviews)</span>
            </div>
            
            <p className="text-2xl font-bold text-gray-900 mb-6">{product.price}</p>
            
            <p className="text-gray-700 mb-6">{product.description}</p>
            
            <div className="mb-6">
              <span className="text-gray-700 font-medium block mb-2">Quantity</span>
              <div className="flex items-center">
                <button 
                  onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                  className="bg-gray-200 px-3 py-1 rounded-l hover:bg-gray-300"
                >
                  -
                </button>
                <input 
                  type="number" 
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="w-16 text-center border-t border-b border-gray-300 py-1"
                />
                <button 
                  onClick={() => setQuantity(prev => prev + 1)}
                  className="bg-gray-200 px-3 py-1 rounded-r hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                <FaShoppingCart />
                {addedToCart ? 'Added to Cart!' : 'Add to Cart'}
              </button>
              <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors">
                Buy Now
              </button>
            </div>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Product Details</h3>
              <ul className="text-gray-600 space-y-2">
                <li><span className="font-medium">Brand:</span> {product.brand}</li>
                <li><span className="font-medium">Type:</span> {product.type}</li>
                <li><span className="font-medium">SKU:</span> SNK-{product.id.toString().padStart(4, '0')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
