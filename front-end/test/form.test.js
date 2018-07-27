import React from 'react';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme';
import Form from '../src/form.js';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

test("A form is displayed on the page", () => {
  const wrapper = shallow(<Form />);
  const form = wrapper.find('form');
  expect(form.render().attr('id')).toEqual("add-item")
});
