import { ShopList } from './ShopList';
import { mockShops } from './utilities/mockShops';

export const ShopListWrapper = () => {
  // <div className=" flex-wrap justify-center gap-8 bg-sky-900 p-8">
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b] p-5">
      <ShopList shops={mockShops} />
    </div>
  );
};
