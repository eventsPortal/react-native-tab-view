/* @flow */

import * as React from 'react';
import { shallow } from 'enzyme';
import { Animated, View } from 'react-native';
import PagerPan from '../src/PagerPan';

it('renders all children', () => {
  const component = shallow(
    <PagerPan
      layout={{ height: 0, width: 0, measured: false }}
      navigationState={{
        index: 1,
        routes: [
          { key: 'first', testID: 'first' },
          { key: 'second', testID: 'second' },
          { key: 'third', testID: 'third' },
        ],
      }}
      position={new Animated.Value(1)}
      jumpTo={jest.fn()}
      panX={new Animated.Value(0)}
      offsetX={new Animated.Value(0)}
      useNativeDriver={false}
      getTestID={({ route }) => route.testID}
    >
      <View />
      <View />
      <View />
    </PagerPan>
  );

  expect(
    component
      .find({ testID: 'first' })
      .first()
      .props().children
  ).toBe(null);
  expect(
    component
      .find({ testID: 'second' })
      .first()
      .props().children
  ).not.toBe(null);
  expect(
    component
      .find({ testID: 'third' })
      .first()
      .props().children
  ).toBe(null);

  component.setProps({
    layout: { height: 320, width: 240, measured: false },
  });

  expect(
    component
      .find({ testID: 'first' })
      .first()
      .props().children
  ).not.toBe(null);
  expect(
    component
      .find({ testID: 'second' })
      .first()
      .props().children
  ).not.toBe(null);
  expect(
    component
      .find({ testID: 'third' })
      .first()
      .props().children
  ).not.toBe(null);
});
