import { useEffect } from 'react';

import { parseAddress } from './parseAddress';

export type Shop = {
  id: string;
  address: string;
  imageUrl: string;
  type: 'FRANCHISE' | 'REGULAR';
};

interface ShopListProps {
  shops: Shop[];
}

export const ShopList = ({ shops }: ShopListProps) => {
  useEffect(() => {
    // Test parseAddress in a useEffect so it runs in the browser
    console.log(parseAddress('Oxford street 66-666, London'));
  }, []);

  return (
    <>
      <ul className="flex min-h-screen flex-wrap justify-center gap-8 rounded-2xl bg-gradient-to-br from-[#1e293b] to-[#0f172a] p-8">
        {shops.map((shop) => {
          const { street, city } = parseAddress(shop.address);
          return (
            <li
              className="flex w-full max-w-sm flex-col items-center rounded-xl border border-[#334155] bg-[#1e293b] p-6 shadow-xl transition-transform hover:scale-105 hover:shadow-2xl"
              key={shop.id}
              data-testid="shop-item"
            >
              <img
                className="mb-4 h-40 w-full rounded-lg bg-[#334155] object-cover"
                src={shop.imageUrl}
                alt={shop.address}
                loading="lazy"
                onError={(e) =>
                  (e.currentTarget.src =
                    'https://via.placeholder.com/300x160/1e293b/fff?text=No+Image')
                }
              />
              <div className="w-full">
                <div className="mb-2 flex items-center justify-between">
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
                <div className="mb-2 text-lg font-bold text-gray-100">
                  {city}
                </div>
                <div className="mb-4 text-gray-400">{street}</div>
                <button className="w-full rounded bg-gradient-to-r from-blue-700 to-blue-500 px-4 py-2 font-semibold text-white transition-colors hover:from-blue-600 hover:to-blue-400">
                  Add to Cart
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      {/* <ul className="flex min-h-screen flex-wrap justify-center gap-8 rounded-2xl bg-sky-800 p-8">
        {shops.map((shop) => {
          const { street, city } = parseAddress(shop.address);
          return (
            <li
              className="flex w-full max-w-sm flex-col items-center rounded-lg bg-gray-100 p-6 shadow-md"
              key={shop.id}
              data-testid="shop-item"
            >
              <img
                className="mb-4 h-40 w-full rounded object-cover"
                src={shop.imageUrl}
                alt={shop.address}
                // loading="lazy"
              />
              <div className="w-full">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs text-gray-400">ID: {shop.id}</span>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      shop.type === 'FRANCHISE'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-green-100 text-green-800'
                    }`}
                  >
                    {shop.type}
                  </span>
                </div>

                <p className="mb-2 text-right text-gray-700">{`${street}, ${city}`}</p>
                <button className="w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
                  Add to Cart
                </button>
              </div>
            </li>
          );
        })}
      </ul> */}
    </>
  );
};
