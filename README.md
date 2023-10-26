# Payment System with USSD Integration and Ethereum Smart Contracts

This project demonstrates a versatile payment system that leverages Ethereum smart contracts for digital payments and integrates USSD functionality via Africa's Talking for offline accessibility.

## Ethereum Payment System

The Ethereum Payment System showcases the use of Ethereum smart contracts for online digital payments. It includes features to connect wallets, send payments, and check balances.

### Prerequisites

- Node.js and npm.
- A local Ethereum node or access to an Ethereum node.
- Truffle or Hardhat for contract development and deployment.

### Setup

1. Clone the project: `git clone https://github.com/yourusername/payment-system.git`
2. Install dependencies: `npm install`
3. Deploy smart contracts: Replace `YOUR_ETHEREUM_NODE_URL` in `server.js` with your Ethereum node URL, and replace `CONTRACT_ADDRESS` with the deployed contract address.
4. Start the server: `npm start`

### Usage

- Connect Wallet: POST request to `/connect` with a JSON body containing the account address.
- Send Payment: POST request to `/send` with a JSON body containing `from`, `to`, and `amount`.
- Check Balance: GET request to `/balance/:account`.

## USSD Integration

The USSD Integration enables offline access to the payment system through USSD codes. Users can connect wallets, send payments, and check balances via Africa's Talking.

### Prerequisites

- An Africa's Talking account.
- Node.js and npm.
- Access to an Ethereum node (local development or testnet).
- Basic knowledge of Ethereum smart contracts and web3.js or ethers.js.

### Configuration

1. **Africa's Talking Setup**:

   - Sign up for an Africa's Talking account: [Africa's Talking Website](https://africastalking.com/).
   - Create a new USSD app in your Africa's Talking dashboard.
   - Define the USSD code that users will dial to access your payment system (e.g., `*123#`).
   - Configure Africa's Talking to forward USSD requests to your USSD gateway server.

2. **USSD Gateway Server**:

   - Set up a USSD gateway server capable of receiving HTTP requests from Africa's Talking.
   - The server should handle USSD session initiation and management.

3. **Ethereum Smart Contracts**:

   - Develop or use Ethereum smart contracts for connecting wallets, sending payments, and checking balances. For testing purposes, deploy these contracts to a local Ethereum node or testnet.

4. **Integration**:

   - Within your USSD gateway server, integrate with your Ethereum smart contracts.
   - Define functions to connect wallets, send payments, and check balances using web3.js or ethers.js.
   - Ensure that when users dial the USSD code and navigate through the USSD menus, the server sends requests to your smart contract functions to perform actions.

### Usage

#### USSD Access

1. Dial the USSD code you configured (e.g., `*123#`) from your mobile phone.

2. Follow the USSD menu options to connect your wallet, send payments, and check balances.

#### Smart Contracts

1. Deploy your Ethereum smart contracts to the desired network (local, testnet, or mainnet) using a tool like Hardhat.

2. Update the addresses of the deployed smart contracts in your USSD gateway server to interact with the correct contracts.

### Error Handling and Security

- Implement robust error handling in your USSD gateway server to gracefully handle unexpected issues.
- Ensure that user inputs are validated and sensitive data is properly protected.

### Testing and Deployment

- Test the entire system by simulating user interactions through the USSD interface.
- Deploy the USSD gateway server to a production environment.

### Documentation

Create user documentation that guides users on how to access and use the USSD-based payment system and the Ethereum Payment System. Include instructions on how to dial the USSD code, connect wallets, send payments, and check balances.

### Support and Maintenance

- Provide support channels for users and be prepared to address any issues or questions that arise.
- Regularly maintain and update the systems as needed.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
