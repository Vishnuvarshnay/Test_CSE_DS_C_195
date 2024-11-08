function calculateTotal() {
  const price = 15;
  const quantity = document.getElementById('quantity').value;
  const total = price * quantity;
  
  document.getElementById('total').textContent = total;

  // Display alert with total cost
  alert(`You added ${quantity} items to your cart for Rs. ${total}`);
}
