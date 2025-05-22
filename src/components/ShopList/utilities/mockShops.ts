import type { Shop } from './../ShopList';

let idCounter = 1;
function randomType(): 'FRANCHISE' | 'REGULAR' {
  return Math.random() > 0.5 ? 'FRANCHISE' : 'REGULAR';
}
export const mockShops: Shop[] = [
  {
    id: String(idCounter++),
    address: 'Jana Pawła 2 66-666, Kraków',
    imageUrl:
      'https://www.dotactiv.com/hs-fs/hubfs/Small%20Retailers_Shelf_PlaceHolder.jpg?width=300&name=Small%20Retailers_Shelf_PlaceHolder.jpg',
    type: 'FRANCHISE',
  },
  {
    id: String(idCounter++),
    address: 'Oxford Street 00-001, Warsaw',
    imageUrl:
      'https://www.dotactiv.com/hs-fs/hubfs/Small%20Retailers_Shelf_PlaceHolder.jpg?width=300&name=Small%20Retailers_Shelf_PlaceHolder.jpg',
    type: 'REGULAR',
  },
  {
    id: String(idCounter++),
    address: 'Jana Pawła 2 66-666, Kraków',
    imageUrl:
      'https://www.dotactiv.com/hs-fs/hubfs/Small%20Retailers_Shelf_PlaceHolder.jpg?width=300&name=Small%20Retailers_Shelf_PlaceHolder.jpg',
    type: 'FRANCHISE',
  },
  {
    id: String(idCounter++),
    address: 'Oxford Street 00-001, Warsaw',
    imageUrl:
      'https://www.dotactiv.com/hs-fs/hubfs/Small%20Retailers_Shelf_PlaceHolder.jpg?width=300&name=Small%20Retailers_Shelf_PlaceHolder.jpg',
    type: randomType(),
  },
  {
    id: String(idCounter++),
    address: 'Oxford Street 00-001, Warsaw',
    imageUrl:
      'https://www.dotactiv.com/hs-fs/hubfs/Small%20Retailers_Shelf_PlaceHolder.jpg?width=300&name=Small%20Retailers_Shelf_PlaceHolder.jpg',
    type: randomType(),
  },
  {
    id: String(idCounter++),
    address: 'Oxford Street 00-001, Warsaw',
    imageUrl:
      'https://www.dotactiv.com/hs-fs/hubfs/Small%20Retailers_Shelf_PlaceHolder.jpg?width=300&name=Small%20Retailers_Shelf_PlaceHolder.jpg',
    type: randomType(),
  },
  {
    id: String(idCounter++),
    address: 'Oxford Street 00-001, Warsaw',
    imageUrl:
      'https://www.dotactiv.com/hs-fs/hubfs/Small%20Retailers_Shelf_PlaceHolder.jpg?width=300&name=Small%20Retailers_Shelf_PlaceHolder.jpg',
    type: randomType(),
  },
  {
    id: String(idCounter++),
    address: 'Oxford Street 00-001, Warsaw',
    imageUrl:
      'https://www.dotactiv.com/hs-fs/hubfs/Small%20Retailers_Shelf_PlaceHolder.jpg?width=300&name=Small%20Retailers_Shelf_PlaceHolder.jpg',
    type: randomType(),
  },
  {
    id: String(idCounter++),
    address: 'Oxford Street 00-001, Warsaw',
    imageUrl:
      'https://www.dotactiv.com/hs-fs/hubfs/Small%20Retailers_Shelf_PlaceHolder.jpg?width=300&name=Small%20Retailers_Shelf_PlaceHolder.jpg',
    type: randomType(),
  },
];
