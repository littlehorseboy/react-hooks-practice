import React from 'react';
import { render } from 'enzyme';
import Router from './Router.jsx';

describe('Router.jsx', () => {
  const wrapper = render(<Router />);

  test('snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
