import { addCastle } from '../actions/castlesActions';
import reducer from './castlesReducer';

describe('castles reducer', () => {
  it('handles the ADD_CASTLE action', () => {
    const state = [];
    const action = addCastle({
      _id: '666666666666ghghghghg',
      name: 'spooky castle',
      year: 1869,
      image: 'img.png',
      description: 'very spooky, might be haunted'
    });
    const newState = reducer(state, action);

    expect(newState).toEqual([
      {
        _id: '666666666666ghghghghg',
        name: 'spooky castle',
        year: 1869,
        image: 'img.png',
        description: 'very spooky, might be haunted'
      }
    ]);


  });
});
