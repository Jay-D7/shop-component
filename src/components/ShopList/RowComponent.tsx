import { useEffect } from 'react';

import type { Shop } from './ShopList';
import { parseAddress } from './parseAddress';

interface RowComponentProps {
  shop: Shop;
  style?: React.CSSProperties;
}

export const RowComponent = ({ shop, style }: RowComponentProps) => {
  const { street, city } = parseAddress(shop.address);
  // Test parseAddress runs in the browser and check if React.window working
  useEffect(() => {
    console.log(parseAddress('Oxford street 66-666, London'));
  }, []);

  return (
    <li
      key={shop.id}
      style={style}
      className="mx-auto flex max-w-sm flex-col items-center rounded-xl border border-[#334155] bg-[#1e293b] p-6 shadow-xl transition-colors duration-300 hover:bg-amber-800 hover:shadow-2xl"
      data-testid="shop-item"
    >
      <img
        src={shop.imageUrl}
        alt={shop.address}
        className="mb-4 h-40 w-full rounded-lg bg-[#334155] object-cover"
        loading="lazy"
      />
      <div className="w-full">
        <div className="mb-2 flex justify-between">
          <span className="text-xs text-gray-400">ID: {shop.id}</span>
          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              shop.type === 'FRANCHISE'
                ? 'bg-blue-900 text-blue-300'
                : 'bg-green-900 text-green-300'
            }`}
          >
            {shop.type}
          </span>
        </div>
        <p className="mb-2 text-right text-gray-400">{`${street}, ${city}`}</p>
        <button className="w-full rounded bg-gradient-to-r from-blue-700 to-blue-500 px-4 py-2 font-semibold text-white transition-colors hover:from-blue-600 hover:to-blue-400">
          Add to Cart
        </button>
      </div>
    </li>
  );
};
