// script.js

// Cart storage
let cart = [];

// Function to render products
document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", event => {
    const product = event.target.closest(".product");
    const name = product.dataset.name;
    const price = parseFloat(product.dataset.price);

    cart.push({ name, price });
    alert(`${name} has been added to the cart.`);
  });
});

// Show cart
document.getElementById("cart-link").addEventListener("click", () => {
  document.getElementById("content").style.display = "none";
  document.getElementById("cart-section").style.display = "block";
  renderCart();
});

// Render cart items
function renderCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    total += item.price;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
      cart.splice(index, 1);
      renderCart();
    });

    li.appendChild(removeButton);
    cartItems.appendChild(li);
  });

  document.getElementById("total-price").textContent = `Total: $${total.toFixed(2)}`;
}

// Proceed to checkout
document.getElementById("checkout").addEventListener("click", () => {
  document.getElementById("cart-section").style.display = "none";
  document.getElementById("thank-you").style.display = "block";
  cart = [];
});

// Return to homepage
document.getElementById("back-to-home").addEventListener("click", () => {
  document.getElementById("thank-you").style.display = "none";
  document.getElementById("content").style.display = "block";
});
