import { PrismaClient } from "@prisma/client";

export const productSeeder = async (prismaClient: PrismaClient) => {
  await prismaClient.product.createMany({
    data: [
      {
        id: "1",
        img: "/temporary/prod1.webp",
        title: "Trucks 148 hollow kingping",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet nibh ut lacus viverra convallis sed nec arcu. Nullam arcu libero, facilisis nec magna quis, pharetra porta tortor. Sed commodo pellentesque feugiat. Donec efficitur finibus dolor ac commodo. Nullam vitae lacus pellentesque, rhoncus metus et, consectetur risus. Maecenas et odio vitae ante sollicitudin rhoncus ac sit amet neque. Quisque condimentum quis orci vitae pulvinar.",
        category_id: "3",
        brand: "Independent",
        price: 49990,
        slug: "trucks-148-hollow-kingping",
        active: true
      },
      {
        id: "2",
        img: "/temporary/prod2.webp",
        title: "Trucks 150",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category_id: "3",
        brand: "Ace trucks",
        price: 49990,
        slug: "trucks-150",
        active: true
      },
      {
        id: "3",
        img: "/temporary/prod3.webp",
        title: "Willy Muñoz Pro x 8.25",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet nibh ut lacus viverra convallis sed nec arcu.",
        category_id: "1",
        brand: "Gangsta",
        price: 32990,
        slug: "willy-munoz-pro-x-8.25",
        active: true
      },
      {
        id: "4",
        img: "/temporary/prod4.webp",
        title: "Trevon board x 8.15",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet nibh ut lacus viverra convallis sed nec arcu. Nullam arcu libero, facilisis nec magna quis.",
        category_id: "1",
        brand: "WKND",
        price: 42990,
        slug: "trevon-board-x-8.15",
        active: true
      },
      {
        id: "5",
        img: "/temporary/prod5.webp",
        title: "Maalouf x 8.0",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        category_id: "1",
        brand: "WKND",
        price: 42990,
        slug: "maloouf-x-8.0",
        active: true
      },
      {
        id: "6",
        img: "/temporary/prod6.jpeg",
        title: "Gorro de lana",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet nibh ut lacus viverra convallis sed.",
        category_id: "6",
        brand: "Delakalle",
        price: 10990,
        slug: "gorro-de-lana",
        active: true
      },
      {
        id: "7",
        img: "/temporary/prod7.jpg",
        title: "GANGSTA SERIES X 8.0",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet nibh ut lacus viverra convallis sed nec arcu. Nullam arcu libero, facilisis nec magna quis, pharetra porta tortor.",
        category_id: "1",
        brand: "Gangsta",
        price: 32990,
        slug: "gangsta-series-x-8.0",
        active: true
      },
      {
        id: "8",
        img: "/temporary/prod8.jpg",
        title: "GANGSTA TAG X 8.1",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet nibh ut lacus viverra convallis sed nec arcu. Nullam arcu libero, facilisis nec magna quis, pharetra porta tortor.",
        category_id: "1",
        brand: "Gangsta",
        price: 32990,
        slug: "gangsta-tag-x-8.1",
        active: true
      },
      {
        id: "9",
        img: "/temporary/prod9.jpeg",
        title: "TRUCKS 190 Hollow",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category_id: "3",
        brand: "Independent",
        price: 49990,
        slug: "trucks-190.hollow",
        active: true
      },
      {
        id: "10",
        img: "/temporary/prod10.jpeg",
        title: "Ruedas 58mm 101a",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet nibh ut lacus viverra convallis sed nec arcu.",
        category_id: "4",
        brand: "Speed demons",
        price: 9990,
        slug: "ruedas-58-mm-101a",
        active: true
      },
      {
        id: "11",
        img: "/temporary/prod11.jpeg",
        title: "Ruedas globe 54mm 98a",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet nibh ut lacus viverra convallis sed nec arcu. Nullam arcu libero, facilisis nec magna quis, pharetra porta tortor. Sed commodo pellentesque feugiat. Donec efficitur finibus dolor ac commodo. Nullam vitae lacus pellentesque, rhoncus metus et, consectetur risus. Maecenas et odio vitae ante sollicitudin rhoncus ac sit amet neque. Quisque condimentum quis orci vitae pulvinar.",
        category_id: "4",
        brand: "Globe",
        price: 29990,
        slug: "ruedas-globe-54-mm-98a",
        active: true
      },
      {
        id: "12",
        img: "/temporary/prod12.jpeg",
        title: "Ruedas 54mm 100a",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category_id: "4",
        brand: "Spitfire",
        price: 29990,
        slug: "ruedas-54-mm-100a",
        active: true
      },
      {
        id: "13",
        img: "/temporary/prod13.jpeg",
        title: "Gangsta big poppa x 8.3",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet nibh ut lacus viverra convallis sed nec arcu. Nullam arcu libero, facilisis nec magna quis, pharetra porta tortor.",
        category_id: "1",
        brand: "Gangsta",
        price: 32990,
        slug: "gangsta-big-poppa-x-8.3",
        active: true
      },
      {
        id: "14",
        img: "/temporary/prod14.jpg",
        title: "joaquin soto pro board x 8.0",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        category_id: "1",
        brand: "Sunrise",
        price: 32990,
        slug: "joaquin-soto-pro-board-x-8.0",
        active: true
      },
    ]
  });
};
