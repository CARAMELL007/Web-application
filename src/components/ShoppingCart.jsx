const ShoppingCart = ({ cartItems, addToCart, removeFromCart, clearCart }) => {
  const shippingFee = 50; // ค่าจัดส่งคงที่ 50 บาท
  const total = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const totalWithShipping = total + shippingFee; // รวมค่าจัดส่ง

  return (
    <div className="absolute top-0 right-0 mt-5 mr-3 border rounded-lg shadow-md bg-white p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">ตะกร้าสินค้า</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">ตะกร้าของคุณว่างเปล่า</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-lg text-gray-800">{item.name}</h3>
                <p className="text-gray-600">฿{item.price} x {item.qty}</p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-700"
                  onClick={() => removeFromCart(item)}
                >
                  -
                </button>
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-700"
                  onClick={() => addToCart(item)}
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <div className="text-right font-bold text-xl text-gray-800">
            รวมสินค้า: ฿{total}
          </div>
          <div className="text-right text-lg text-gray-800">
            ค่าจัดส่ง: ฿{shippingFee}
          </div>
          <div className="text-right font-bold text-xl text-gray-800">
            รวมทั้งหมด: ฿{totalWithShipping}
          </div>
          
          <button
            className="bg-red-600 text-white w-full px-4 py-2 mt-4 rounded hover:bg-red-800"
            onClick={clearCart}
          >
            ล้างตะกร้า
          </button>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;

