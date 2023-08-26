import { Category, Product } from "./interfaces"

export const imagesSlider = [
  {
    id: 1,
    image: '/temporary/slide1.png'
  },
  {
    id: 2,
    image: '/temporary/slide2.png'
  }
]

export const categories: Category[] = [
  {
    id: 1,
    title : 'Tablas',
    slug: 'tablas'
  },
  {
    id: 2,
    title : 'Tablas completas',
    slug: 'tablas-completas'
  },
  {
    id: 3,
    title : 'Trucks',
    slug: 'trucks'
  },
  {
    id: 4,
    title : 'Ruedas',
    slug: 'ruedas'
  },
  {
    id: 5,
    title : 'Rodamientos',
    slug: 'rodamientos'
  },
  {
    id: 7,
    title: 'Accesorios',
    slug: 'accesorios'
  },
  {
    id: 8,
    title: 'Ropa',
    slug: 'ropa'
  }
]

export const products: Product[] = [
  {
    id: 1,
    img: '/temporary/prod1.webp',
    title: 'Trucks 148 hollow kingping',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet nibh ut lacus viverra convallis sed nec arcu. Nullam arcu libero, facilisis nec magna quis, pharetra porta tortor. Sed commodo pellentesque feugiat. Donec efficitur finibus dolor ac commodo. Nullam vitae lacus pellentesque, rhoncus metus et, consectetur risus. Maecenas et odio vitae ante sollicitudin rhoncus ac sit amet neque. Quisque condimentum quis orci vitae pulvinar.',
    category_id: 3,
    brand: 'Independent',
    quantity: 1,
    price: '49.990',
    slug: 'trucks-148-hollow-kingping',
  },
  {
    id: 2,
    img: '/temporary/prod2.webp',
    title: 'Trucks 150',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category_id: 3,
    brand: 'Ace trucks',
    quantity: 1,
    price: '49.990',
    slug: 'trucks-150',
  },
  {
    id: 3,
    img: '/temporary/prod3.webp',
    title: 'Willy Muñoz Pro x 8.25',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet nibh ut lacus viverra convallis sed nec arcu.',
    category_id: 1,
    brand: 'Gangsta',
    quantity: 1,
    price: '32.990',
    slug: 'willy-munoz-pro-x-8.25',
  },
  {
    id: 4,
    img: '/temporary/prod4.webp',
    title: 'Trevon board x 8.15',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet nibh ut lacus viverra convallis sed nec arcu. Nullam arcu libero, facilisis nec magna quis.',
    category_id: 1,
    brand: 'WKND',
    quantity: 1,
    price: '42.990',
    slug: 'trevon-board-x-8.15',
  },
  {
    id: 5,
    img: '/temporary/prod5.webp',
    title: 'Maalouf x 8.0',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    category_id: 1,
    brand: 'WKND',
    quantity: 1,
    price: '42.990',
    slug: 'maloouf-x-8.0',
  },
  {
    id: 6,
    img: '/temporary/prod6.jpeg',
    title: 'Gorro de lana',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet nibh ut lacus viverra convallis sed.',
    category_id: 8,
    brand: 'Delakalle',
    quantity: 1,
    price: '10.990',
    slug: 'gorro-de-lana',
  },
  {
    id: 7,
    img: '/temporary/prod7.jpg',
    title: 'GANGSTA SERIES X 8.0',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet nibh ut lacus viverra convallis sed nec arcu. Nullam arcu libero, facilisis nec magna quis, pharetra porta tortor.',
    category_id: 1,
    brand: 'Gangsta',
    quantity: 1,
    price: '32.990',
    slug: 'gangsta-series-x-8.0',
  },
  {
    id: 8,
    img: '/temporary/prod8.jpg',
    title: 'GANGSTA TAG X 8.1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet nibh ut lacus viverra convallis sed nec arcu. Nullam arcu libero, facilisis nec magna quis, pharetra porta tortor.',
    category_id: 1,
    brand: 'Gangsta',
    quantity: 1,
    price: '32.990',
    slug: 'gangsta-tag-x-8.1',
  },
  {
    id: 9,
    img: '/temporary/prod9.jpeg',
    title: 'TRUCKS 190 Hollow',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category_id: 3,
    brand: 'Independent',
    quantity: 1,
    price: '49.990',
    slug: 'trucks-190.hollow',
  },
  {
    id: 10,
    img: '/temporary/prod10.jpeg',
    title: 'Ruedas 58mm 101a',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet nibh ut lacus viverra convallis sed nec arcu.',
    category_id: 4,
    brand: 'Speed demons',
    quantity: 1,
    price: '9.990',
    slug: 'ruedas-58-mm-101a',
  },
  {
    id: 11,
    img: '/temporary/prod11.jpeg',
    title: 'Ruedas globe 54mm 98a',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet nibh ut lacus viverra convallis sed nec arcu. Nullam arcu libero, facilisis nec magna quis, pharetra porta tortor. Sed commodo pellentesque feugiat. Donec efficitur finibus dolor ac commodo. Nullam vitae lacus pellentesque, rhoncus metus et, consectetur risus. Maecenas et odio vitae ante sollicitudin rhoncus ac sit amet neque. Quisque condimentum quis orci vitae pulvinar.',
    category_id: 4,
    brand: 'Globe',
    quantity: 1,
    price: '29.990',
    slug: 'ruedas-globe-54-mm-98a',
  },
  {
    id: 12,
    img: '/temporary/prod12.jpeg',
    title: 'Ruedas 54mm 100a',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category_id: 4,
    brand: 'Spitfire',
    quantity: 1,
    price: '29.990',
    slug: 'ruedas-54-mm-100a',
  },
  {
    id: 13,
    img: '/temporary/prod13.jpeg',
    title: 'Gangsta big poppa x 8.3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet nibh ut lacus viverra convallis sed nec arcu. Nullam arcu libero, facilisis nec magna quis, pharetra porta tortor.',
    category_id: 1,
    brand: 'Gangsta',
    quantity: 1,
    price: '32.990',
    slug: 'gangsta-big-poppa-x-8.3',
  },
  {
    id: 14,
    img: '/temporary/prod14.jpg',
    title: 'joaquin soto pro board x 8.0',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    category_id: 1,
    brand: 'Sunrise',
    quantity: 1,
    price: '32.990',
    slug: 'joaquin-soto-pro-board-x-8.0',
  },
]