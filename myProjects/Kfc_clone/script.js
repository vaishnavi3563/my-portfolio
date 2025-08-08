// Menu Items
const menu = [
  { name: "Bucket Meal", price: "$15.99", img: "images/bucket-meal.png" },
  { name: "Zinger Burger", price: "$6.99", img: "images/ginger-burger.png" },
  { name: "Popcorn Chicken", price: "$5.49", img: "images/popcorn-chicken.png" }
];

// Offers
const offers = [
  { title: "Family Bucket Combo", desc: "Buy 1 Bucket Meal, Get 1 Zinger Free!", img: "images/family-combo.png" },
  { title: "Weekend Deal", desc: "Flat 20% OFF on all orders above $20", img: "images/weekend-deal.png" }
];

// Load Menu Cards
const menuItems = document.getElementById("menu-items");
menu.forEach(item => {
  menuItems.innerHTML += `
    <div class="col-md-4 mb-3">
      <div class="card">
        <img src="${item.img}" class="card-img-top" alt="${item.name}">
        <div class="card-body">
          <h5 class="card-title">${item.name}</h5>
          <p class="card-text fw-bold">${item.price}</p>
          <button class="btn btn-danger">Add to Cart</button>
        </div>
      </div>
    </div>
  `;
});

// Load Offers Cards
const offerItems = document.getElementById("offer-items");
offers.forEach(offer => {
  offerItems.innerHTML += `
    <div class="col-md-6 mb-3">
      <div class="card">
        <img src="${offer.img}" class="card-img-top" alt="${offer.title}">
        <div class="card-body">
          <h5 class="card-title">${offer.title}</h5>
          <p class="card-text">${offer.desc}</p>
          <button class="btn btn-warning">Grab Offer</button>
        </div>
      </div>
    </div>
  `;
});

// Order Form Alert
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert(" Thank you! Your order has been placed.");
});
