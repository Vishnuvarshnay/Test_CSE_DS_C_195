
function updateTotal() {
  const price = 15;
  const quantity = document.getElementById('quantity').value;
  const total = price * quantity;
  
  document.getElementById('total').textContent = total;
}


function calculateTotal() {
  const price = 15;
  const quantity = document.getElementById('quantity').value;
  const total = price * quantity;
  
  
  alert(`You added ${quantity} items to your cart for Rs. ${total}`);
}
