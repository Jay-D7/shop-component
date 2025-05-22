import { useLayoutEffect, useRef, useState } from 'react';
import { FixedSizeGrid as Grid } from 'react-window';
import type { GridChildComponentProps } from 'react-window';

import { RowComponent } from './RowComponent';

export type Shop = {
  id: string;
  address: string;
  imageUrl: string;
  type: 'FRANCHISE' | 'REGULAR';
};

interface ShopListProps {
  shops: Shop[];
  // loading?: boolean;
  // error?: string || null;
}

export const ShopList = ({ shops }: ShopListProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(1200);

  // Responsive: update container width on resize
  useLayoutEffect(() => {
    function updateWidth() {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  // Responsive columns
  let columnCount = 1;
  if (containerWidth > 1024) columnCount = 3;
  else if (containerWidth > 640) columnCount = 2;

  const itemWidth = Math.floor(containerWidth / columnCount);
  const gridWidth = itemWidth * columnCount;
  const itemHeight = 340; // Adjust based on your card height
  const rowCount = Math.ceil(shops.length / columnCount);

  const Cell = ({ columnIndex, rowIndex, style }: GridChildComponentProps) => {
    const index = rowIndex * columnCount + columnIndex;
    if (index >= shops.length) return null;
    // Add padding to each cell for spacing
    return (
      <div style={{ ...style, padding: 8, boxSizing: 'border-box' }}>
        <RowComponent
          shop={shops[index]}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className="mx-auto box-border min-h-screen w-full max-w-6xl flex-col items-center"
      // Get rid of scroll if want
      // overflow-x-hidden"
    >
      <Grid
        columnCount={columnCount}
        rowCount={rowCount}
        columnWidth={itemWidth}
        rowHeight={itemHeight}
        height={Math.min(itemHeight * rowCount, 800)}
        width={gridWidth + 16}
        outerElementType="ul"
      >
        {Cell}
      </Grid>
    </div>
  );
};

// Switch to using react-window for performance with long lists, Don't use .map()
// Version before react-window
// return (
//   // <ul>
//   // {shops.map((shop) => {
//   // <li> Content </li>
//   // </lul>
// )
