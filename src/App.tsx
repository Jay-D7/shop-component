import { ShopList } from './components/ShopList/ShopList';
import './components/ShopList/ShopList.css';
import { ShopListWrapper } from './components/ShopList/ShopListWrapper';

// import { mockShops } from './components/ShopList/utilities/mockShops';
// <ShopList shops={mockShops()} />

export const App = () => {
  return (
    <ShopListWrapper>
      {({ shops, loading, error }) => (
        <ShopList shops={shops} loading={loading} error={error} />
      )}
    </ShopListWrapper>
  );
};
