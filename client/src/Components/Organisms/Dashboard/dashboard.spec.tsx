import { mount } from 'enzyme';
import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Dashboard from '.';

const props = {
  getTemp: () => null,
  mostRecent: null,
  temperature: null,
};

describe('<Dashboard />', () => {
  it('should match internal tree', () => {
    const internalTree = renderer.create(<Dashboard {...props} />).toJSON();

    expect(internalTree).toMatchSnapshot();
  });

  it('should call getTemp onClick', () => {
    const spy = jest.fn();
    props.getTemp = spy;

    const component = mount(<Dashboard {...props} />);
    const button = component.find('button');

    button.simulate('click');

    expect(spy).toHaveBeenCalled();
  });

  it('should show N/A when no most recent response', () => {
    const component = mount(<Dashboard {...props} />);
    const actual = component.find('h3').text();
    const expected = 'Most Recent Temperature: N/A';

    expect(actual).toEqual(expected);
  });

  it('should show N/A when no temperature', () => {
    const component = mount(<Dashboard {...props} />);
    const actual = component.find('.dashboard-body').text();
    const expected = 'Current Temperature is: N/A';

    expect(actual).toEqual(expected);
  });

  it('should show most recent temperature when no most recent response', () => {
    // @ts-ignore
    props.mostRecent = {
      __V: 0,
      _id: '0',
      createdAt: '2018-08-12T07:00:00.000Z',
      temperature: '80\n',
      updatedAt: '2018-08-12T07:00:00.000Z',
    };
    const component = mount(<Dashboard {...props} />);
    const actual = component.find('h3').text();
    const expected = 'Most Recent Temperature: 80.';

    expect(actual).toEqual(expected);
  });

  it('should show most recent temperature when no most recent response', () => {
    // @ts-ignore
    props.temperature = '83';
    const component = mount(<Dashboard {...props} />);
    const actual = component.find('.dashboard-body').text();
    const expected = 'Current Temperature is: 83';

    expect(actual).toEqual(expected);
  });
});
