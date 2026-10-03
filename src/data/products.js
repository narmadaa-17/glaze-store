const p = (id, name, category, price, blurb, image) => ({
  id, name, category, price, blurb, image
})

export const products = [
  p(1, 'Ridge Mug', 'Mugs', 499, 'Hand-thrown stoneware mug with a ribbed grip and a cobalt rim.', '/images/ridge-mug.jpg'),
  p(2, 'Tide Bowl', 'Bowls', 799, 'Wide serving bowl with a beautiful sea-green glazed finish.', '/images/Green bowl.jpg'),
  p(3, 'Ash Vase', 'Vases', 1199, 'Tall, narrow ceramic vase with a smooth matte finish.', '/images/Ash space.jpg'),
  p(4, 'Moss Planter', 'Planters', 699, 'Ceramic planter with a drainage hole and matching saucer.', '/images/Moss planter.jpg'),
  p(5, 'Dune Plate Set', 'Plates', 1499, 'Set of four ceramic dinner plates with a speckled sand finish.', '/images/dune plates.jpg'),
  p(6, 'Ink Espresso Cup', 'Mugs', 399, 'Small, thick-walled ceramic cup designed to retain heat.', '/images/espresso.jpg'),
  p(7, 'Reed Bud Vase', 'Vases', 599, 'Compact ceramic vase designed for a single flower stem.', '/images/reed vase.jpg'),
  p(8, 'Kiln Bowl Set', 'Bowls', 999, 'Set of three nesting ceramic bowls in graduated sizes.', '/images/kiln vase.jpg')
]

export const categories = ['All', ...new Set(products.map(x => x.category))]