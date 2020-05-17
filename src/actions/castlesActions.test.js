describe('castles actions', () => {
  it('creates a ADD_CASTLE action', () => {
    const action = addCastle({ 
      _id: 'some1234455667',
      name: 'spooky castle',
      year: 1869,
      image: 'img.png',
      description: 'very spooky, might be haunted'
    });
    expect(action).toEqual({
      type: 'ADD_CASTLE',
      payload: {
        _id: 'some1234455667',
        name: 'spooky castle',
        year: 1869,
        image: 'img.png',
        description: 'very spooky, might be haunted'
      }
    });
  });
});
