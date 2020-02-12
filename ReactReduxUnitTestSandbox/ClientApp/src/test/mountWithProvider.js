import { Provider } from 'react-redux';
import React from 'react';
import { mount } from 'enzyme';

export const mountWithProvider = children => store =>
  mount(<Provider store={store}>{children}</Provider>);
