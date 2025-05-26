function createRestaurantCard(place) {
    const card = document.createElement('div');
    card.className = 'restaurant-card';

    const image = document.createElement('img');
    if (place.photos && place.photos[0]) {
        if (typeof place.photos[0].getUrl === 'function') {
            image.src = place.photos[0].getUrl();
        } else {
            image.src = place.photos[0];
        }
    } else {
        image.src = 'https://via.placeholder.com/300x200?text=No+Image';
    }
    card.appendChild(image);

    const name = document.createElement('h3');
    name.textContent = place.name;
    card.appendChild(name);

    const address = document.createElement('p');
    address.textContent = place.vicinity;
    card.appendChild(address);

    if (place.price_level !== undefined) {
        const price = document.createElement('p');
        price.textContent = 'Price: ' + '$'.repeat(place.price_level);
        card.appendChild(price);
    }

    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    const seeDetailsButton = document.createElement('button');
    seeDetailsButton.className = 'details-button';
    seeDetailsButton.textContent = 'See Details';
    seeDetailsButton.onclick = () => {
        window.open(`https://www.google.com/maps/place/?q=place_id:${place.place_id}`);
    };
    buttonContainer.appendChild(seeDetailsButton);

    const directionsButton = document.createElement('button');
    directionsButton.className = 'directions-button';
    directionsButton.textContent = 'Get Directions';
    directionsButton.onclick = () => {
        window.open(`https://www.google.com/maps/dir/?api=1&destination=${place.name},${place.vicinity}`);
    };
    buttonContainer.appendChild(directionsButton);

    card.appendChild(buttonContainer);

    document.getElementById('results').appendChild(card);
}

if (typeof module !== 'undefined') {
    module.exports = createRestaurantCard;
}
