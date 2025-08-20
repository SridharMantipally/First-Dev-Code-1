const menuItems = [
  { name: "Paneer Butter Masala", price: 180 },
  { name: "Chicken Biryani", price: 220 },
  { name: "Veg Fried Rice", price: 140 },
  { name: "Masala Dosa", price: 100 },
  { name: "Tandoori Roti", price: 20 },
  { name: "Butter Naan", price: 30 },
  { name: "Lassi", price: 60 },
  { name: "Gulab Jamun", price: 50 },
];

const menuContainer = document.getElementById("menu");
const cartItems = document.getElementById("cart-items");
const totalDisplay = document.getElementById("total");

let cart = [];
let total = 0;

function addToCart(item) {
  cart.push(item);
  total += item.price;
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartItems.appendChild(li);
  });
  totalDisplay.textContent = `Total: ₹${total}`;
}

// Load menu items dynamically
menuItems.forEach(item => {
  const div = document.createElement("div");
  div.className = "menu-item";
  div.innerHTML = `
    <h3>${item.name}</h3>
    <p>Price: ₹${item.price}</p>
    <button onclick='addToCart(${JSON.stringify(item)})'>Add to Cart</button>
  `;
  menuContainer.appendChild(div);
});
