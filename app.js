// Sample transaction data for three months
const transactionData = [
    {
      customerId: 1,
      month: 'January',
      transactions: [
        { amount: 60 },
        { amount: 80 },
        { amount: 120 },
      ]
    },
    {
      customerId: 2,
      month: 'January',
      transactions: [
        { amount: 40 },
        { amount: 90 },
        { amount: 110 },
      ]
    },
    {
      customerId: 1,
      month: 'February',
      transactions: [
        { amount: 70 },
        { amount: 90 },
        { amount: 150 },
      ]
    },
    {
      customerId: 2,
      month: 'February',
      transactions: [
        { amount: 80 },
        { amount: 100 },
        { amount: 120 },
      ]
    },
    {
      customerId: 1,
      month: 'March',
      transactions: [
        { amount: 100 },
        { amount: 110 },
        { amount: 130 },
      ]
    },
    {
      customerId: 2,
      month: 'March',
      transactions: [
        { amount: 60 },
        { amount: 70 },
        { amount: 150 },
      ]
    }
  ];
  
  // Calculate reward points for each customer and month
  function calculateRewardPoints(transactions) {
    // Initialize an empty object to store the total reward points for each customer and month
    const rewardPoints = {};
  
    // Loop through each transaction
    transactions.forEach(transaction => {
      const customerId = transaction.customerId;
      const month = transaction.month;
  
      // Initialize the total reward points for the customer and month if it doesn't exist yet
      if (!rewardPoints[customerId]) {
        rewardPoints[customerId] = {};
      }
      if (!rewardPoints[customerId][month]) {
        rewardPoints[customerId][month] = 0;
      }
  
      // Calculate the reward points for the transaction and add it to the total
      const amount = transaction.amount;
      if (amount > 100) {
        rewardPoints[customerId][month] += (amount - 100) * 2;
      }
      if (amount > 50) {
        rewardPoints[customerId][month] += Math.max(amount - 50, 0);
      }
    });
  
    return rewardPoints;
  }
  
  // Test the function with the sample data
  console.log(calculateRewardPoints(transactionData));
  