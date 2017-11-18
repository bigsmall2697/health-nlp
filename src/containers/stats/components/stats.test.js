import React from 'react';
import Stats from './stats';
import sinon from 'sinon';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';

describe('Stats component', () => {

  let _props, _spies, _wrapper, _context;

  beforeEach(() => {
    _spies = {};
    _props = { stats: {} };
    _context = {};
    _wrapper = shallow(<Stats {..._props} />, { context: _context });
  });

  it('renders without crashing, fetching messages when no count is ready yet', () => {
    const div = document.createElement('div');
    const context = {};
    const fmcount = sinon.spy();
    ReactDOM.render(<Stats stats={{}} fetchMessagesCount={fmcount} />, div);
    expect(fmcount.called).toBeTruthy();
  });

  it('renders without crashing, fetching no messages if a count is already present', () => {
    const div = document.createElement('div');
    const context = {};
    const fmcount = sinon.spy();
    ReactDOM.render(<Stats stats={{count: 50}} fetchMessagesCount={fmcount} />, div);
    expect(fmcount.called).toBeFalsy();
  });

});