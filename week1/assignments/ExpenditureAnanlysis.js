const txns =
  '{"id": "1","timestamp": "123456789","price": "10","category": "food","itemname": "paneer"},{"id":"2","timestamp":"987654321","price":"15","category":"toiletries","itemName":"mirror"}';

function calSpentByCategory(transactions) {
  const txn = JSON.parse(transactions);
  const keys = txn.keys();
  console.log(keys);
}
calSpentByCategory(txns);
