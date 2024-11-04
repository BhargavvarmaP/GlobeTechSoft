# GlobeTechSoft


# USDT Balance Fetching and Formatting

This repository contains a simple script to fetch and format the balance of a USDT token for a given user address. The script uses the `ethers.js` library to interact with the Ethereum blockchain.

## Prerequisites

- Node.js installed
- `ethers.js` library installed (`npm install ethers`)
- A deployed USDT contract instance

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/BhargavvarmaP/GlobeTechSoft.git
   cd GlobeTechSoft
   ```

2. Install the required dependencies:
   ```bash
   npm install
   ```

## Usage

### Fetching and Formatting USDT Balance

The script fetches the balance of a USDT token for a given user address and formats it correctly with 6 decimal places.

```javascript
const balance = await usdtContract.balanceOf(userAddress);

// Format the balance using 6 decimal places
const balanceInEther = ethers.utils.formatUnits(balance, 6);

console.log({
    address: userAddress,
    balance: balanceInEther,
    token: 'USDT'
});

res.json({ message: 'Balance fetched and logged to console' });
```

### Explanation

1. **Fetching the Balance**:
   - `usdtContract.balanceOf(userAddress)`: This function call fetches the raw balance of the USDT token for the specified `userAddress`. The balance is returned in the smallest unit of the token (e.g., `wei` for Ether).

2. **Formatting the Balance**:
   - `ethers.utils.formatUnits(balance, 6)`: This function converts the raw balance to a human-readable format using 6 decimal places, which is the standard for USDT. The `balance` is the raw balance fetched from the contract, and `6` specifies the number of decimal places.

3. **Logging and Response**:
   - The formatted balance is logged to the console along with the user address and token name (`USDT`).
   - A JSON response is sent back to the client with a message indicating that the balance has been fetched and logged.

## Example Output

```json
{
  address: '0x58C42647EB2cEe1686C3cA596e31DD69A8c993d1',
  balance: '247463.373914',
  token: 'USDT'
}

```

## Conclusion

This script provides a simple way to fetch and format the balance of a USDT token for a given user address. By using `ethers.js`, you can easily interact with Ethereum smart contracts and format token balances correctly.

---

Feel free to customize this `README.md` file further to match your project's specific details and requirements.