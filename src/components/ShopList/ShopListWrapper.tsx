import { type ReactNode, useEffect, useState } from 'react';

import type { Shop } from './ShopList';
import { mockShops } from './utilities/mockShops';

type shopListWrapperProps = {
  children: (props: {
    shops: Shop[];
    loading: boolean;
    error: string | null;
  }) => ReactNode;
};

export const ShopListWrapper = ({ children }: shopListWrapperProps) => {
  const [shops, setShops] = useState<Shop[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    setTimeout(() => {
      try {
        setShops(mockShops(1000)); // <-- use mockShops here
        setLoading(false);
      } catch {
        setError('Failed to load shops.');
        setLoading(false);
      }
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="error-handler">
        <span className="handler-text">Loading shops...</span>
      </div>
    );
  } else if (error === 'Failed to load shops.') {
    return (
      <div className="error-handler">
        <span className="handler-text-error">{error}</span>
      </div>
    );
  } else if (!shops.length) {
    return (
      <div className="error-handler">
        <span className="handler-text">No shops found.</span>
      </div>
    );
  }

  return (
    <div className="shop-list-wrapper">
      {children({
        shops,
        loading,
        error,
      })}
    </div>
  );
};
