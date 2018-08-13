import { mount } from 'enzyme';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Tile from '.';

describe('<Tile />', () => {
  it('should match internal tree', () => {
    const internalTree = renderer.create(<Tile />).toJSON();

    expect(internalTree).toMatchSnapshot();
  });

  it('should have one child', () => {
    const component = mount(
      <Tile>
        <div className="child" />
      </Tile>,
    );

    const actual = component.find('.child').length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });
});
