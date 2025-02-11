// src/FactoryData/factoriesData.js

// Import images for factory 1
//import factory1Img1 from "../assets/factory1_img1.png";
//import factory1Img2 from "../assets/factory1_img2.png";
//import factory1Img3 from "../assets/factory1_img3.png";
//import factory1Img4 from "../assets/factory1_img4.png";

// Import images for factory 2
//import factory2Img1 from "../assets/factory2_img1.png";
//import factory2Img2 from "../assets/factory2_img2.png";
//import factory2Img3 from "../assets/factory2_img3.png";
//import factory2Img4 from "../assets/factory2_img4.png";

const placeholderImage1 = "https://via.placeholder.com/600x400?text=Factory+Image+1";
const placeholderImage2 = "https://via.placeholder.com/600x400?text=Factory+Image+2";
const placeholderImage3 = "https://via.placeholder.com/600x400?text=Factory+Image+3";
const placeholderImage4 = "https://via.placeholder.com/600x400?text=Factory+Image+4";

const factoriesData = [
  {
    id: "1",
    name: "Bind Chocolate",
    category: "Chocolates",
    subCategories: ["Chocolate Bars", "Truffles", "Luxury"],
    averageCostPerUnit: "$3.50",
    description: {
      luxury:
        "Bind’s Luxury Selection features handcrafted premium chocolates presented in elegant packaging, perfect for gifting. Enjoy a smooth texture and indulgent taste.",
      truffles:
        "The Truffle Collection includes artisan-crafted chocolate truffles with rich ganache flavors, ideal for luxury gifts.",
      bars:
        "A diverse range of chocolate bars with unique flavor combinations that balance classic taste with modern innovation.",
      general:
        "Bind Chocolate, established in 1971, blends traditional craftsmanship with modern techniques to deliver exceptional quality and taste.",
    },
    images: [placeholderImage1, placeholderImage2, placeholderImage3, placeholderImage4], // Used for the detail page slideshow
  },
  {
    id: "2",
    name: "Delly",
    category: "Chocolates",
    subCategories: ["Energy Bars", "Protein Bars", "Fruit Bars", "Chocolates"],
    averageCostPerUnit: "$2.75",
    description: {
      luxury:
        "Delly offers a luxurious range of energy bars designed with premium ingredients and bold flavors that elevate your snack experience.",
      truffles:
        "Delly's artisanal truffle collection blends traditional techniques with innovative recipes to create a unique taste.",
      bars:
        "Their chocolate bars combine wholesome ingredients with creative flavor profiles, offering a delicious and nutritious treat.",
      general:
        "Delly is a forward-thinking brand merging nutrition and indulgence, delivering products that are both energizing and delectable.",
    },
    images: [placeholderImage1, placeholderImage2, placeholderImage3, placeholderImage4], // Used for the detail page slideshow
  },
  // You can add more factory objects here as needed...
];

export default factoriesData;