const txns =
  '[{"id": "1","timestamp": "123456789","price": "10","category": "food","itemname": "paneer"},{"id":"2","timestamp":"987654321","price":"15","category":"toiletries","itemName":"mirror"}]';

function calSpentByCategory(transactions) {
  console.log(transactions);
  const txn = JSON.parse(transactions);
  const categoryTot = {};
  txn.forEach((trxn) => {
    const { category, price } = trxn;
    if (category in categoryTot) {
      categoryTot[category] += price;
    } else {
      categoryTot[category] = price;
    }
  });

  return Object.keys(categoryTot).map((category) => ({
    category: category,
    totSpent: categoryTot[category],
  }));
  // console.log(categoryTot);
}
console.log(calSpentByCategory(txns));
