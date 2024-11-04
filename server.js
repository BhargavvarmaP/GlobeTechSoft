const express = require('express');
const { ethers } = require('ethers');

const app = express();
const PORT = 3000;



const provider = new ethers.providers.JsonRpcProvider("https://eth.llamarpc.com");

const USDT_CONTRACT_ADDRESS = '0xdAC17F958D2ee523a2206206994597C13D831ec7';


const erc20Abi = [
    "function balanceOf(address account) view returns (uint256)"
];


const usdtContract = new ethers.Contract(USDT_CONTRACT_ADDRESS, erc20Abi, provider);

app.get('/balance/:address', async (req, res) => {
    const userAddress = req.params.address;

    try {
        const balance = await usdtContract.balanceOf(userAddress);

        
        const balanceInEther = ethers.utils.formatUnits(balance, 6);
        
        console.log({
            address: userAddress,
            balance: balanceInEther,
            token: 'USDT'
        });
        
        res.json({ message: 'Balance fetched and logged to console' });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch balance' });
    }
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});