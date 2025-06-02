export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'Techs' | 'Clothes' | 'Decor';
};

export const products: Record<'All' | 'Techs' | 'Clothes' | 'Decor', Product[]> = {
  Clothes: [
    { id: 'airbest', name: 'AirBest Sneakers', price: 79, image: 'products/clothes/AirBest.jpg', category: 'Clothes' },
    { id: 'airfly-sneakers', name: 'Airfly Sneakers', price: 89, image: 'products/clothes/airflySneakers.jpg', category: 'Clothes' },
    { id: 'demon-slayer-shirt', name: 'Demon Slayer Shirt', price: 35, image: 'products/clothes/dc7c37bf6d78f53cb804ee1f03f1c0e1.jpg', category: 'Clothes' },
    { id: 'dragonball-shirt', name: 'Dragon Ball Shirt', price: 39, image: 'products/clothes/dragonBall.jpg', category: 'Clothes' },
    { id: 'nike-set', name: 'Nike T-shirt Set', price: 49, image: 'products/clothes/eccfbb16754f50b4d5288c514abc1714.jpg', category: 'Clothes' },
    { id: 'black-nike-tee', name: 'Black Nike Tee', price: 29, image: 'products/clothes/f3405e8f24d49fd36f378e1f60e480b4.jpg', category: 'Clothes' },
    { id: 'magic-feet', name: 'MagicFeet Sneakers', price: 109, image: 'products/clothes/magicFeet.jpg', category: 'Clothes' },
    { id: 'man-sneakers', name: 'Men’s Sneakers', price: 69, image: 'products/clothes/manSneakers.jpg', category: 'Clothes' },
    { id: 'nirvana-shirt', name: 'Nirvana Shirt', price: 42, image: 'products/clothes/Nirvana.jpg', category: 'Clothes' },
    { id: 'one-piece-shirt', name: 'One Piece Shirt', price: 38, image: 'products/clothes/OnePiece.jpg', category: 'Clothes' },
    { id: 'classic-sneakers', name: 'Classic Sneakers', price: 79, image: 'products/clothes/sneakers.jpg', category: 'Clothes' },
    { id: 'tshirt-gang', name: 'Tshirt Gang', price: 34, image: 'products/clothes/TshirtGang.jpg', category: 'Clothes' },
    { id: 'wings-shirt', name: 'Wings Shirt', price: 28, image: 'products/clothes/wings.jpg', category: 'Clothes' },
  ],

  Decor: [
    { id: 'twin-bed', name: '2 Beds for 1 Price', price: 349, image: 'products/deco/2bed1price.jpg', category: 'Decor' },
    { id: 'bedroom-modern', name: 'Modern Bedroom', price: 529, image: 'products/deco/bedroom1.jpg', category: 'Decor' },
    { id: 'bedroom-comfort', name: 'Comfort Bedroom Set', price: 789, image: 'products/deco/bedroomcomfort.jpg', category: 'Decor' },
    { id: 'black-closet', name: 'Black Closet', price: 229, image: 'products/deco/closet.jpg', category: 'Decor' },
    { id: 'compact-desk-closet', name: 'Compact Closet with Desk', price: 319, image: 'products/deco/dc95fd1c3312853cffd14d27cd4902be.jpg', category: 'Decor' },
    { id: 'triple-door-closet', name: 'Triple Door Closet', price: 419, image: 'products/deco/eea308736d5b89efb4ae547e54bcdd14.jpg', category: 'Decor' },
    { id: 'drawers-oak', name: 'Oak Chest of Drawers', price: 179, image: 'products/deco/fb3c4116be0a0e4512bb20a51bf2a20e.jpg', category: 'Decor' },
    { id: 'full-bed', name: 'Full Bed Frame', price: 459, image: 'products/deco/fullBed.jpg', category: 'Decor' },
    { id: 'lit-dali-baba', name: 'Lit Dali Baba', price: 649, image: 'products/deco/LitDaliBaba.jpg', category: 'Decor' },
    { id: 'marriage-bed', name: 'Marriage Bed', price: 599, image: 'products/deco/MarriageBed.jpg', category: 'Decor' },
    { id: 'mid-closet', name: 'Mid Height Closet', price: 199, image: 'products/deco/midCloset.jpg', category: 'Decor' },
    { id: 'white-vanity', name: 'Nice White Vanity', price: 269, image: 'products/deco/NiceCloset.jpg', category: 'Decor' },
    { id: 'perfect-bed', name: 'Perfect Bed', price: 499, image: 'products/deco/perfectBed.jpg', category: 'Decor' },
  ],

  Techs: [
    { id: 'asus-expertbook', name: 'Asus ExpertBook', price: 849, image: 'products/techs/AsusExpertBook.jpg', category: 'Techs' },
    { id: 'headphone', name: 'Gaming Headphone', price: 129, image: 'products/techs/Headphone.jpg', category: 'Techs' },
    { id: 'keyboard-classic', name: 'Mechanical Keyboard', price: 89, image: 'products/techs/KeyBoard.jpg', category: 'Techs' },
    { id: 'keyboard-magic', name: 'RGB Magic Keyboard', price: 99, image: 'products/techs/KeyboardMagic.jpg', category: 'Techs' },
    { id: 'macbook', name: 'MacBook Pro', price: 1399, image: 'products/techs/MacBook.jpg', category: 'Techs' },
    { id: 'microphone', name: 'Studio Microphone', price: 199, image: 'products/techs/Mic.jpg', category: 'Techs' },
    { id: 'gaming-mouse', name: 'Gaming Mouse', price: 69, image: 'products/techs/Mouse.jpg', category: 'Techs' },
    { id: 'playstation-5', name: 'PlayStation 5', price: 499, image: 'products/techs/PlayStation5.jpg', category: 'Techs' },
    { id: 'ps-controller', name: 'PS5 Controller', price: 89, image: 'products/techs/PScontroller.jpg', category: 'Techs' },
    { id: 'samsung-galaxy', name: 'Samsung Galaxy S25 Ultra', price: 1199, image: 'products/techs/Samsung25.jpg', category: 'Techs' },
    { id: 'samsung-tv', name: 'Samsung UHD TV', price: 699, image: 'products/techs/TVSamsung.jpg', category: 'Techs' },
    { id: 'xbox-controller', name: 'Xbox Controller', price: 79, image: 'products/techs/Xboxcontroller.jpg', category: 'Techs' },
  ],

  All: [],
};

products.All = [...products.Techs, ...products.Clothes, ...products.Decor];