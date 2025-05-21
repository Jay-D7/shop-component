import { ShopList } from './ShopList';
import type { Shop } from './ShopList';

const shops: Shop[] = [
  {
    id: '1',
    address: 'Jana Pawła 2 66-666, Krakow',
    imageUrl: 'https://via.placeholder.com/300x160',
    type: 'FRANCHISE',
  },
  {
    id: '2',
    address: 'Oxford Street 00-001, Warsaw',
    imageUrl: 'https://via.placeholder.com/300x160',
    type: 'REGULAR',
  },
  {
    id: '3',
    address: 'Oxford Street 00-001, Warsaw',
    imageUrl: 'https://via.placeholder.com/300x160',
    type: 'REGULAR',
  },
  {
    id: '4',
    address: 'Oxford Street 00-001, Warsaw',
    imageUrl: 'https://via.placeholder.com/300x160',
    type: 'REGULAR',
  },
  {
    id: '4',
    address: 'Oxford Street 00-001, Warsaw',
    imageUrl: 'https://via.placeholder.com/300x160',
    type: 'REGULAR',
  },
  {
    id: '4',
    address: 'Oxford Street 00-001, Warsaw',
    imageUrl: 'https://via.placeholder.com/300x160',
    type: 'REGULAR',
  },
  {
    id: '4',
    address: 'Oxford Street 00-001, Warsaw',
    imageUrl: 'https://via.placeholder.com/300x160',
    type: 'REGULAR',
  },
  {
    id: '4',
    address: 'Oxford Street 00-001, Warsaw',
    imageUrl: 'https://via.placeholder.com/300x160',
    type: 'REGULAR',
  },
  {
    id: '4',
    address: 'Oxford Street 00-001, Warsaw',
    imageUrl: 'https://via.placeholder.com/300x160',
    type: 'REGULAR',
  },
  {
    id: '4',
    address: 'Oxford Street 00-001, Warsaw',
    imageUrl: 'https://via.placeholder.com/300x160',
    type: 'REGULAR',
  },
  {
    id: '4',
    address: 'Oxford Street 00-001, Warsaw',
    imageUrl: 'https://via.placeholder.com/300x160',
    type: 'REGULAR',
  },
  {
    id: '4',
    address: 'Oxford Street 00-001, Warsaw',
    imageUrl: 'https://via.placeholder.com/300x160',
    type: 'REGULAR',
  },
  {
    id: '4',
    address: 'Oxford Street 00-001, Warsaw',
    imageUrl: 'https://via.placeholder.com/300x160',
    type: 'REGULAR',
  },
  {
    id: '4',
    address: 'Oxford Street 00-001, Warsaw',
    imageUrl: 'https://via.placeholder.com/300x160',
    type: 'REGULAR',
  },
];

export const ShopListWrapper = () => {
  // <div className="flex min-h-screen flex-wrap justify-center gap-8 bg-sky-900 p-8">
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-[#13388e] to-[#385d99]">
      <ShopList shops={shops} />
    </div>
  );
};
