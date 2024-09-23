import WImage from '../assets/W.png';
import OImage from '../assets/O.png';
import AImage from '../assets/A.png';
import GUImage from '../assets/GU.png';
import RImage from '../assets/R.png';
import PImage from '../assets/P.png';
import CImage from '../assets/C.png';
import JImage from '../assets/J.png';
import MImage from '../assets/M.png';
import GImage from '../assets/G.png'
import CAImage from '../assets/CA.png';
import SImage from '../assets/S.png';

const ProductList = ({ addToCart }) => {
  const products = [
    { id: 1, name: "แตงโม", price: 100, image: WImage },
    { id: 2, name: "ส้ม", price: 50, image: OImage },
    { id: 3, name: "แอปเปิ้ล", price: 60, image: AImage },
    { id: 4, name: "ฝรั่ง", price: 25, image: GUImage },
    { id: 5, name: "ชมพู่", price: 20, image: RImage },
    { id: 6, name: "ส้มโอ", price: 30, image: PImage },
    { id: 7, name: "มะพร้าว", price: 150, image: CImage },
    { id: 8, name: "ขนุน", price: 100, image: JImage },
    { id: 9, name: "มะม่วง", price: 26, image: MImage },
    { id: 10, name: "องุ่น", price: 250, image: GImage },
    { id: 12, name: "แคนตาลูป", price: 250, image:CAImage },
    { id: 14, name: "สตอเบอร์รี่", price: 300, image: SImage },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 justify-center items-center">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded-lg shadow-md bg-white bg-opacity-90 mx-auto"> 
          <img
            src={product.image}
            alt={product.name}
            className="object-cover mb-4 mx-auto w-48 h-48"
          />
          <h2 className="text-xl font-semibold text-black text-center">{product.name}</h2> 
          <p className="text-black text-center">฿{product.price}</p> 
          <button
            className="bg-blue-500 text-white px-4 py-2 mt-3 rounded hover:bg-blue-700 block mx-auto"
            onClick={() => addToCart(product)}
          >
            เพิ่มในตะกร้า
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;

