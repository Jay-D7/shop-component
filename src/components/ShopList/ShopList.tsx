export const ShopList = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold">Shop Component</h2>
        <p className="mb-4 text-gray-700">
          This is a simple shop component built with React and Tailwind CSS.
        </p>
        <div className="mb-4 flex items-center justify-between">
          <span className="text-lg font-semibold">$19.99</span>
          <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-gray-600">In Stock</span>
          <span className="text-gray-600">Qty: 1</span>
        </div>
        <div className="mt-4">
          <button className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600">
            <p className="text-white-600">Checkout</p>
          </button>
        </div>
      </div>
    </div>
  );
};
