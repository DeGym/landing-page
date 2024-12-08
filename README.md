 DeGym Landing Page

This project uses Next.js, TypeScript, and Web3.js to interact with smart contracts on the Ethereum blockchain.

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Testing](#testing)
- [Deployment](#deployment)
- [Contributing](#contributing)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14.x or later)
- npm (v6.x or later)
- MetaMask browser extension

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/DeGym/frontend.git
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Create a `.env.local` file in the root directory and add any necessary environment variables.

4. Start the development server:
   ```
   npm run dev
   ```

## Project Structure

```
src/
├── components/
│ ├── common/
│ ├── layout/
│ ├── section/
│ ├── staking/
│ ├── token/
│ └── ui/
├── context/
├── hooks/
├── pages/
├── public/
├── styles/
│ ├── components/
│ └── pages/
├── utils/
├── next.config.js
├── package.json
└── tsconfig.json
```

## Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm start`: Runs the production server.
- `npm run lint`: Runs the linter.
- `npm test`: Runs the test suite.

## Testing

This project uses Jest and React Testing Library for testing. You can run the test suite using the `npm test` command.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.

