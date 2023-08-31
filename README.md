# React Subgraph Template

This template provides a quick start for building React applications with Subgraph integration for your smart contract. It includes components for handling deposits and withdrawals using subgraph queries, along with the MUI X Data Grid for creating tables.

## Quick Start

Follow these steps to get started with the template:

1. **Clone the repository:**
```bash
git clone https://github.com/vkpatva/react-frontend-using-subgraph
cd subgraph-tutorial
```
2. **Install packages:**
```bash
npm install
```
3. **Run the development server:**
```bash
npm run dev
```

This will start the development server and you can access the app at `http://localhost:5173`.

## Package Details

This template comes with the following packages pre-configured:

- [MUI X Data Grid](https://mui.com/components/data-grid/) - A powerful grid component for building tables with sorting, filtering, and more.
- [@apollo/client](https://www.apollographql.com/docs/react/) - Apollo Client for querying GraphQL APIs, essential for interacting with subgraphs.

## Components

The `/components` directory contains two key components:

- **Deposit:** This component handles deposits and queries a subgraph to retrieve deposit-related data.
- **Withdraw:** Similar to Deposit, this component handles withdrawals and queries the subgraph accordingly.

Both components demonstrate how to integrate subgraph queries for interacting with Web 3 data.

## Contributions

Feel free to contribute to this template by opening issues or pull requests on the [GitHub repository](https://github.com/yourusername/react-web3-template). Your contributions are highly appreciated!

## License

This template is open-source and available under the [MIT License](LICENSE).
