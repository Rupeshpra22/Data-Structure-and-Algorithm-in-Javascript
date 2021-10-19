let prices = [10, 1, 1, 6];

let finalPrice = (prices) => {
  let stack = [];
  let discountedPrice = [];
  discountedPrice[prices.length - 1] = prices[prices.length - 1];
  stack.push(prices[prices.length - 1]);
  for (let i = prices.length - 2; i >= 0; i--) {
    if (prices[i] < stack[stack.length - 1]) {
      while (prices[i] < stack[stack.length - 1]) {
        stack.pop();
      }
      if (stack.length != 0) {
        discountedPrice[i] = prices[i] - stack[stack.length - 1];
      } else {
        discountedPrice[i] = prices[i];
      }
    } else {
      discountedPrice[i] = prices[i] - stack[stack.length - 1];
    }
    stack.push(prices[i]);
  }
  return discountedPrice;
};

console.log(finalPrice(prices));
