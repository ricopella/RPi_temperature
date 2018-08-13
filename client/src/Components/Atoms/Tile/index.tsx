import * as React from 'react';
import ClassNames from '../../../utils/classNames';

import './tile.css';

interface TileProps {
  children?: React.ReactNode | React.ReactNodeArray;
  className?: string;
  style?: React.CSSProperties;
}

const Tile: React.SFC<TileProps> = ({ children, className }) => {
  return (
    <div className={ClassNames({ tile: true, className })}>
      {children && children}
    </div>
  );
};

export default Tile;
