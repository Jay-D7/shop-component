export const ShopList = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-4">Shop Component</h2>
        <p className="text-gray-700 mb-4">
          This is a simple shop component built with React and Tailwind CSS.
        </p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-lg font-semibold">$19.99</span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">In Stock</span>
          <span className="text-gray-600">Qty: 1</span>
        </div>
        <div className="mt-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            <p className="text-white-600">Checkout</p>
          </button>
        </div>
      </div>
    </div>
  );
};
