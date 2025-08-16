export interface QuizQuestion {
  id: number;
  statement: string;
  correctAnswer: boolean; // true for "Yes", false for "STFU"
  explanation: string; // Explanation shown when user answers incorrectly
}

export const quizQuestions: QuizQuestion[] = [
  // Question 1 - as specified by user
  { id: 1, statement: "Base's whole userbase is Indians", correctAnswer: false, explanation: "STFU - Base has a diverse global userbase across many countries and demographics." },
  
  // Ethereum & Vitalik Buterin
  { id: 2, statement: "Vitalik Buterin created Ethereum when he was 17 years old", correctAnswer: false, explanation: "STFU - Vitalik was 19, not 17, when he published the Ethereum whitepaper in late 2013." },
  { id: 3, statement: "Ethereum's original whitepaper was published in 2012", correctAnswer: false, explanation: "STFU - The Ethereum whitepaper was published by Vitalik Buterin in late 2013, not 2012." },
  { id: 4, statement: "Vitalik Buterin was born in Canada", correctAnswer: false, explanation: "STFU - Vitalik was born in Kolomna, Russia and moved to Canada with his family when he was 6 years old." },
  { id: 5, statement: "Ethereum uses Proof of Work consensus mechanism", correctAnswer: false, explanation: "STFU - Ethereum transitioned to Proof of Stake consensus with The Merge in September 2022." },
  { id: 6, statement: "Vitalik Buterin has a computer science degree from university", correctAnswer: false, explanation: "STFU - Vitalik dropped out of the University of Waterloo to work on Ethereum full-time." },
  { id: 7, statement: "The Ethereum merge happened in 2021", correctAnswer: false, explanation: "STFU - The Ethereum Merge occurred on September 15, 2022, not 2021." },
  { id: 8, statement: "Vitalik Buterin originally worked on Coinbase", correctAnswer: false, explanation: "STFU - Vitalik co-founded Bitcoin Magazine in 2011, not Coinbase, before creating Ethereum." },
  { id: 9, statement: "Ethereum's gas fees are always under $1", correctAnswer: false, explanation: "STFU - Ethereum gas fees can range from a few dollars to hundreds during network congestion." },
  { id: 10, statement: "Vitalik was the sole creator of EIP-1559 which introduced fee burning", correctAnswer: false, explanation: "STFU - EIP-1559 was proposed by multiple people including Eric Conner, Rick Dudley, and others, not solely by Vitalik." },
  
  // Base L2 & Jesse Pollak
  { id: 11, statement: "Base is built by Optimism Labs", correctAnswer: false, explanation: "STFU - Base is built by Coinbase using Optimism's OP Stack, but it's Coinbase's product, not Optimism Labs'." },
  { id: 12, statement: "Jesse Pollak is the founder of Base", correctAnswer: true, explanation: "Yes - Jesse Pollak is the founder and leads Base development at Coinbase." },
  { id: 13, statement: "Base launched in 2022", correctAnswer: false, explanation: "STFU - Base mainnet launched in August 2023, not 2022." },
  { id: 14, statement: "Base uses its own native token", correctAnswer: false, explanation: "STFU - Base uses ETH as its native gas token, not its own token." },
  { id: 15, statement: "Jesse Pollak previously worked at Microsoft", correctAnswer: false, explanation: "STFU - Jesse worked at Google, not Microsoft, before joining Coinbase to lead consumer products." },
  { id: 16, statement: "Base is a zk-rollup", correctAnswer: false, explanation: "STFU - Base is an Optimistic Rollup built using Optimism's OP Stack, not a zk-rollup." },
  { id: 17, statement: "Base has higher fees than Polygon", correctAnswer: false, explanation: "STFU - Base typically has lower fees than Polygon in most cases, as both are L2 solutions with competitive pricing." },
  { id: 18, statement: "Jesse Pollak created the first NFT on Coinbase", correctAnswer: true, explanation: "Yes - Jesse led the NFT initiatives at Coinbase including the first NFT marketplace." },
  { id: 19, statement: "Base supports all Ethereum smart contracts", correctAnswer: true, explanation: "Yes - Base is EVM-compatible, supporting all Ethereum smart contracts without modification." },
  { id: 20, statement: "Base was the first L2 to reach 1 billion transactions", correctAnswer: false, explanation: "STFU - Arbitrum and Polygon reached 1 billion transactions before Base launched." },
  
  // Farcaster
  { id: 21, statement: "Farcaster was founded by Dan Romero and Balaji Srinivasan", correctAnswer: false, explanation: "STFU - Farcaster was founded by Dan Romero and Varun Srinivasan, not Balaji Srinivasan." },
  { id: 22, statement: "Farcaster is built on Polygon", correctAnswer: false, explanation: "STFU - Farcaster uses Ethereum for identity and Optimism for data storage, not Polygon." },
  { id: 23, statement: "Warpcast is the most popular Farcaster client", correctAnswer: true, explanation: "Yes - Warpcast, built by the Farcaster team, is the most widely used client." },
  { id: 24, statement: "Farcaster uses a token called FARB", correctAnswer: false, explanation: "STFU - Farcaster doesn't have its own token, though various tokens exist in the ecosystem." },
  { id: 25, statement: "Dan Romero was previously at Andreessen Horowitz", correctAnswer: false, explanation: "STFU - Dan Romero was VP of International & Business Development at Coinbase, not Andreessen Horowitz." },
  { id: 26, statement: "Farcaster uses centralized identity management", correctAnswer: false, explanation: "STFU - Farcaster uses decentralized identity with usernames stored on Ethereum, not centralized management." },
  { id: 27, statement: "Frames were introduced by Farcaster in 2023", correctAnswer: false, explanation: "STFU - Farcaster Frames launched in early 2024, not 2023." },
  { id: 28, statement: "Farcaster has over 1 million active users", correctAnswer: false, explanation: "STFU - Farcaster has hundreds of thousands of users but hasn't reached 1 million active users." },
  { id: 29, statement: "You need to pay to join Farcaster", correctAnswer: true, explanation: "Yes - Users pay a small fee to register usernames and prevent spam." },
  { id: 30, statement: "Farcaster stores all data on IPFS", correctAnswer: false, explanation: "STFU - Farcaster stores data on decentralized hubs, not directly on IPFS." },
  
  // Mini Apps
  { id: 31, statement: "Mini Apps on Farcaster cannot access wallet connections for security", correctAnswer: false, explanation: "STFU - Mini Apps can connect to wallets through Wagmi and Web3 integrations built into the framework." },
  { id: 32, statement: "Mini Apps were launched in 2023", correctAnswer: false, explanation: "STFU - Farcaster Mini Apps were introduced in 2024, not 2023, as an evolution of Frames." },
  { id: 33, statement: "Mini Apps can only run on mobile devices", correctAnswer: false, explanation: "STFU - Mini Apps work on both mobile and desktop devices within Farcaster clients." },
  { id: 34, statement: "Mini Apps support payments through Daimo Pay", correctAnswer: true, explanation: "Yes - Daimo Pay integration allows Mini Apps to process payments and transfers seamlessly." },
  { id: 35, statement: "Mini Apps can mint NFTs directly", correctAnswer: true, explanation: "Yes - Mini Apps support NFT minting through various providers like Zora, Manifold, and custom contracts." },
  { id: 36, statement: "Mini Apps have unlimited storage capacity", correctAnswer: false, explanation: "STFU - Mini Apps have storage limits and rely on external services like Supabase for file storage." },
  { id: 37, statement: "Mini Apps cannot access user's Farcaster profile for privacy", correctAnswer: false, explanation: "STFU - Mini Apps can access user profile data and social context through the Farcaster SDK." },
  { id: 38, statement: "Mini Apps require approval from Farcaster team", correctAnswer: false, explanation: "STFU - Mini Apps are permissionless and can be deployed by anyone without approval." },
  { id: 39, statement: "Mini Apps can be built with any web framework", correctAnswer: true, explanation: "Yes - While templates use Next.js, Mini Apps can be built with React, Vue, or any web framework." },
  { id: 40, statement: "Mini Apps support real-time notifications", correctAnswer: true, explanation: "Yes - Mini Apps can send notifications and updates through webhook integrations and the Farcaster protocol." },
  
  // Base L2 Builders & Profiles
  { id: 41, statement: "Brian Armstrong is the CTO of Coinbase", correctAnswer: false, explanation: "STFU - Brian Armstrong co-founded Coinbase in 2012 and serves as its CEO, not CTO." },
  { id: 42, statement: "Degen token originated on Base", correctAnswer: true, explanation: "Yes - DEGEN token was launched on Base and became popular in Farcaster communities." },
  { id: 43, statement: "Friend.tech was built on Base", correctAnswer: true, explanation: "Yes - Friend.tech, the social trading platform, was built on Base L2." },
  { id: 44, statement: "Zora Network is a competitor to Base", correctAnswer: true, explanation: "Yes - Zora Network is another L2 solution that competes with Base for creators and NFT activity." },
  { id: 45, statement: "Optimism and Base use completely different codebases", correctAnswer: false, explanation: "STFU - Base is built using Optimism's OP Stack, sharing much of the same underlying code." },
  { id: 46, statement: "Base has its own block explorer called BaseScan", correctAnswer: true, explanation: "Yes - BaseScan is the official block explorer for Base, similar to Etherscan for Ethereum." },
  { id: 47, statement: "Uniswap was the first DEX to deploy on Base", correctAnswer: true, explanation: "Yes - Uniswap V3 was among the first major DEXs to deploy on Base at launch." },
  { id: 48, statement: "Base supports account abstraction", correctAnswer: true, explanation: "Yes - Base supports ERC-4337 account abstraction for improved user experience." },
  { id: 49, statement: "Coinbase Wallet integrates natively with Base", correctAnswer: true, explanation: "Yes - Coinbase Wallet has native Base integration since Coinbase built both products." },
  { id: 50, statement: "Base uses the same gas token as Polygon", correctAnswer: false, explanation: "STFU - Base uses ETH as its gas token, while Polygon uses MATIC." },
  
  // Token Communities on Ethereum
  { id: 51, statement: "BAYC is the most expensive NFT collection ever", correctAnswer: false, explanation: "STFU - While BAYC is expensive, CryptoPunks have had higher individual sales and floor prices at times." },
  { id: 52, statement: "Shiba Inu coin has a larger market cap than Dogecoin", correctAnswer: false, explanation: "STFU - Dogecoin typically maintains a higher market cap than Shiba Inu, though this can fluctuate." },
  { id: 53, statement: "Uniswap token (UNI) was airdropped to early users", correctAnswer: true, explanation: "Yes - Uniswap airdropped 400 UNI tokens to every address that had used the protocol before September 2020." },
  { id: 54, statement: "CryptoPunks were the first NFT collection on Ethereum", correctAnswer: false, explanation: "STFU - While CryptoPunks were among the earliest, projects like Etheria predated them slightly." },
  { id: 55, statement: "USDC is fully collateralized by US dollars", correctAnswer: true, explanation: "Yes - USDC is backed 1:1 by US dollars and short-duration US government securities." },
  { id: 56, statement: "Maker Protocol created the first stablecoin DAI", correctAnswer: true, explanation: "Yes - MakerDAO created DAI, one of the first decentralized stablecoins on Ethereum." },
  { id: 57, statement: "Chainlink oracles are used by most DeFi protocols", correctAnswer: true, explanation: "Yes - Chainlink is the dominant oracle provider for price feeds in DeFi protocols." },
  { id: 58, statement: "Compound was the first lending protocol on Ethereum", correctAnswer: true, explanation: "Yes - Compound pioneered algorithmic money markets and lending on Ethereum." },
  { id: 59, statement: "Aave allows flash loans without collateral", correctAnswer: true, explanation: "Yes - Aave introduced flash loans that allow borrowing without collateral if repaid in the same transaction." },
  { id: 60, statement: "OpenSea takes a 10% fee on NFT sales", correctAnswer: false, explanation: "STFU - OpenSea typically takes a 2.5% fee on NFT sales, not 10%." },
  
  // Token Communities on Base L2
  { id: 61, statement: "DEGEN is the native token of Base", correctAnswer: false, explanation: "STFU - DEGEN is a community token, not Base's native token. Base uses ETH as its native gas token." },
  { id: 62, statement: "Brett is a popular memecoin on Base", correctAnswer: true, explanation: "Yes - BRETT is a popular memecoin that gained traction on Base, often associated with Base culture." },
  { id: 63, statement: "Aerodrome is the largest DEX on Base", correctAnswer: true, explanation: "Yes - Aerodrome has become the largest DEX on Base by TVL and trading volume." },
  { id: 64, statement: "Base has more TVL than Arbitrum", correctAnswer: false, explanation: "STFU - Arbitrum typically has higher TVL than Base, though Base is growing rapidly." },
  { id: 65, statement: "BALD was a controversial token launch on Base", correctAnswer: true, explanation: "Yes - BALD token had a controversial launch with allegations of insider trading and manipulation." },
  { id: 66, statement: "Seamless Protocol is a lending protocol on Base", correctAnswer: true, explanation: "Yes - Seamless Protocol is a major lending and borrowing protocol built on Base." },
  { id: 67, statement: "Base supports wrapped Bitcoin (WBTC)", correctAnswer: true, explanation: "Yes - WBTC and other wrapped assets can be bridged to and traded on Base." },
  { id: 68, statement: "Higher token is connected to Farcaster culture", correctAnswer: true, explanation: "Yes - HIGHER token emerged from Farcaster community culture and Base ecosystem." },
  { id: 69, statement: "Base Name Service (BNS) competes with ENS", correctAnswer: true, explanation: "Yes - Base Name Service provides domain naming services on Base, similar to ENS on Ethereum." },
  { id: 70, statement: "All Ethereum tokens can be bridged to Base instantly", correctAnswer: false, explanation: "STFU - Bridging tokens from Ethereum to Base takes time for security, typically several minutes to hours." },
  
  // More Ethereum History & Facts
  { id: 71, statement: "The DAO hack happened in 2016", correctAnswer: true, explanation: "Yes - The DAO was hacked in June 2016, leading to the Ethereum hard fork." },
  { id: 72, statement: "Ethereum Classic emerged after the DAO fork", correctAnswer: true, explanation: "Yes - Ethereum Classic continued the original chain that didn't reverse the DAO hack." },
  { id: 73, statement: "Gas prices on Ethereum have never exceeded 1000 gwei", correctAnswer: false, explanation: "STFU - Gas prices have exceeded 1000 gwei during periods of extreme network congestion." },
  { id: 74, statement: "Vitalik Buterin owns more than 50% of all ETH", correctAnswer: false, explanation: "STFU - Vitalik owns a small percentage of total ETH supply, nowhere near 50%." },
  { id: 75, statement: "Ethereum 2.0 is now called The Merge", correctAnswer: false, explanation: "STFU - The Merge was one part of Ethereum 2.0. The full upgrade includes sharding and other improvements." },
  { id: 76, statement: "Proof of Stake reduces Ethereum's energy consumption by 99%", correctAnswer: true, explanation: "Yes - The transition to Proof of Stake reduced Ethereum's energy consumption by approximately 99.9%." },
  { id: 77, statement: "EIP-1559 was implemented in the London hard fork", correctAnswer: true, explanation: "Yes - EIP-1559 fee burning mechanism was activated in the London hard fork in August 2021." },
  { id: 78, statement: "Ethereum processes more transactions per second than Bitcoin", correctAnswer: true, explanation: "Yes - Ethereum processes around 15 TPS compared to Bitcoin's 7 TPS." },
  { id: 79, statement: "The Ethereum Foundation holds the trademark for 'Ethereum'", correctAnswer: true, explanation: "Yes - The Ethereum Foundation owns and protects the Ethereum trademark." },
  { id: 80, statement: "Solidity was the first programming language for Ethereum", correctAnswer: true, explanation: "Yes - Solidity was specifically created for Ethereum smart contract development." },
  
  // Advanced Base & L2 Knowledge
  { id: 81, statement: "Base inherits security from Ethereum mainnet", correctAnswer: true, explanation: "Yes - As an optimistic rollup, Base inherits Ethereum's security through fraud proofs." },
  { id: 82, statement: "Optimistic rollups require fraud proofs", correctAnswer: true, explanation: "Yes - Optimistic rollups rely on fraud proofs to challenge invalid transactions." },
  { id: 83, statement: "Base transactions are final immediately", correctAnswer: false, explanation: "STFU - Base transactions have a challenge period before being finalized on Ethereum." },
  { id: 84, statement: "Jesse Pollak previously led consumer products at Coinbase", correctAnswer: true, explanation: "Yes - Jesse Pollak was VP of Consumer Product at Coinbase before founding Base." },
  { id: 85, statement: "Base uses the same virtual machine as Ethereum", correctAnswer: true, explanation: "Yes - Base is EVM-compatible, using the same Ethereum Virtual Machine." },
  { id: 86, statement: "Coinbase provides sequencer services for Base", correctAnswer: true, explanation: "Yes - Coinbase currently operates the sequencer for Base transactions." },
  { id: 87, statement: "Base plans to become a validium in the future", correctAnswer: false, explanation: "STFU - Base is an optimistic rollup and there are no announced plans to become a validium." },
  { id: 88, statement: "Base supports native account abstraction", correctAnswer: true, explanation: "Yes - Base supports ERC-4337 account abstraction for improved user experience." },
  { id: 89, statement: "Base was built using the OP Stack", correctAnswer: true, explanation: "Yes - Base is built on Optimism's OP Stack, a modular blockchain framework." },
  { id: 90, statement: "Base has its own governance token", correctAnswer: false, explanation: "STFU - Base does not have its own governance token, using ETH as its native token." },
  
  // Farcaster & Social Protocol Facts
  { id: 91, statement: "Farcaster hubs store social graph data", correctAnswer: true, explanation: "Yes - Farcaster hubs are decentralized nodes that store and replicate social graph data." },
  { id: 92, statement: "Purple DAO supports Farcaster ecosystem development", correctAnswer: true, explanation: "Yes - Purple DAO provides grants and support for Farcaster protocol development." },
  { id: 93, statement: "Farcaster usernames are NFTs", correctAnswer: true, explanation: "Yes - Farcaster usernames are represented as NFTs on Ethereum for decentralized ownership." },
  { id: 94, statement: "Anyone can run a Farcaster hub", correctAnswer: true, explanation: "Yes - Farcaster is permissionless, allowing anyone to run a hub and participate in the network." },
  { id: 95, statement: "Farcaster charges annual fees to prevent spam", correctAnswer: true, explanation: "Yes - Farcaster has small annual storage fees to prevent spam and maintain data quality." },
  { id: 96, statement: "Lens Protocol and Farcaster are direct competitors", correctAnswer: true, explanation: "Yes - Both Lens and Farcaster are decentralized social protocols competing for users and developers." },
  { id: 97, statement: "Farcaster supports end-to-end encrypted messaging", correctAnswer: false, explanation: "STFU - Farcaster focuses on public social content, not private encrypted messaging." },
  { id: 98, statement: "Warps are Farcaster's version of Twitter Spaces", correctAnswer: false, explanation: "STFU - There is no feature called 'Warps' in Farcaster. You might be thinking of casts." },
  { id: 99, statement: "Farcaster was originally called 'Farcaster Protocol'", correctAnswer: false, explanation: "STFU - Farcaster has always been called Farcaster, though it is indeed a protocol." },
  { id: 100, statement: "Dan Romero was employee #1 at Coinbase", correctAnswer: false, explanation: "STFU - Dan Romero joined Coinbase early but was not employee #1. He was VP of International & Business Development." }
];