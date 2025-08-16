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
  }
];