 import slimjeans1 from './assets/Images/Products/slimjeans1.avif';
 import slimjeans2 from './assets/Images/Products/slimjeans2.avif';
 import slimjeans3 from './assets/Images/Products/slimjeans3.avif';
 
import saintlaurent1 from './assets/Images/Products/saintlaurent1.webp';
import saintlaurent2 from './assets/Images/Products/saintlaurent2.png';
import saintlaurent3 from './assets/Images/Products/saintlaurent3.png';

import guccibag1 from './assets/Images/Products/guccibag1.png';
import guccibag2 from './assets/Images/Products/guccibag2.png';
import guccibag3 from './assets/Images/Products/guccibag3.png';

import burberrytrenchcoat1 from './assets/Images/Products/burberrytrenchcoat1.png';
import burberrytrenchcoat2 from './assets/Images/Products/burberrytrenchcoat2.png';
import burberrytrenchcoat3 from './assets/Images/Products/burberrytrenchcoat3.png';

import diorglasses from './assets/Images/Products/diorglasses.png'
import diorglasses1 from './assets/Images/Products/diorglasses1.png'
 
 
 const products = [
  {
    id: "1",
    title: "Versace Slim Fit Jeans",
    description: "Luxury slim-fit jeans for a sleek and stylish look.",
    price: 299.99,
    category: "Men",
    tags: ["men", "winter", "casual"],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Navy", "Gray"],
    image: [slimjeans1, slimjeans2, slimjeans3],
    rating: 4.8,
    reviews: 150,
    stock: 25,
    trending: true,
    discount: 0,
    information: {
      additionalDetails: "Crafted with precision stitching and premium materials, these jeans offer both comfort and style. Perfect for any occasion, whether casual or semi-formal, they provide a tailored look that enhances your silhouette.",
      materials: "98% Cotton, 2% Elastane",
      fitType: "Slim Fit",
      brand: "Versace"
    }
  },
  {
    id: "2",
    title: "Saint Laurent Leather Biker Jacket",
    description: "Iconic leather jacket for a bold and stylish statement.",
    price: 1999.99,
    category: "Men",
    tags: ["men", "winter", "outerwear"],
    sizes: ["M", "L", "XL"],
    colors: ["Black", "Brown"],
    image: [saintlaurent1, saintlaurent2, saintlaurent3],
    rating: 4.9,
    reviews: 120,
    stock: 10,
    trending: true,
    discount: 15,
    information: {
      additionalDetails: "This leather jacket blends timeless design with modern styling, featuring a classic biker look. Made from high-quality leather, it's perfect for layering over a casual outfit or for adding a touch of rebellious elegance to your wardrobe.",
      materials: "100% Leather",
      fitType: "Regular Fit",
      brand: "Saint Laurent"
    }
  },
  {
    id: "3",
    title: "Louis Vuitton Monogram Handbag",
    description: "A luxurious handbag with the classic monogram design.",
    price: 3499.99,
    category: "Accessories",
    tags: ["women", "accessories", "luxury"],
    sizes: ["One Size"],
    colors: ["Brown", "Beige"],
    image: [guccibag1, guccibag2, guccibag3],
    rating: 5.0,
    reviews: 80,
    stock: 5,
    trending: true,
    discount: 0,
    information: {
      additionalDetails: "This iconic Louis Vuitton handbag is crafted from premium leather and features the brand’s signature monogram pattern. It’s the perfect accessory to elevate any outfit, whether for everyday use or special occasions.",
      materials: "Leather",
      fitType: "One Size",
      brand: "Louis Vuitton"
    }
  },
  {
    id: "4",
    title: "Burberry Trench Coat",
    description: "A timeless trench coat with Burberry's signature check lining.",
    price: 2499.99,
    category: "Men",
    tags: ["women", "winter", "outerwear"],
    sizes: ["M", "L", "XL"],
    colors: ["Beige", "Black"],
    image: [burberrytrenchcoat1, burberrytrenchcoat2, burberrytrenchcoat3],
    rating: 4.9,
    reviews: 70,
    stock: 12,
    trending: false,
    discount: 10,
    information: {
      additionalDetails: "This Burberry trench coat is crafted from high-quality cotton and features the brand's iconic check lining. A versatile piece, it offers both style and functionality, making it perfect for layering in cooler weather.",
      materials: "100% Cotton",
      fitType: "Regular Fit",
      brand: "Burberry"
    }
  },
  {
    id: "5",
    title: "Prada Chunky Knit Sweater",
    description: "A cozy and stylish chunky knit sweater.",
    price: 899.99,
    category: "Women",
    tags: ["women", "winter", "luxury"],
    sizes: ["S", "M", "L"],
    colors: ["Cream", "Black"],
    image: "https://via.placeholder.com/200",
    rating: 4.6,
    reviews: 60,
    stock: 20,
    trending: false,
    discount: 12,
    information: {
      additionalDetails: "This chunky knit sweater is the epitome of cozy luxury, perfect for colder months. The relaxed fit ensures comfort, while the high-end materials elevate your casual look, making it a must-have for any wardrobe.",
      materials: "70% Wool, 30% Cashmere",
      fitType: "Oversized Fit",
      brand: "Prada"
    }
  },
  {
    id: "6",
    title: "Chanel Silk Evening Dress",
    description: "A stunning evening dress crafted from fine silk.",
    price: 4999.99,
    category: "Women",
    tags: ["women", "luxury", "summer"],
    sizes: ["S", "M", "L"],
    colors: ["Red", "White", "Navy"],
    image: "https://via.placeholder.com/200",
    rating: 4.9,
    reviews: 40,
    stock: 8,
    trending: true,
    discount: 0,
    information: {
      additionalDetails: "This evening dress from Chanel is designed with luxurious silk fabric, offering an elegant and timeless look. Ideal for formal events, it combines exquisite craftsmanship with modern sophistication.",
      materials: "100% Silk",
      fitType: "Slim Fit",
      brand: "Chanel"
    }
  },
  {
    id: "7",
    title: "Hermès Leather Belt",
    description: "A classic Hermès leather belt with iconic buckle design.",
    price: 799.99,
    category: "Accessories",
    tags: ["men", "accessories", "luxury"],
    sizes: ["M", "L", "XL"],
    colors: ["Black", "Brown"],
    image: "https://via.placeholder.com/200",
    rating: 4.8,
    reviews: 90,
    stock: 30,
    trending: false,
    discount: 0,
    information: {
      additionalDetails: "This leather belt by Hermès features a classic design with a polished metal buckle, ideal for adding a refined touch to both casual and formal outfits. Made with high-quality leather for lasting durability.",
      materials: "100% Leather",
      fitType: "Adjustable",
      brand: "Hermès"
    }
  },
  {
    id: "8",
    title: "Gucci Wool Scarf",
    description: "A soft and warm scarf with a classic Gucci design.",
    price: 599.99,
    category: "Accessories",
    tags: ["accessories", "winter", "luxury"],
    sizes: ["One Size"],
    colors: ["Gray", "Red"],
    image: "https://via.placeholder.com/200",
    rating: 4.7,
    reviews: 50,
    stock: 15,
    trending: false,
    discount: 0,
    information: {
      additionalDetails: "Made with soft wool, this scarf from Gucci is perfect for staying warm during the winter while adding a touch of luxury to your ensemble. The classic design ensures it pairs well with any outfit.",
      materials: "100% Wool",
      fitType: "One Size",
      brand: "Gucci"
    }
  },
  {
    id: "9",
    title: "Dolce & Gabbana Floral Maxi Dress",
    description: "A vibrant floral dress perfect for summer occasions.",
    price: 1999.99,
    category: "Women",
    tags: ["women", "summer", "luxury"],
    sizes: ["S", "M", "L"],
    colors: ["Yellow", "Pink"],
    image: "https://via.placeholder.com/200",
    rating: 4.7,
    reviews: 30,
    stock: 10,
    trending: true,
    discount: 0,
    information: {
      additionalDetails: "This floral maxi dress from Dolce & Gabbana exudes elegance and femininity, perfect for garden parties or evening events. The lightweight fabric keeps you cool while the vibrant pattern adds a pop of color.",
      materials: "50% Silk, 50% Polyester",
      fitType: "Regular Fit",
      brand: "Dolce & Gabbana"
    }
  },
  {
    id: "10",
    title: "Tom Ford Classic Sunglasses",
    description: "Elegant sunglasses for a stylish look.",
    price: 599.99,
    category: "Accessories",
    tags: ["unisex", "accessories", "summer"],
    sizes: ["One Size"],
    colors: ["Black", "Brown"],
    image: "https://via.placeholder.com/200",
    rating: 4.6,
    reviews: 80,
    stock: 40,
    trending: true,
    discount: 5,
    information: {
      additionalDetails: "These Tom Ford sunglasses offer both sophistication and protection from the sun. The high-quality lenses and stylish frame make them a must-have accessory for sunny days.",
      materials: "100% Acetate",
      fitType: "One Size",
      brand: "Tom Ford"
    }
  }, {
    id: "11",
    title: "Balenciaga Triple S Sneakers",
    description: "A pair of chunky sneakers with the iconic Triple S design.",
    price: 899.99,
    category: "Men",
    tags: ["men", "shoes", "casual"],
    sizes: ["8", "9", "10", "11", "12"],
    colors: ["White", "Black", "Gray"],
    image: "https://via.placeholder.com/200",
    rating: 4.8,
    reviews: 130,
    stock: 50,
    trending: false,
    discount: 22,
    information: {
      additionalDetails: "These Balenciaga Triple S sneakers offer a bold, oversized look that has become synonymous with luxury streetwear. Featuring a multi-layered design, they provide both comfort and style.",
      materials: "Leather, Mesh",
      fitType: "Regular Fit",
      brand: "Balenciaga"
    }
  },
  {
    id: "12",
    title: "Celine Classic Tote",
    description: "A timeless leather tote bag with a minimalist design.",
    price: 1599.99,
    category: "Accessories",
    tags: ["women", "handbags", "luxury"],
    sizes: ["One Size"],
    colors: ["Black", "Beige", "Brown"],
    image: "https://via.placeholder.com/200",
    rating: 5.0,
    reviews: 60,
    stock: 12,
    trending: false,
    discount: 0,
    information: {
      additionalDetails: "This Celine tote is a classic piece, featuring a sleek, minimalist design that pairs well with any outfit. The high-quality leather ensures longevity and durability, while the spacious interior offers practicality.",
      materials: "100% Leather",
      fitType: "One Size",
      brand: "Celine"
    }
  },
  {
    id: "13",
    title: "Givenchy Antigona Satchel",
    description: "A structured leather satchel with a bold, geometric shape.",
    price: 2499.99,
    category: "Accessories",
    tags: ["women", "luxury", "handbags"],
    sizes: ["One Size"],
    colors: ["Black", "Navy"],
    image: "https://via.placeholder.com/200",
    rating: 4.9,
    reviews: 75,
    stock: 10,
    trending: true,
    discount: 15,
    information: {
      additionalDetails: "The Givenchy Antigona Satchel is an iconic piece, known for its bold, angular design. Crafted from premium leather, it’s perfect for any formal occasion or for adding a touch of sophistication to daily wear.",
      materials: "Leather",
      fitType: "One Size",
      brand: "Givenchy"
    }
  },
  {
    id: "14",
    title: "Fendi Peekaboo Bag",
    description: "A luxurious handbag with a unique peekaboo opening.",
    price: 3499.99,
    category: "Accessories",
    tags: ["women", "luxury", "handbags"],
    sizes: ["One Size"],
    colors: ["Black", "Red"],
    image: "https://via.placeholder.com/200",
    rating: 4.7,
    reviews: 40,
    stock: 8,
    trending: true,
    discount: 0,
    information: {
      additionalDetails: "The Fendi Peekaboo bag is a statement piece with its signature opening design, allowing a glimpse of its luxurious interior. Made from the finest leather, it exudes elegance and sophistication.",
      materials: "Leather",
      fitType: "One Size",
      brand: "Fendi"
    }
  },
  {
    id: "15",
    title: "Yves Saint Laurent Sac de Jour",
    description: "A refined leather handbag with a structured silhouette.",
    price: 3299.99,
    category: "Accessories",
    tags: ["women", "luxury", "handbags"],
    sizes: ["One Size"],
    colors: ["Black", "Beige"],
    image: "https://via.placeholder.com/200",
    rating: 5.0,
    reviews: 90,
    stock: 15,
    trending: false,
    discount: 10,
    information: {
      additionalDetails: "The Yves Saint Laurent Sac de Jour is a refined handbag that features a structured silhouette and clean lines. Made from premium leather, it offers both style and functionality, perfect for everyday use or special occasions.",
      materials: "100% Leather",
      fitType: "One Size",
      brand: "Yves Saint Laurent"
    }
  }
  ];
  export default products;
  