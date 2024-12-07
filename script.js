console.log("Homewrok practice");

const products = [
    {
      title: "Wireless Headphones",
      description: "Noise-cancelling over-ear headphones with 40 hours of playtime.",
      year: 2023,
      price: 199.99,
      image: "https://example.com/images/headphones.jpg",
      isDiscounted: true,
      isRefurbished: false,
      discount: {
        discountAvailable: "10%"
      },
      quantity: 50
    },
    {
      title: "Smartphone",
      description: "Latest model with 128GB storage and 5G connectivity.",
      year: 2022,
      price: 899.99,
      image: "https://example.com/images/smartphone.jpg",
      isDiscounted: false,
      isRefurbished: true,
      discount: {
        discountAvailable: "0%"
      },
      quantity: 20
    },
    {
      title: "Gaming Laptop",
      description: "High-performance laptop with RTX 3060 GPU and 16GB RAM.",
      year: 2023,
      price: 1299.99,
      image: "https://example.com/images/laptop.jpg",
      isDiscounted: true,
      isRefurbished: false,
      discount: {
        discountAvailable: "15%"
      },
      quantity: 10
    },
    {
      title: "Mechanical Keyboard",
      description: "RGB backlit mechanical keyboard with customizable keys.",
      year: 2021,
      price: 89.99,
      image: "https://example.com/images/keyboard.jpg",
      isDiscounted: false,
      isRefurbished: false,
      discount: {
        discountAvailable: "0%"
      },
      quantity: 100
    },
    {
      title: "Smartwatch",
      description: "Water-resistant smartwatch with heart-rate monitor and GPS.",
      year: 2022,
      price: 249.99,
      image: "https://example.com/images/smartwatch.jpg",
      isDiscounted: true,
      isRefurbished: true,
      discount: {
        discountAvailable: "5%"
      },
      quantity: 30
    },
    {
      title: "Bluetooth Speaker",
      description: "Portable speaker with 20W output and 12-hour battery life.",
      year: 2023,
      price: 49.99,
      image: "https://example.com/images/speaker.jpg",
      isDiscounted: false,
      isRefurbished: false,
      discount: {
        discountAvailable: "0%"
      },
      quantity: 200
    },
    {
      title: "4K Monitor",
      description: "Ultra HD monitor with 144Hz refresh rate and HDR support.",
      year: 2023,
      price: 399.99,
      image: "https://example.com/images/monitor.jpg",
      isDiscounted: true,
      isRefurbished: false,
      discount: {
        discountAvailable: "20%"
      },
      quantity: 25
    },
    {
      title: "Fitness Tracker",
      description: "Lightweight tracker with step count, calorie burn, and sleep monitoring.",
      year: 2021,
      price: 69.99,
      image: "https://example.com/images/fitness-tracker.jpg",
      isDiscounted: false,
      isRefurbished: true,
      discount: {
        discountAvailable: "0%"
      },
      quantity: 150
    },
    {
      title: "Drone",
      description: "Camera drone with 4K video and 30-minute flight time.",
      year: 2023,
      price: 999.99,
      image: "https://example.com/images/drone.jpg",
      isDiscounted: true,
      isRefurbished: false,
      discount: {
        discountAvailable: "25%"
      },
      quantity: 15
    },
    {
      title: "Electric Scooter",
      description: "Foldable scooter with a top speed of 25 mph and 30-mile range.",
      year: 2022,
      price: 499.99,
      image: "https://example.com/images/scooter.jpg",
      isDiscounted: false,
      isRefurbished: true,
      discount: {
        discountAvailable: "0%"
      },
      quantity: 40
    }
  ];

  // #### 1. Console Log all the products in format: 
  // Title - price
  // Wireless Headphones - $199.99

  const productTitles = [];

    for(let j=0; j<products.length; j++){
    
      productTitles.push=console.log(`${products[j].title} - ${products[j].price}`);
      console.log(typeof productTitles);

    };


    // #### 2. Filter out the products that have the length of description less than 30 characters.

    const descriptionProducts = products.filter(product => product.description.length <=30 );

    console.log(descriptionProducts);




// #### 3. Filter out the products that are in range of $200 - $400

const rangeProducts = [];
for (let i = 0; i < products.length; i++) {
  // Check if the product has a description property and it's a string with length < 30
  if (products[i].price > 200 && products[i].price < 400) {
    rangeProducts.push(products[i]);
    console.log(rangeProducts); // Print the matching product
  }
}

// #### 4. Filter only discountyed products

const discountProducts = products.filter((item) => item.isDiscounted);
console.log(discountProducts);

// #### 5. Filter products that have 15% or more discount

const moreDiscProducts = products.filter( product => {
  const eachDiscountproducts = parseInt(product.discount.discountAvailable.replace('%',''));
  return eachDiscountproducts>= 15;
});

console.log(moreDiscProducts);

// #### 6. Filter all the products that are new with 2024 year build

const newBuildProducts = products.filter(item => item.year===2024);
console.log(newBuildProducts);