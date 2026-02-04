// Jewellery Product Database
// This file contains all product data for the catalogue

const productDatabase = {
  // RINGS COLLECTION
  ring1: {
    id: "ring1",
    name: "Classic Gold Solitaire Ring",
    category: "Rings",
    purity: "22K Gold",
    weight: "5.2 grams",
    price: "₹18,500",
    description: "An elegant solitaire ring featuring a brilliant cut diamond on a classic gold band. Perfect for engagements and special occasions. Handcrafted with precision and attention to detail.",
    longDescription: "This timeless solitaire ring showcases a stunning brilliant-cut diamond set in 22K pure gold. Each ring is handcrafted by our master jewellers, ensuring perfect proportions and exceptional quality. The classic design makes it suitable for both traditional and modern aesthetics.",
    images: [
      "images/ring1-1.jpg",
      "images/ring1-2.jpg",
      "images/ring1-3.jpg"
    ],
    featured: true
  },
  ring2: {
    id: "ring2",
    name: "Diamond Cluster Ring",
    category: "Rings",
    purity: "18K Gold",
    weight: "6.8 grams",
    price: "₹22,300",
    description: "A mesmerizing cluster of diamonds arranged in a contemporary pattern. This modern ring combines elegance with a bold statement design.",
    longDescription: "Featuring multiple brilliant-cut diamonds arranged in a stunning geometric pattern, this ring is a showstopper. Crafted in 18K gold with premium quality diamonds, it's perfect for those who want to make a distinctive style statement.",
    images: [
      "images/ring2-1.jpg",
      "images/ring2-2.jpg",
      "images/ring2-3.jpg"
    ],
    featured: true
  },
  ring3: {
    id: "ring3",
    name: "Antique Filigree Ring",
    category: "Rings",
    purity: "22K Gold",
    weight: "4.9 grams",
    price: "₹15,800",
    description: "Traditional filigree work combined with modern craftsmanship. This ring features intricate patterns inspired by heritage jewellery design.",
    longDescription: "An exquisite example of traditional filigree work, this ring features delicate patterns hand-etched by our master craftsmen. The intricate designs are filled with fine gold wire, creating a piece that is both lightweight and structurally sound.",
    images: [
      "images/ring3-1.jpg",
      "images/ring3-2.jpg",
      "images/ring3-3.jpg"
    ],
    featured: false
  },

  // NECKLACES COLLECTION
  necklace1: {
    id: "necklace1",
    name: "Golden Pendant Necklace",
    category: "Necklaces",
    purity: "22K Gold",
    weight: "12.5 grams",
    price: "₹38,900",
    description: "A stunning gold pendant suspended from an elegant chain. Features intricate detailing and premium craftsmanship suitable for daily wear or special occasions.",
    longDescription: "This exquisite golden pendant necklace is crafted in 22K pure gold and features a beautifully detailed pendant. The chain is designed to be both durable and elegant, making it perfect for everyday wear as well as festive occasions.",
    images: [
      "images/necklace1-1.jpg",
      "images/necklace1-2.jpg",
      "images/necklace1-3.jpg"
    ],
    featured: true
  },
  necklace2: {
    id: "necklace2",
    name: "Diamond Tennis Necklace",
    category: "Necklaces",
    purity: "18K Gold",
    weight: "18.3 grams",
    price: "₹65,400",
    description: "A luxurious line of matched diamonds set in 18K gold. This classic piece radiates elegance and sophistication perfect for evening wear.",
    longDescription: "A sophisticated tennis necklace featuring a continuous line of brilliant-cut diamonds set in 18K gold. Each diamond is carefully selected for color and clarity, ensuring a stunning sparkle. This is a true statement piece for the discerning jewellery enthusiast.",
    images: [
      "images/necklace2-1.jpg",
      "images/necklace2-2.jpg",
      "images/necklace2-3.jpg"
    ],
    featured: true
  },
  necklace3: {
    id: "necklace3",
    name: "Kundan Choker Necklace",
    category: "Necklaces",
    purity: "22K Gold",
    weight: "22.1 grams",
    price: "₹52,300",
    description: "A traditional choker necklace featuring stunning kundan work with pearls and semi-precious stones. Perfect for Indian ethnic wear.",
    longDescription: "This traditional kundan choker combines the ancient art of kundan work with modern design sensibilities. Featuring a stunning arrangement of kundan work interspersed with pearls and semi-precious stones, this necklace is perfect for weddings and traditional occasions.",
    images: [
      "images/necklace3-1.jpg",
      "images/necklace3-2.jpg",
      "images/necklace3-3.jpg"
    ],
    featured: false
  },

  // EARRINGS COLLECTION
  earring1: {
    id: "earring1",
    name: "Pearl Drop Earrings",
    category: "Earrings",
    purity: "18K Gold",
    weight: "4.2 grams",
    price: "₹12,500",
    description: "Elegant pearl drops suspended from 18K gold hooks. A timeless design that works for both casual and formal occasions.",
    longDescription: "These beautiful pearl drop earrings feature lustrous freshwater pearls set in 18K gold. The simple yet elegant design makes them versatile enough for daily wear while maintaining a sophisticated appearance perfect for special events.",
    images: [
      "images/earring1-1.jpg",
      "images/earring1-2.jpg",
      "images/earring1-3.jpg"
    ],
    featured: true
  },
  earring2: {
    id: "earring2",
    name: "Diamond Stud Earrings",
    category: "Earrings",
    purity: "18K Gold",
    weight: "2.1 grams",
    price: "₹28,900",
    description: "Classic diamond studs that bring unmatched sparkle and elegance. A wardrobe essential for every jewellery collection.",
    longDescription: "Featuring brilliant-cut diamonds set in secure 18K gold settings, these stud earrings are the perfect everyday luxury. The classic design ensures they complement any outfit, making them a true investment piece.",
    images: [
      "images/earring2-1.jpg",
      "images/earring2-2.jpg",
      "images/earring2-3.jpg"
    ],
    featured: true
  },
  earring3: {
    id: "earring3",
    name: "Emerald Chandelier Earrings",
    category: "Earrings",
    purity: "22K Gold",
    weight: "5.8 grams",
    price: "₹24,200",
    description: "Ornate chandelier earrings featuring rich emeralds set in 22K gold. Perfect for weddings and festive celebrations.",
    longDescription: "These statement chandelier earrings feature stunning natural emeralds complemented by 22K gold filigree work. The multi-tiered design creates a beautiful movement and sparkle, making them ideal for special occasions.",
    images: [
      "images/earring3-1.jpg",
      "images/earring3-2.jpg",
      "images/earring3-3.jpg"
    ],
    featured: false
  },

  // BRACELETS COLLECTION
  bracelet1: {
    id: "bracelet1",
    name: "Gold Bangle Bracelet",
    category: "Bracelets",
    purity: "22K Gold",
    weight: "19.2 grams",
    price: "₹58,500",
    description: "A traditional solid gold bangle with intricate embossed patterns. Can be worn individually or stacked for a bold look.",
    longDescription: "This classic gold bangle features beautiful embossed patterns that catch the light beautifully. Crafted in 22K pure gold, it's durable yet elegant, perfect for both daily wear and special occasions.",
    images: [
      "images/bracelet1-1.jpg",
      "images/bracelet1-2.jpg",
      "images/bracelet1-3.jpg"
    ],
    featured: false
  },
  bracelet2: {
    id: "bracelet2",
    name: "Diamond Tennis Bracelet",
    category: "Bracelets",
    purity: "18K Gold",
    weight: "14.5 grams",
    price: "₹95,600",
    description: "A stunning line of diamonds set in 18K gold. A luxurious piece that combines style with timeless elegance.",
    longDescription: "This exquisite tennis bracelet features a continuous line of brilliant-cut diamonds set in secure 18K gold settings. Each diamond is handpicked for quality, ensuring exceptional sparkle and brilliance.",
    images: [
      "images/bracelet2-1.jpg",
      "images/bracelet2-2.jpg",
      "images/bracelet2-3.jpg"
    ],
    featured: true
  },
  bracelet3: {
    id: "bracelet3",
    name: "Gemstone Beaded Bracelet",
    category: "Bracelets",
    purity: "18K Gold",
    weight: "8.7 grams",
    price: "₹32,100",
    description: "A colorful bracelet featuring mixed semi-precious gemstones separated by 18K gold spacers. Versatile and stylish.",
    longDescription: "This vibrant bracelet combines multiple semi-precious gemstones including amethyst, citrine, and garnet, all separated by elegant 18K gold spacers. The combination of colors creates a beautiful rainbow effect.",
    images: [
      "images/bracelet3-1.jpg",
      "images/bracelet3-2.jpg",
      "images/bracelet3-3.jpg"
    ],
    featured: false
  },

  // ANKLETS COLLECTION
  anklet1: {
    id: "anklet1",
    name: "Gold Chain Anklet",
    category: "Anklets",
    purity: "22K Gold",
    weight: "6.3 grams",
    price: "₹19,800",
    description: "A delicate yet sturdy gold chain anklet perfect for everyday wear. Features a simple, elegant design.",
    longDescription: "This traditional gold chain anklet is crafted in 22K pure gold and features a simple yet elegant design. Perfect for casual wear and also suitable for pairing with traditional outfits.",
    images: [
      "images/anklet1-1.jpg",
      "images/anklet1-2.jpg",
      "images/anklet1-3.jpg"
    ],
    featured: false
  },
  anklet2: {
    id: "anklet2",
    name: "Pearl and Gold Anklet",
    category: "Anklets",
    purity: "18K Gold",
    weight: "5.1 grams",
    price: "₹16,900",
    description: "An elegant anklet featuring pearl drops interspersed along a 18K gold chain. Adds a feminine touch to any outfit.",
    longDescription: "This beautiful anklet combines lustrous pearls with delicate 18K gold chain work. The pearls are evenly spaced along the chain, creating a balanced and elegant look.",
    images: [
      "images/anklet2-1.jpg",
      "images/anklet2-2.jpg",
      "images/anklet2-3.jpg"
    ],
    featured: false
  },
  anklet3: {
    id: "anklet3",
    name: "Kundan Embedded Anklet",
    category: "Anklets",
    purity: "22K Gold",
    weight: "11.4 grams",
    price: "₹38,200",
    description: "A traditional anklet featuring stunning kundan work. Perfect for Indian ethnic wear and festive occasions.",
    longDescription: "This traditional anklet showcases exquisite kundan work combined with semi-precious stones. It's the perfect accessory for weddings, festivals, and traditional celebrations.",
    images: [
      "images/anklet3-1.jpg",
      "images/anklet3-2.jpg",
      "images/anklet3-3.jpg"
    ],
    featured: false
  }
};

// Function to get all products
function getAllProducts() {
  return Object.values(productDatabase);
}

// Function to get product by ID
function getProductById(id) {
  return productDatabase[id] || null;
}

// Function to get products by category
function getProductsByCategory(category) {
  return Object.values(productDatabase).filter(product => product.category === category);
}

// Function to get featured products
function getFeaturedProducts() {
  return Object.values(productDatabase).filter(product => product.featured);
}

// Function to get unique categories
function getCategories() {
  const categories = new Set();
  Object.values(productDatabase).forEach(product => {
    categories.add(product.category);
  });
  return Array.from(categories).sort();
}

// Function to search products
function searchProducts(query) {
  const lowerQuery = query.toLowerCase();
  return Object.values(productDatabase).filter(product => 
    product.name.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery)
  );
}
