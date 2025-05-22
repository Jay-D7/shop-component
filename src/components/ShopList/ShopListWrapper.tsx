import { ShopList } from './ShopList';
import type { Shop } from './ShopList';

const shops: Shop[] = [
  {
    id: '1',
    address: 'Jana Pawła 2 66-666, Kraków',
    imageUrl:
      'https://www.dotactiv.com/hs-fs/hubfs/Small%20Retailers_Shelf_PlaceHolder.jpg?width=300&name=Small%20Retailers_Shelf_PlaceHolder.jpg',
    type: 'FRANCHISE',
  },
  {
    id: '2',
    address: 'Oxford Street 00-001, Warsaw',
    imageUrl:
      'https://www.dotactiv.com/hs-fs/hubfs/Small%20Retailers_Shelf_PlaceHolder.jpg?width=300&name=Small%20Retailers_Shelf_PlaceHolder.jpg',
    type: 'REGULAR',
  },
  {
    id: '3',
    address: 'Jana Pawła 2 66-666, Kraków',
    imageUrl:
      'https://www.dotactiv.com/hs-fs/hubfs/Small%20Retailers_Shelf_PlaceHolder.jpg?width=300&name=Small%20Retailers_Shelf_PlaceHolder.jpg',
    type: 'FRANCHISE',
  },
  {
    id: '4',
    address: 'Oxford Street 00-001, Warsaw',
    imageUrl:
      'https://www.dotactiv.com/hs-fs/hubfs/Small%20Retailers_Shelf_PlaceHolder.jpg?width=300&name=Small%20Retailers_Shelf_PlaceHolder.jpg',
    type: 'REGULAR',
  },
];

export const ShopListWrapper = () => {
  // <div className="flex min-h-screen flex-wrap justify-center gap-8 bg-sky-900 p-8">
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-[#0f172a] to-[#1e293b]">
      <ShopList shops={shops} />
    </div>
  );
};
