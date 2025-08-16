export interface QuizQuestion {
  id: number;
  statement: string;
  correctAnswer: boolean; // true for "Yes", false for "STFU"
  explanation: string; // Explanation shown when user answers incorrectly
}

export const quizQuestions: QuizQuestion[] = [
  // True Statements ("yes")
  {
    id: 1,
    statement: "Vitalik Buterin once wore a doge T-shirt to meet Vladimir Putin.",
    correctAnswer: true,
    explanation: "Yes - This actually happened. Vitalik wore a Dogecoin t-shirt when meeting Vladimir Putin at a blockchain event."
  },
  {
    id: 2,
    statement: "A DAO once tried to buy a copy of the U.S. Constitution — and lost.",
    correctAnswer: true,
    explanation: "Yes - ConstitutionDAO raised $47 million to buy a rare copy of the U.S. Constitution at auction but was outbid."
  },
  {
    id: 3,
    statement: "Someone bought a rock NFT for over $1 million.",
    correctAnswer: true,
    explanation: "Yes - EtherRock NFTs have sold for over $1 million, with one selling for 400 ETH when ETH was worth over $3,000."
  },
  {
    id: 4,
    statement: "Ethereum once had a hard fork because of a hacked DAO.",
    correctAnswer: true,
    explanation: "Yes - The 2016 DAO hack led to a controversial hard fork that created Ethereum and Ethereum Classic."
  },
  {
    id: 5,
    statement: "There is a token called $TURBO that was created entirely using ChatGPT.",
    correctAnswer: true,
    explanation: "Yes - TURBO token was created as an experiment using ChatGPT for all aspects of the project."
  },
  {
    id: 6,
    statement: "Coinbase created its own Layer 2 called Base.",
    correctAnswer: true,
    explanation: "Yes - Base is Coinbase's Layer 2 network built on Optimism's OP Stack, launched in 2023."
  },
  {
    id: 7,
    statement: "A hacker once returned stolen funds because the smart contract guilt-tripped them.",
    correctAnswer: true,
    explanation: "Yes - There have been cases where hackers returned funds after smart contracts or communities appealed to their conscience."
  },
  {
    id: 8,
    statement: "Uniswap once added an 'ape tax' emoji for coins with suspicious tickers.",
    correctAnswer: true,
    explanation: "Yes - Uniswap implemented warning systems including emojis to alert users about potentially risky or meme tokens."
  },
  {
    id: 9,
    statement: "A guy accidentally burned $10 million worth of ETH by copying the wrong address.",
    correctAnswer: true,
    explanation: "Yes - There have been multiple cases of people accidentally burning large amounts of ETH by sending to wrong addresses."
  },
  {
    id: 10,
    statement: "The 'pepecoin' token reached a billion-dollar market cap.",
    correctAnswer: true,
    explanation: "Yes - PEPE token reached over $1 billion market cap during the 2023 meme coin frenzy."
  },
  
  // False (or misrepresented) Statements ("stfu")
  {
    id: 11,
    statement: "Ethereum was originally built on the Bitcoin blockchain.",
    correctAnswer: false,
    explanation: "STFU - Ethereum is its own independent blockchain, not built on Bitcoin. It was created as a separate platform."
  },
  {
    id: 12,
    statement: "Dogecoin was created by Elon Musk as a joke.",
    correctAnswer: false,
    explanation: "STFU - Dogecoin was created by Billy Markus and Jackson Palmer in 2013, not Elon Musk. Elon just promoted it later."
  },
  {
    id: 13,
    statement: "The BASE chain was launched as a replacement for Coinbase's internal database.",
    correctAnswer: false,
    explanation: "STFU - Base was launched as a public Layer 2 for the crypto ecosystem, not as a database replacement."
  },
  {
    id: 14,
    statement: "You can mine Ethereum using a toaster if it has a WiFi chip.",
    correctAnswer: false,
    explanation: "STFU - Ethereum moved to Proof of Stake and can't be mined at all anymore. Also, toasters lack the computational power."
  },
  {
    id: 15,
    statement: "Vitalik once accidentally sent 50 ETH to a scammer and asked Twitter to reverse it.",
    correctAnswer: false,
    explanation: "STFU - This never happened. Blockchain transactions are irreversible and Vitalik is well aware of this."
  },
  {
    id: 16,
    statement: "ENS domains are required to file taxes in the U.S.",
    correctAnswer: false,
    explanation: "STFU - ENS domains are not required for tax filing. You use your regular tax ID and address."
  },
  {
    id: 17,
    statement: "Airdrops are legally considered income in the Cayman Islands.",
    correctAnswer: false,
    explanation: "STFU - The Cayman Islands has no income tax, so airdrops wouldn't be taxed as income there."
  },
  {
    id: 18,
    statement: "You can stake Base tokens to become a validator.",
    correctAnswer: false,
    explanation: "STFU - Base doesn't have its own token. It uses ETH and is secured by Ethereum mainnet."
  },
  {
    id: 19,
    statement: "Shiba Inu once bought naming rights to a football stadium.",
    correctAnswer: false,
    explanation: "STFU - Shiba Inu token holders or the project have not purchased stadium naming rights."
  },
  {
    id: 20,
    statement: "The SEC officially declared meme coins a protected cultural expression.",
    correctAnswer: false,
    explanation: "STFU - The SEC has never made such a declaration about meme coins. They regulate them like other securities."
  },

  // Additional True Statements to balance the ratio
  {
    id: 21,
    statement: "Bitcoin's creator Satoshi Nakamoto's identity is still unknown.",
    correctAnswer: true,
    explanation: "Yes - Despite many theories and claims, the true identity of Bitcoin's creator remains a mystery."
  },
  {
    id: 22,
    statement: "The first Bitcoin transaction was for buying pizza.",
    correctAnswer: true,
    explanation: "Yes - Laszlo Hanyecz bought two pizzas for 10,000 BTC on May 22, 2010, now celebrated as Bitcoin Pizza Day."
  },
  {
    id: 23,
    statement: "NFT trading volume exceeded $25 billion in 2021.",
    correctAnswer: true,
    explanation: "Yes - NFT trading volume exploded in 2021, with total volume exceeding $25 billion across various marketplaces."
  },
  {
    id: 24,
    statement: "Crypto exchanges have been hacked for billions of dollars total.",
    correctAnswer: true,
    explanation: "Yes - Major exchanges like Mt. Gox, Coincheck, and others have lost billions in total to hacks over the years."
  },
  {
    id: 25,
    statement: "Some countries have banned cryptocurrency entirely.",
    correctAnswer: true,
    explanation: "Yes - Countries like China and others have implemented comprehensive bans on cryptocurrency trading and mining."
  },
  {
    id: 26,
    statement: "DeFi protocols have locked over $100 billion in total value.",
    correctAnswer: true,
    explanation: "Yes - At peak times, DeFi Total Value Locked (TVL) has exceeded $100 billion across all protocols."
  },
  {
    id: 27,
    statement: "Ethereum gas fees once exceeded $100 for simple transactions.",
    correctAnswer: true,
    explanation: "Yes - During peak congestion periods, especially during NFT mints, gas fees have exceeded $100 for basic transactions."
  },
  {
    id: 28,
    statement: "A single CryptoPunk NFT sold for over $10 million.",
    correctAnswer: true,
    explanation: "Yes - CryptoPunk #5822 sold for $23.7 million, making it one of the most expensive NFTs ever sold."
  },
  {
    id: 29,
    statement: "Stablecoins have a combined market cap over $100 billion.",
    correctAnswer: true,
    explanation: "Yes - Stablecoins like USDT, USDC, and others have reached a combined market cap exceeding $100 billion."
  },
  {
    id: 30,
    statement: "Some people have lost access to Bitcoin worth millions due to lost private keys.",
    correctAnswer: true,
    explanation: "Yes - It's estimated that 20% of all Bitcoin is lost forever due to lost private keys, worth billions of dollars."
  },

  // Additional False Statements to balance the ratio  
  {
    id: 31,
    statement: "Bitcoin can process 1 million transactions per second.",
    correctAnswer: false,
    explanation: "STFU - Bitcoin processes about 7 transactions per second, nowhere near 1 million TPS."
  },
  {
    id: 32,
    statement: "All cryptocurrencies use the same blockchain technology.",
    correctAnswer: false,
    explanation: "STFU - Different cryptocurrencies use various blockchain technologies, consensus mechanisms, and architectures."
  },
  {
    id: 33,
    statement: "You need government permission to create a cryptocurrency.",
    correctAnswer: false,
    explanation: "STFU - Anyone can create a cryptocurrency without government permission, though regulations vary by jurisdiction."
  },
  {
    id: 34,
    statement: "Smart contracts can be easily modified after deployment.",
    correctAnswer: false,
    explanation: "STFU - Most smart contracts are immutable once deployed and cannot be easily modified without specific upgrade patterns."
  },
  {
    id: 35,
    statement: "Cryptocurrency mining uses renewable energy exclusively.",
    correctAnswer: false,
    explanation: "STFU - Crypto mining uses a mix of energy sources, though renewable usage is increasing."
  },
  {
    id: 36,
    statement: "All DeFi protocols are completely decentralized.",
    correctAnswer: false,
    explanation: "STFU - Many DeFi protocols have centralized components like admin keys, oracles, or governance tokens held by teams."
  },
  {
    id: 37,
    statement: "NFTs always give you copyright ownership of the underlying artwork.",
    correctAnswer: false,
    explanation: "STFU - NFTs typically only give ownership of the token, not automatic copyright of the underlying content."
  },
  {
    id: 38,
    statement: "Blockchain transactions can be reversed by miners.",
    correctAnswer: false,
    explanation: "STFU - Once confirmed and added to the blockchain, transactions are generally irreversible without network consensus."
  },
  {
    id: 39,
    statement: "All Layer 2 solutions work exactly the same way.",
    correctAnswer: false,
    explanation: "STFU - Layer 2 solutions vary significantly: optimistic rollups, zk-rollups, state channels, and sidechains work differently."
  },
  {
    id: 40,
    statement: "Cryptocurrency wallets actually store your coins.",
    correctAnswer: false,
    explanation: "STFU - Wallets store private keys, not coins. The coins exist on the blockchain, wallets just manage access to them."
  },

  // Additional questions to reach 120 total (need 80 more)
  // Starting with crypto basics and general knowledge
  {
    id: 41,
    statement: "Bitcoin was created in 2009.",
    correctAnswer: true,
    explanation: "Yes - Bitcoin was launched by Satoshi Nakamoto on January 3, 2009."
  },
  {
    id: 42,
    statement: "Ethereum introduced smart contracts to blockchain.",
    correctAnswer: true,
    explanation: "Yes - While not the first, Ethereum popularized smart contracts and made them mainstream in blockchain."
  },
  {
    id: 43,
    statement: "A blockchain is essentially a distributed ledger.",
    correctAnswer: true,
    explanation: "Yes - A blockchain is a type of distributed ledger technology that maintains a continuously growing list of records."
  },
  {
    id: 44,
    statement: "Proof of Work requires miners to solve mathematical puzzles.",
    correctAnswer: true,
    explanation: "Yes - PoW consensus requires miners to solve computationally difficult puzzles to validate transactions."
  },
  {
    id: 45,
    statement: "DeFi stands for Decentralized Finance.",
    correctAnswer: true,
    explanation: "Yes - DeFi is the abbreviation for Decentralized Finance, referring to financial services on blockchain."
  },
  {
    id: 46,
    statement: "AMM stands for Automated Market Maker.",
    correctAnswer: true,
    explanation: "Yes - AMMs are protocols that use mathematical formulas to price assets and enable trading without order books."
  },
  {
    id: 47,
    statement: "Yield farming involves providing liquidity to earn rewards.",
    correctAnswer: true,
    explanation: "Yes - Yield farming is the practice of providing liquidity to DeFi protocols in exchange for rewards."
  },
  {
    id: 48,
    statement: "Flash loans allow borrowing without collateral.",
    correctAnswer: true,
    explanation: "Yes - Flash loans enable borrowing large amounts without collateral, as long as the loan is repaid in the same transaction."
  },
  {
    id: 49,
    statement: "MEV stands for Maximum Extractable Value.",
    correctAnswer: true,
    explanation: "Yes - MEV refers to the maximum value that can be extracted from block production in excess of standard rewards."
  },
  {
    id: 50,
    statement: "Slippage occurs when the actual price differs from expected price.",
    correctAnswer: true,
    explanation: "Yes - Slippage happens when there's a difference between the expected price and actual execution price of a trade."
  },
  {
    id: 51,
    statement: "Bitcoin uses a Proof of Stake consensus mechanism.",
    correctAnswer: false,
    explanation: "STFU - Bitcoin uses Proof of Work, not Proof of Stake. Ethereum switched to PoS, but Bitcoin remains PoW."
  },
  {
    id: 52,
    statement: "Smart contracts are always bug-free once deployed.",
    correctAnswer: false,
    explanation: "STFU - Smart contracts can have bugs and vulnerabilities. Many hacks have occurred due to smart contract bugs."
  },
  {
    id: 53,
    statement: "All cryptocurrencies are completely anonymous.",
    correctAnswer: false,
    explanation: "STFU - Most cryptocurrencies are pseudonymous, not anonymous. Transactions can often be traced with enough analysis."
  },
  {
    id: 54,
    statement: "DeFi protocols have never been hacked.",
    correctAnswer: false,
    explanation: "STFU - Many DeFi protocols have been hacked, resulting in billions of dollars in losses across the ecosystem."
  },
  {
    id: 55,
    statement: "Gas fees are the same on all blockchains.",
    correctAnswer: false,
    explanation: "STFU - Gas fees vary significantly between blockchains. Some have much lower fees than others."
  },
  {
    id: 56,
    statement: "You can recover lost private keys from the blockchain.",
    correctAnswer: false,
    explanation: "STFU - Private keys cannot be recovered from the blockchain. If you lose your private key, your funds are gone forever."
  },
  {
    id: 57,
    statement: "All DeFi tokens have the same tokenomics.",
    correctAnswer: false,
    explanation: "STFU - DeFi tokens have vastly different tokenomics, utility, and distribution models."
  },
  {
    id: 58,
    statement: "Impermanent loss only affects liquidity providers in bull markets.",
    correctAnswer: false,
    explanation: "STFU - Impermanent loss can affect liquidity providers in any market condition when asset prices diverge."
  },
  {
    id: 59,
    statement: "All blockchain networks have the same transaction throughput.",
    correctAnswer: false,
    explanation: "STFU - Different blockchains have vastly different transaction throughputs, from Bitcoin's ~7 TPS to high-performance chains with thousands."
  },
  {
    id: 60,
    statement: "Cryptocurrency prices are manipulated by a single entity.",
    correctAnswer: false,
    explanation: "STFU - While manipulation exists, crypto markets are influenced by many factors including retail, institutions, and market makers."
  },
  {
    id: 61,
    statement: "Wrapped tokens allow you to use one blockchain's tokens on another blockchain.",
    correctAnswer: true,
    explanation: "Yes - Wrapped tokens are representations of native tokens from one blockchain that can be used on another blockchain."
  },
  {
    id: 62,
    statement: "Oracles provide external data to smart contracts.",
    correctAnswer: true,
    explanation: "Yes - Oracles are services that provide external data to blockchain networks and smart contracts."
  },
  {
    id: 63,
    statement: "Cross-chain bridges connect different blockchain networks.",
    correctAnswer: true,
    explanation: "Yes - Bridges are protocols that enable interoperability between different blockchain networks."
  },
  {
    id: 64,
    statement: "Liquidity pools are used in decentralized exchanges.",
    correctAnswer: true,
    explanation: "Yes - Liquidity pools contain funds locked in smart contracts to facilitate trading on DEXs."
  },
  {
    id: 65,
    statement: "Governance tokens allow holders to vote on protocol changes.",
    correctAnswer: true,
    explanation: "Yes - Governance tokens give holders voting rights to participate in decentralized protocol governance."
  },
  {
    id: 66,
    statement: "Layer 2 solutions aim to improve blockchain scalability.",
    correctAnswer: true,
    explanation: "Yes - Layer 2 solutions are built on top of base blockchains to increase transaction throughput and reduce costs."
  },
  {
    id: 67,
    statement: "Staking involves locking tokens to help secure a network.",
    correctAnswer: true,
    explanation: "Yes - In Proof of Stake networks, staking involves locking tokens to participate in network consensus and earn rewards."
  },
  {
    id: 68,
    statement: "Total Value Locked (TVL) measures capital in DeFi protocols.",
    correctAnswer: true,
    explanation: "Yes - TVL represents the total amount of cryptocurrency locked in DeFi protocols at any given time."
  },
  {
    id: 69,
    statement: "Rug pulls are a common type of crypto scam.",
    correctAnswer: true,
    explanation: "Yes - Rug pulls occur when developers abandon a project and steal investors' funds."
  },
  {
    id: 70,
    statement: "Decentralized exchanges never require KYC verification.",
    correctAnswer: true,
    explanation: "Yes - True DEXs operate without central authority and typically don't require KYC, though some hybrid models do."
  },
  {
    id: 71,
    statement: "All blockchain transactions are instantly final.",
    correctAnswer: false,
    explanation: "STFU - Most blockchains require multiple confirmations before transactions are considered final."
  },
  {
    id: 72,
    statement: "Cryptocurrency can only be used for illegal activities.",
    correctAnswer: false,
    explanation: "STFU - Cryptocurrency has many legitimate uses including payments, DeFi, gaming, and as a store of value."
  },
  {
    id: 73,
    statement: "All stablecoins are backed 1:1 by USD reserves.",
    correctAnswer: false,
    explanation: "STFU - Different stablecoins use various backing mechanisms including algorithms, not all are 1:1 USD backed."
  },
  {
    id: 74,
    statement: "Smart contracts always execute exactly as intended.",
    correctAnswer: false,
    explanation: "STFU - Smart contracts can have bugs, vulnerabilities, or be exploited in ways not intended by developers."
  },
  {
    id: 75,
    statement: "All Layer 2 solutions are completely trustless.",
    correctAnswer: false,
    explanation: "STFU - Some Layer 2 solutions have trust assumptions or centralized components, though they aim for decentralization."
  },
  {
    id: 76,
    statement: "Yield farming is completely risk-free.",
    correctAnswer: false,
    explanation: "STFU - Yield farming involves multiple risks including impermanent loss, smart contract risk, and token devaluation."
  },
  {
    id: 77,
    statement: "All governance tokens have the same voting power structure.",
    correctAnswer: false,
    explanation: "STFU - Governance tokens have different voting mechanisms, some are 1-token-1-vote, others have different structures."
  },
  {
    id: 78,
    statement: "Cross-chain bridges are completely immune to hacks.",
    correctAnswer: false,
    explanation: "STFU - Bridge protocols have been frequent targets for hacks, with billions stolen from various bridge exploits."
  },
  {
    id: 79,
    statement: "All oracles provide data in real-time without any delay.",
    correctAnswer: false,
    explanation: "STFU - Oracles may have delays and can be vulnerable to manipulation or provide outdated information."
  },
  {
    id: 80,
    statement: "Cryptocurrency mining has no environmental impact.",
    correctAnswer: false,
    explanation: "STFU - Proof of Work mining, especially Bitcoin, consumes significant energy and has environmental considerations."
  },
  {
    id: 81,
    statement: "Zero-knowledge proofs allow verification without revealing data.",
    correctAnswer: true,
    explanation: "Yes - ZK proofs enable one party to prove knowledge of information without revealing the information itself."
  },
  {
    id: 82,
    statement: "Rollups batch multiple transactions into single blockchain transactions.",
    correctAnswer: true,
    explanation: "Yes - Rollups increase scalability by bundling many transactions together and posting them to the main chain."
  },
  {
    id: 83,
    statement: "Composability allows DeFi protocols to interact with each other.",
    correctAnswer: true,
    explanation: "Yes - DeFi composability enables protocols to build on top of each other like 'money legos'."
  },
  {
    id: 84,
    statement: "Chainlink is a popular oracle network.",
    correctAnswer: true,
    explanation: "Yes - Chainlink is one of the most widely used decentralized oracle networks providing external data to blockchains."
  },
  {
    id: 85,
    statement: "Multisig wallets require multiple signatures for transactions.",
    correctAnswer: true,
    explanation: "Yes - Multisig wallets require multiple private keys to sign transactions, providing enhanced security."
  },
  {
    id: 86,
    statement: "Ethereum Name Service (ENS) provides human-readable addresses.",
    correctAnswer: true,
    explanation: "Yes - ENS maps human-readable names to Ethereum addresses, similar to DNS for websites."
  },
  {
    id: 87,
    statement: "Atomic swaps enable direct cryptocurrency exchanges without intermediaries.",
    correctAnswer: true,
    explanation: "Yes - Atomic swaps allow peer-to-peer trading of cryptocurrencies across different blockchains without trusted third parties."
  },
  {
    id: 88,
    statement: "Validator nodes help secure Proof of Stake networks.",
    correctAnswer: true,
    explanation: "Yes - Validators in PoS networks propose and validate blocks to secure the network and earn rewards."
  },
  {
    id: 89,
    statement: "Front-running involves executing trades ahead of others for profit.",
    correctAnswer: true,
    explanation: "Yes - Front-running is when someone uses advance knowledge of pending transactions to profit from price movements."
  },
  {
    id: 90,
    statement: "Sandwich attacks exploit transaction ordering for profit.",
    correctAnswer: true,
    explanation: "Yes - Sandwich attacks involve placing transactions before and after a target transaction to profit from price impact."
  },
  {
    id: 91,
    statement: "All DeFi protocols are completely decentralized from day one.",
    correctAnswer: false,
    explanation: "STFU - Many DeFi protocols start with centralized elements and gradually decentralize over time."
  },
  {
    id: 92,
    statement: "Wrapped Bitcoin (WBTC) is exactly the same as native Bitcoin.",
    correctAnswer: false,
    explanation: "STFU - WBTC is an ERC-20 token backed by Bitcoin, but it has different properties and trust assumptions than native BTC."
  },
  {
    id: 93,
    statement: "All blockchain networks use the same programming language.",
    correctAnswer: false,
    explanation: "STFU - Different blockchains support different programming languages (Solidity, Rust, Go, etc.)."
  },
  {
    id: 94,
    statement: "Liquidity providing always generates positive returns.",
    correctAnswer: false,
    explanation: "STFU - Liquidity providers can experience impermanent loss and other risks that may result in negative returns."
  },
  {
    id: 95,
    statement: "All DEX aggregators find the exact same optimal routes.",
    correctAnswer: false,
    explanation: "STFU - Different aggregators use different algorithms and data sources, leading to varying results."
  },
  {
    id: 96,
    statement: "Smart contract audits guarantee complete security.",
    correctAnswer: false,
    explanation: "STFU - Audits reduce risk but cannot guarantee complete security. Even audited contracts can have vulnerabilities."
  },
  {
    id: 97,
    statement: "All Layer 1 blockchains have the same security model.",
    correctAnswer: false,
    explanation: "STFU - Layer 1 blockchains use different consensus mechanisms and have varying security assumptions."
  },
  {
    id: 98,
    statement: "Token burns always increase the remaining tokens' value.",
    correctAnswer: false,
    explanation: "STFU - While burns reduce supply, token value depends on many factors including demand and utility."
  },
  {
    id: 99,
    statement: "All cryptocurrency wallets support all cryptocurrencies.",
    correctAnswer: false,
    explanation: "STFU - Wallets support different cryptocurrencies and blockchain networks based on their design and implementation."
  },
  {
    id: 100,
    statement: "Blockchain data is completely private and cannot be analyzed.",
    correctAnswer: false,
    explanation: "STFU - Most blockchain data is public and can be analyzed using various on-chain analytics tools."
  },
  {
    id: 101,
    statement: "Ethereum's London Hard Fork introduced EIP-1559.",
    correctAnswer: true,
    explanation: "Yes - The London Hard Fork in August 2021 introduced EIP-1559, changing Ethereum's fee structure."
  },
  {
    id: 102,
    statement: "Lightning Network is Bitcoin's Layer 2 scaling solution.",
    correctAnswer: true,
    explanation: "Yes - Lightning Network enables fast, cheap Bitcoin transactions through payment channels."
  },
  {
    id: 103,
    statement: "Polygon is a popular Ethereum scaling solution.",
    correctAnswer: true,
    explanation: "Yes - Polygon provides scaling solutions for Ethereum including sidechains and Layer 2 protocols."
  },
  {
    id: 104,
    statement: "Solana uses Proof of History alongside Proof of Stake.",
    correctAnswer: true,
    explanation: "Yes - Solana combines Proof of History with Proof of Stake to achieve high throughput."
  },
  {
    id: 105,
    statement: "Avalanche uses a unique consensus mechanism called Avalanche consensus.",
    correctAnswer: true,
    explanation: "Yes - Avalanche uses a novel consensus protocol that differs from traditional PoW and PoS mechanisms."
  },
  {
    id: 106,
    statement: "Cosmos enables interoperability between different blockchains.",
    correctAnswer: true,
    explanation: "Yes - Cosmos is designed as an 'Internet of Blockchains' to enable blockchain interoperability."
  },
  {
    id: 107,
    statement: "Polkadot uses parachains for scalability.",
    correctAnswer: true,
    explanation: "Yes - Polkadot's architecture uses parachains (parallel chains) connected to a central relay chain."
  },
  {
    id: 108,
    statement: "Cardano was designed with a research-first approach.",
    correctAnswer: true,
    explanation: "Yes - Cardano development follows academic research and peer-reviewed methodologies."
  },
  {
    id: 109,
    statement: "Binance Smart Chain is compatible with Ethereum Virtual Machine.",
    correctAnswer: true,
    explanation: "Yes - BSC (now BNB Chain) is EVM-compatible, allowing Ethereum dApps to run on it."
  },
  {
    id: 110,
    statement: "Fantom uses a Directed Acyclic Graph (DAG) structure.",
    correctAnswer: true,
    explanation: "Yes - Fantom uses a DAG-based consensus mechanism called Lachesis for high throughput."
  },
  {
    id: 111,
    statement: "All blockchain transactions require the same amount of energy.",
    correctAnswer: false,
    explanation: "STFU - Energy consumption varies drastically between consensus mechanisms and blockchain architectures."
  },
  {
    id: 112,
    statement: "Proof of Stake networks never face slashing penalties.",
    correctAnswer: false,
    explanation: "STFU - PoS networks implement slashing to penalize malicious or faulty validator behavior."
  },
  {
    id: 113,
    statement: "All altcoins are direct copies of Bitcoin's code.",
    correctAnswer: false,
    explanation: "STFU - While some are Bitcoin forks, many altcoins use completely different architectures and codebases."
  },
  {
    id: 114,
    statement: "Sharding always improves blockchain security.",
    correctAnswer: false,
    explanation: "STFU - Sharding can introduce new security considerations and trade-offs, though it improves scalability."
  },
  {
    id: 115,
    statement: "All consensus mechanisms have the same finality guarantees.",
    correctAnswer: false,
    explanation: "STFU - Different consensus mechanisms provide varying levels and speeds of transaction finality."
  },
  {
    id: 116,
    statement: "Private blockchains are always more secure than public ones.",
    correctAnswer: false,
    explanation: "STFU - Security depends on many factors; public blockchains often have stronger security through decentralization."
  },
  {
    id: 117,
    statement: "All Layer 2 solutions inherit the same security as their base layer.",
    correctAnswer: false,
    explanation: "STFU - Different L2 solutions have varying security models and may not inherit full base layer security."
  },
  {
    id: 118,
    statement: "Blockchain forks always split the network permanently.",
    correctAnswer: false,
    explanation: "STFU - Many forks are temporary and resolve quickly, while others are planned upgrades that don't split the network."
  },
  {
    id: 119,
    statement: "All cryptocurrency exchanges use the same security practices.",
    correctAnswer: false,
    explanation: "STFU - Exchange security practices vary widely, from basic to highly sophisticated security measures."
  },
  {
    id: 120,
    statement: "Blockchain technology can only be used for cryptocurrencies.",
    correctAnswer: false,
    explanation: "STFU - Blockchain has applications beyond crypto including supply chain, voting, identity, and data verification."
  }
];