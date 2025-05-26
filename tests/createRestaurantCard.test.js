const createRestaurantCard = require('../createRestaurantCard');

describe('createRestaurantCard', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="results"></div>';
  });

  test('adds a card with image, name and address', () => {
    const mockPlace = {
      name: 'Test Restaurant',
      vicinity: '123 Test St',
      photos: [{ getUrl: () => 'http://example.com/photo.jpg' }],
      place_id: 'abc123',
      price_level: 2
    };

    createRestaurantCard(mockPlace);

    const card = document.querySelector('#results .restaurant-card');
    expect(card).not.toBeNull();

    const img = card.querySelector('img');
    const name = card.querySelector('h3');
    const address = card.querySelector('p');

    expect(img).not.toBeNull();
    expect(img.src).toBe('http://example.com/photo.jpg');
    expect(name.textContent).toBe('Test Restaurant');
    expect(address.textContent).toBe('123 Test St');
  });
});
