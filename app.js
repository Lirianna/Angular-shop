(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', function() {
    this.products = gems;
  });

  var gems = [
    {
      name: 'Dodecachedron',
      price: 2.95,
      description: '...',
      canPurchase: true,
      images: [
          'img/sri-lankan-pink-spinel-oval-king-stone-gems-160503a.jpg'
      ]
    },
    {
      name: 'Pentagonal',
      price: 5.95,
      description: '...',
      canPurchase: true,
      images: [
        'img/tanzanite-sydney-king-stone-gems-150286a.jpg'
      ]
    }
  ]
})();
