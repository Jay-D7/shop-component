import { ShopList } from './components/ShopList/ShopList';
import './components/ShopList/ShopList.css';
import { ShopListWrapper } from './components/ShopList/ShopListWrapper';
import { mockShops } from './components/ShopList/utilities/mockShops';

export const App = () => {
  return (
    <ShopListWrapper>
      <ShopList shops={mockShops()} />
    </ShopListWrapper>
  );
};
