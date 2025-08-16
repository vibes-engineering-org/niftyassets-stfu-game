export interface QuizQuestion {
  id: number;
  statement: string;
  correctAnswer: boolean; // true for "Yes", false for "STFU"
}

export const quizQuestions: QuizQuestion[] = [
  // Question 1 - as specified by user
  { id: 1, statement: "Base's whole userbase is Indians", correctAnswer: false },
  
  // Ethereum & Vitalik Buterin
  { id: 2, statement: "Vitalik Buterin created Ethereum when he was 19 years old", correctAnswer: true },
  { id: 3, statement: "Ethereum's original whitepaper was published in 2013", correctAnswer: true },
  { id: 4, statement: "Vitalik Buterin was born in Canada", correctAnswer: true },
  { id: 5, statement: "Ethereum uses Proof of Work consensus mechanism", correctAnswer: false },
  { id: 6, statement: "Vitalik Buterin has a computer science degree from university", correctAnswer: false },
  { id: 7, statement: "The Ethereum merge happened in 2022", correctAnswer: true },
  { id: 8, statement: "Vitalik Buterin originally worked on Bitcoin Magazine", correctAnswer: true },
  { id: 9, statement: "Ethereum's gas fees are always under $1", correctAnswer: false },
  { id: 10, statement: "Vitalik proposed EIP-1559 which introduced fee burning", correctAnswer: true },
  
  // Base L2 & Jesse Pollak
  { id: 11, statement: "Base is built by Coinbase", correctAnswer: true },
  { id: 12, statement: "Jesse Pollak is the founder of Base", correctAnswer: true },
  { id: 13, statement: "Base launched in 2023", correctAnswer: true },
  { id: 14, statement: "Base uses its own native token", correctAnswer: false },
  { id: 15, statement: "Jesse Pollak previously worked at Google", correctAnswer: true },
  { id: 16, statement: "Base is an Optimistic Rollup", correctAnswer: true },
  { id: 17, statement: "Base has lower fees than Ethereum mainnet", correctAnswer: true },
  { id: 18, statement: "Jesse Pollak created the first NFT on Coinbase", correctAnswer: true },
  { id: 19, statement: "Base supports all Ethereum smart contracts", correctAnswer: true },
  { id: 20, statement: "Base was the first L2 to reach 1 billion transactions", correctAnswer: false },
  
  // Farcaster
  { id: 21, statement: "Farcaster was founded by Dan Romero and Varun Srinivasan", correctAnswer: true },
  { id: 22, statement: "Farcaster is built on Ethereum", correctAnswer: true },
  { id: 23, statement: "Warpcast is the most popular Farcaster client", correctAnswer: true },
  { id: 24, statement: "Farcaster uses a token called FARB", correctAnswer: false },
  { id: 25, statement: "Dan Romero was previously at Coinbase", correctAnswer: true },
  { id: 26, statement: "Farcaster supports decentralized identity", correctAnswer: true },
  { id: 27, statement: "Frames were introduced by Farcaster in 2024", correctAnswer: true },
  { id: 28, statement: "Farcaster has over 1 million active users", correctAnswer: false },
  { id: 29, statement: "You need to pay to join Farcaster", correctAnswer: true },
  { id: 30, statement: "Farcaster stores all data on IPFS", correctAnswer: false },
  
  // Mini Apps
  { id: 31, statement: "Mini Apps on Farcaster can access wallet connections", correctAnswer: true },
  { id: 32, statement: "Mini Apps were launched in 2024", correctAnswer: true },
  { id: 33, statement: "Mini Apps can only run on mobile devices", correctAnswer: false },
  { id: 34, statement: "Mini Apps support payments through Daimo Pay", correctAnswer: true },
  { id: 35, statement: "Mini Apps can mint NFTs directly", correctAnswer: true },
  { id: 36, statement: "Mini Apps have unlimited storage capacity", correctAnswer: false },
  { id: 37, statement: "Mini Apps can access user's Farcaster profile", correctAnswer: true },
  { id: 38, statement: "Mini Apps require approval from Farcaster team", correctAnswer: false },
  { id: 39, statement: "Mini Apps can be built with any web framework", correctAnswer: true },
  { id: 40, statement: "Mini Apps support real-time notifications", correctAnswer: true },
  
  // Base L2 Builders & Profiles
  { id: 41, statement: "Brian Armstrong is the CEO of Coinbase", correctAnswer: true },
  { id: 42, statement: "Degen token originated on Base", correctAnswer: true },
  { id: 43, statement: "Friend.tech was built on Base", correctAnswer: true },
  { id: 44, statement: "Zora Network is a competitor to Base", correctAnswer: true },
  { id: 45, statement: "Optimism and Base share the same codebase", correctAnswer: true },
  { id: 46, statement: "Base has its own block explorer called BaseScan", correctAnswer: true },
  { id: 47, statement: "Uniswap was the first DEX to deploy on Base", correctAnswer: true },
  { id: 48, statement: "Base supports account abstraction", correctAnswer: true },
  { id: 49, statement: "Coinbase Wallet integrates natively with Base", correctAnswer: true },
  { id: 50, statement: "Base uses the same gas token as Polygon", correctAnswer: false },
  
  // Token Communities on Ethereum
  { id: 51, statement: "BAYC is the most expensive NFT collection ever", correctAnswer: false },
  { id: 52, statement: "Shiba Inu coin has a larger market cap than Dogecoin", correctAnswer: false },
  { id: 53, statement: "Uniswap token (UNI) was airdropped to early users", correctAnswer: true },
  { id: 54, statement: "CryptoPunks were the first NFT collection on Ethereum", correctAnswer: false },
  { id: 55, statement: "USDC is fully collateralized by US dollars", correctAnswer: true },
  { id: 56, statement: "Maker Protocol created the first stablecoin DAI", correctAnswer: true },
  { id: 57, statement: "Chainlink oracles are used by most DeFi protocols", correctAnswer: true },
  { id: 58, statement: "Compound was the first lending protocol on Ethereum", correctAnswer: true },
  { id: 59, statement: "Aave allows flash loans without collateral", correctAnswer: true },
  { id: 60, statement: "OpenSea takes a 10% fee on NFT sales", correctAnswer: false },
  
  // Token Communities on Base L2
  { id: 61, statement: "DEGEN is the native token of Base", correctAnswer: false },
  { id: 62, statement: "Brett is a popular memecoin on Base", correctAnswer: true },
  { id: 63, statement: "Aerodrome is the largest DEX on Base", correctAnswer: true },
  { id: 64, statement: "Base has more TVL than Arbitrum", correctAnswer: false },
  { id: 65, statement: "BALD was a controversial token launch on Base", correctAnswer: true },
  { id: 66, statement: "Seamless Protocol is a lending protocol on Base", correctAnswer: true },
  { id: 67, statement: "Base supports wrapped Bitcoin (WBTC)", correctAnswer: true },
  { id: 68, statement: "Higher token is connected to Farcaster culture", correctAnswer: true },
  { id: 69, statement: "Base Name Service (BNS) competes with ENS", correctAnswer: true },
  { id: 70, statement: "All Ethereum tokens can be bridged to Base instantly", correctAnswer: false },
  
  // More Ethereum History & Facts
  { id: 71, statement: "The DAO hack happened in 2016", correctAnswer: true },
  { id: 72, statement: "Ethereum Classic emerged after the DAO fork", correctAnswer: true },
  { id: 73, statement: "Gas prices on Ethereum have never exceeded 1000 gwei", correctAnswer: false },
  { id: 74, statement: "Vitalik Buterin owns more than 50% of all ETH", correctAnswer: false },
  { id: 75, statement: "Ethereum 2.0 is now called The Merge", correctAnswer: false },
  { id: 76, statement: "Proof of Stake reduces Ethereum's energy consumption by 99%", correctAnswer: true },
  { id: 77, statement: "EIP-1559 was implemented in the London hard fork", correctAnswer: true },
  { id: 78, statement: "Ethereum processes more transactions per second than Bitcoin", correctAnswer: true },
  { id: 79, statement: "The Ethereum Foundation holds the trademark for 'Ethereum'", correctAnswer: true },
  { id: 80, statement: "Solidity was the first programming language for Ethereum", correctAnswer: true },
  
  // Advanced Base & L2 Knowledge
  { id: 81, statement: "Base inherits security from Ethereum mainnet", correctAnswer: true },
  { id: 82, statement: "Optimistic rollups require fraud proofs", correctAnswer: true },
  { id: 83, statement: "Base transactions are final immediately", correctAnswer: false },
  { id: 84, statement: "Jesse Pollak previously led consumer products at Coinbase", correctAnswer: true },
  { id: 85, statement: "Base uses the same virtual machine as Ethereum", correctAnswer: true },
  { id: 86, statement: "Coinbase provides sequencer services for Base", correctAnswer: true },
  { id: 87, statement: "Base plans to become a validium in the future", correctAnswer: false },
  { id: 88, statement: "Base supports native account abstraction", correctAnswer: true },
  { id: 89, statement: "Base was built using the OP Stack", correctAnswer: true },
  { id: 90, statement: "Base has its own governance token", correctAnswer: false },
  
  // Farcaster & Social Protocol Facts
  { id: 91, statement: "Farcaster hubs store social graph data", correctAnswer: true },
  { id: 92, statement: "Purple DAO supports Farcaster ecosystem development", correctAnswer: true },
  { id: 93, statement: "Farcaster usernames are NFTs", correctAnswer: true },
  { id: 94, statement: "Anyone can run a Farcaster hub", correctAnswer: true },
  { id: 95, statement: "Farcaster charges annual fees to prevent spam", correctAnswer: true },
  { id: 96, statement: "Lens Protocol and Farcaster are direct competitors", correctAnswer: true },
  { id: 97, statement: "Farcaster supports end-to-end encrypted messaging", correctAnswer: false },
  { id: 98, statement: "Warps are Farcaster's version of Twitter Spaces", correctAnswer: false },
  { id: 99, statement: "Farcaster was originally called 'Farcaster Protocol'", correctAnswer: false },
  { id: 100, statement: "Dan Romero was employee #1 at Coinbase", correctAnswer: false }
];