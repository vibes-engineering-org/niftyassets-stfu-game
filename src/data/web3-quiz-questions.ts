export interface Web3QuizQuestion {
  id: number;
  statement: string;
  correctAnswer: boolean; // true for "yes", false for "stfu"
  difficulty: number; // 1-5 difficulty rating
  explanation: string;
}

const rawQuestions: Array<{statement: string, answer: string, difficulty: number}> = [
  {statement: "The token $stfu was deployed based on a tweet from Jesse Pollak", answer: "yes", difficulty: 4},
  {statement: "CryptoPunks launched in 2020.", answer: "stfu", difficulty: 4},
  {statement: "Vitalik donated more than $1B worth of SHIBA tokens to a COVID relief fund.", answer: "yes", difficulty: 2},
  {statement: "DAO stands for \"Decentralized Autonomous Organization.\"", answer: "yes", difficulty: 3},
  {statement: "Ethereum switched from proof-of-work to proof-of-stake in 2022.", answer: "yes", difficulty: 4},
  {statement: "Ethereum staking rewards are always fixed at 6%.", answer: "stfu", difficulty: 4},
  {statement: "Base's hole userbase is indians", answer: "stfu", difficulty: 4},
  {statement: "Ethereum's ICO in 2014 raised around $18M.", answer: "yes", difficulty: 4},
  {statement: "Bitcoin's max supply is 42 million coins.", answer: "stfu", difficulty: 5},
  {statement: "The highest Ethereum gas fee ever was $4,000.", answer: "stfu", difficulty: 4},
  {statement: "Vitalik co-founded Ethereum when he was 19.", answer: "yes", difficulty: 2},
  {statement: "El Salvador made Ethereum legal tender.", answer: "stfu", difficulty: 4},
  {statement: "Some people lost NFTs by signing malicious \"setApprovalForAll\" transactions.", answer: "yes", difficulty: 2},
  {statement: "Warpcast only works on Solana.", answer: "stfu", difficulty: 4},
  {statement: "Vitalik once suggested Ethereum block sizes should target \"sufficient decentralization.\"", answer: "yes", difficulty: 2},
  {statement: "Vitalik once received 50% of all SHIBA tokens directly from its creators.", answer: "yes", difficulty: 2},
  {statement: "The Merge increased Ethereum's block time to 24 seconds.", answer: "stfu", difficulty: 5},
  {statement: "Vitalik once showed up to meet Vladimir Putin wearing a Dogecoin T-shirt.", answer: "yes", difficulty: 2},
  {statement: "Ethereum's proof-of-stake system allows slashing only above 64 ETH.", answer: "stfu", difficulty: 5},
  {statement: "Gnosis Safe requires no signatures to approve a transaction.", answer: "stfu", difficulty: 4},
  {statement: "Vitalik donated only $100M worth of SHIBA tokens to a COVID relief fund.", answer: "stfu", difficulty: 2},
  {statement: "Farcaster usernames can be registered as \"farcaster.eth\" ENS names.", answer: "yes", difficulty: 3},
  {statement: "Farcaster is owned by Meta.", answer: "stfu", difficulty: 3},
  {statement: "Yield farming is a practice of providing liquidity for token rewards.", answer: "yes", difficulty: 4},
  {statement: "The Merge was also known as Ethereum 2.0.", answer: "yes", difficulty: 3},
  {statement: "Coinbase launched Base in 2023 as its L2 on Ethereum.", answer: "yes", difficulty: 3},
  {statement: "Farcaster is a decentralized social protocol that runs on Ethereum.", answer: "yes", difficulty: 3},
  {statement: "Ethereum considered proof-of-authority before proof-of-stake.", answer: "stfu", difficulty: 4},
  {statement: "DeFi summer happened in 2017.", answer: "stfu", difficulty: 4},
  {statement: "Uniswap pioneered automated market makers in DeFi.", answer: "yes", difficulty: 4},
  {statement: "ENS domains are regulated under ICANN alongside traditional DNS domains.", answer: "stfu", difficulty: 2},
  {statement: "NFTs are stored as tokens on Ethereum following ERC-721.", answer: "yes", difficulty: 2},
  {statement: "Mt. Gox was once the biggest Bitcoin exchange before collapsing in 2014.", answer: "yes", difficulty: 4},
  {statement: "DAOs often vote with governance tokens.", answer: "yes", difficulty: 3},
  {statement: "Ethereum resets validator rewards every four years.", answer: "stfu", difficulty: 4},
  {statement: "OpenSea launched in 2017 as one of the first NFT marketplaces.", answer: "yes", difficulty: 2},
  {statement: "Running your own validator requires 64 ETH.", answer: "stfu", difficulty: 5},
  {statement: "ConstitutionDAO actually won the Constitution auction but later sold it back.", answer: "stfu", difficulty: 3},
  {statement: "Running your own validator requires exactly 32 ETH.", answer: "yes", difficulty: 4},
  {statement: "Staking rewards on Ethereum vary depending on total ETH staked.", answer: "yes", difficulty: 4},
  {statement: "Satoshi Nakamoto was confirmed as Vitalik Buterin.", answer: "stfu", difficulty: 2},
  {statement: "Coinbase tested an AI chatbot in 2022 that replaced human wallet recovery support.", answer: "stfu", difficulty: 4},
  {statement: "Circle issues USDC, one of the most widely used stablecoins.", answer: "yes", difficulty: 4},
  {statement: "The Bitcoin whitepaper was released in 2008.", answer: "yes", difficulty: 4},
  {statement: "Polygon is a Layer 1 blockchain.", answer: "stfu", difficulty: 4},
  {statement: "Jack Dorsey's first tweet sold as an NFT for $2.9M.", answer: "yes", difficulty: 2},
  {statement: "Cold wallets lose functionality if not connected to the internet once a month.", answer: "stfu", difficulty: 4},
  {statement: "MetaMask added a secret reward system in 2021 that gave tokens to anyone who clicked the fox 100 times.", answer: "stfu", difficulty: 4},
  {statement: "Jesse Pollak previously worked on Coinbase Wallet.", answer: "yes", difficulty: 4},
  {statement: "zk-rollups use zero-knowledge proofs for scalability.", answer: "yes", difficulty: 4},
  {statement: "The first block on Bitcoin is called the Genesis block.", answer: "yes", difficulty: 4},
  {statement: "Warpcast is the most popular client for Farcaster.", answer: "yes", difficulty: 3},
  {statement: "Twitter replaced its bird logo with Doge in 2022.", answer: "stfu", difficulty: 4},
  {statement: "Gwei is the smallest unit commonly used for Ethereum gas fees.", answer: "yes", difficulty: 4},
  {statement: "Mt. Gox collapsed in 2017.", answer: "stfu", difficulty: 4},
  {statement: "The DAO hack in 2016 split Ethereum into ETH and ETC.", answer: "yes", difficulty: 3},
  {statement: "Gas wars have caused some NFT mints to cost more in fees than the NFTs themselves.", answer: "yes", difficulty: 2},
  {statement: "Gas wars are impossible on Ethereum.", answer: "stfu", difficulty: 4},
  {statement: "Vitalik ran a TikTok account with Ethereum explainers in 2020.", answer: "stfu", difficulty: 2},
  {statement: "Coinbase went public on NASDAQ in 2021.", answer: "yes", difficulty: 4},
  {statement: "Vitalik has published essays about AI, governance, and even soulbound tokens.", answer: "yes", difficulty: 2},
  {statement: "Coinbase launched Base in 2021.", answer: "stfu", difficulty: 3},
  {statement: "Coinbase went public in 2019.", answer: "stfu", difficulty: 4},
  {statement: "Bitcoin's max supply is 21 million coins.", answer: "yes", difficulty: 4},
  {statement: "The Merge cut Ethereum's energy use by more than 99%.", answer: "yes", difficulty: 3},
  {statement: "Jesse Pollak is the lead behind Base.", answer: "yes", difficulty: 3},
  {statement: "Layer 2 networks use Bitcoin mining for security.", answer: "stfu", difficulty: 4},
  {statement: "Twitter once replaced its bird logo with Doge.", answer: "yes", difficulty: 4},
  {statement: "Farcaster accounts are tied to Ethereum wallets.", answer: "yes", difficulty: 3},
  {statement: "Base doesn't have its own token; it uses ETH for gas.", answer: "yes", difficulty: 3},
  {statement: "Ethereum uses SHA-256 as its hashing algorithm.", answer: "stfu", difficulty: 5},
  {statement: "ENS names like \"sex.eth\" and \"god.eth\" have sold for six figures.", answer: "yes", difficulty: 2},
  {statement: "Jesse Pollak released a rap album to promote Base.", answer: "stfu", difficulty: 3},
  {statement: "Binance was founded in 2013.", answer: "stfu", difficulty: 5},
  {statement: "The Genesis block was mined on Ethereum, not Bitcoin.", answer: "stfu", difficulty: 4},
  {statement: "NFTs can represent things beyond art, like music or tickets.", answer: "yes", difficulty: 2},
  {statement: "Polygon is a sidechain and scaling solution for Ethereum.", answer: "yes", difficulty: 4},
  {statement: "NFTs can only represent digital art, nothing else.", answer: "stfu", difficulty: 2},
  {statement: "Satoshi Nakamoto disappeared from public communication around 2010.", answer: "yes", difficulty: 4},
  {statement: "NFTs are automatically mirrored to IPFS when minted.", answer: "stfu", difficulty: 2},
  {statement: "The Merge cut Ethereum's energy usage by about 45%.", answer: "stfu", difficulty: 5},
  {statement: "Vitalik co-founded Ethereum at age 25.", answer: "stfu", difficulty: 2},
  {statement: "Coinbase replaced its support team with a model named Jeff.", answer: "stfu", difficulty: 4},
  {statement: "SHIBA tokens were created by Vitalik.", answer: "stfu", difficulty: 2},
  {statement: "Warpcast integrates tipping with stablecoins.", answer: "yes", difficulty: 4},
  {statement: "Some countries have adopted Bitcoin as legal tender (e.g., El Salvador).", answer: "yes", difficulty: 4},
  {statement: "Ethereum smart contracts are written mainly in Solidity.", answer: "yes", difficulty: 4},
  {statement: "OpenSea was founded in 2015.", answer: "stfu", difficulty: 5},
  {statement: "Layer 2 adoption grew significantly in 2023.", answer: "yes", difficulty: 4},
  {statement: "Warpcast was acquired by TikTok in 2024.", answer: "stfu", difficulty: 4},
  {statement: "Ethereum block times average about 12 seconds (pre-Merge).", answer: "yes", difficulty: 3},
  {statement: "Layer 2 adoption declined in 2023.", answer: "stfu", difficulty: 4},
  {statement: "Ethereum's ICO happened in 2013.", answer: "stfu", difficulty: 5},
  {statement: "Ethereum's ICO raised about $28M in 2015.", answer: "stfu", difficulty: 5},
  {statement: "DAOs must be incorporated as legal entities in Switzerland.", answer: "stfu", difficulty: 3},
  {statement: "Coinbase's Base network uses optimistic rollup technology.", answer: "yes", difficulty: 3},
  {statement: "Binance was founded by Changpeng Zhao in 2017.", answer: "yes", difficulty: 4},
  {statement: "Bitcoin whitepaper was released in 2011.", answer: "stfu", difficulty: 4},
  {statement: "A DAO raised over $40M trying to buy a copy of the U.S. Constitution but got outbid.", answer: "yes", difficulty: 3},
  {statement: "Many stablecoins are backed by reserves like cash or U.S. Treasuries.", answer: "yes", difficulty: 4},
  {statement: "Layer 2 rollups like Optimism and Arbitrum scale Ethereum by batching transactions.", answer: "yes", difficulty: 4},
  {statement: "Someone actually paid over $1M for a pixelated picture of a rock.", answer: "yes", difficulty: 4},
  {statement: "CryptoPunks were one of the first popular NFT collections.", answer: "yes", difficulty: 2},
  {statement: "Yield farming began in 2015.", answer: "stfu", difficulty: 5},
  {statement: "Uniswap was built on Bitcoin originally.", answer: "stfu", difficulty: 4},
  {statement: "DAO hack was in 2018.", answer: "stfu", difficulty: 3},
  {statement: "The ENS name \"sex.eth\" sold for only $60,000.", answer: "stfu", difficulty: 5},
  {statement: "Ethereum gas fees were eliminated by EIP-1559.", answer: "stfu", difficulty: 4},
  {statement: "Vitalik has never spoken publicly about DAOs.", answer: "stfu", difficulty: 3},
  {statement: "Base requires its own $BASE token to pay for gas.", answer: "stfu", difficulty: 3},
  {statement: "The London hard fork introduced EIP-1559 to burn gas fees.", answer: "yes", difficulty: 4},
  {statement: "Someone paid over $10M for a pixelated picture of a rock.", answer: "stfu", difficulty: 4},
  {statement: "All NFTs sold in the EU after 2021 were classified as securities under MiCA.", answer: "stfu", difficulty: 2},
  {statement: "zk-rollups were invented in 2021.", answer: "stfu", difficulty: 4},
  {statement: "Coinbase wallets support both Ethereum and Base.", answer: "yes", difficulty: 3},
  {statement: "Gwei is equal to one trillion ETH.", answer: "stfu", difficulty: 4},
  {statement: "DeFi summer happened in 2020.", answer: "yes", difficulty: 4},
  {statement: "Circle issues USDT.", answer: "stfu", difficulty: 4}
];

// Required first question
const REQUIRED_FIRST_QUESTION: Web3QuizQuestion = {
  id: 0,
  statement: "Base's hole userbase is indians",
  correctAnswer: false,
  difficulty: 4,
  explanation: "STFU - This is an incorrect and inappropriate generalization. Base has a diverse global userbase."
};

// Convert raw questions to Web3QuizQuestion format
const convertedQuestions: Web3QuizQuestion[] = rawQuestions.map((q, index) => ({
  id: index + 1,
  statement: q.statement,
  correctAnswer: q.answer === "yes",
  difficulty: q.difficulty,
  explanation: q.answer === "yes" 
    ? `Yes - ${q.statement}` 
    : `STFU - ${q.statement}`
}));

// Function to shuffle an array
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Function to create a balanced difficulty distribution for a session
function createBalancedSession(questions: Web3QuizQuestion[], sessionSize: number = 12): Web3QuizQuestion[] {
  // Group questions by difficulty
  const byDifficulty: { [key: number]: Web3QuizQuestion[] } = {};
  questions.forEach(q => {
    if (!byDifficulty[q.difficulty]) {
      byDifficulty[q.difficulty] = [];
    }
    byDifficulty[q.difficulty].push(q);
  });

  // Shuffle each difficulty group
  Object.keys(byDifficulty).forEach(diff => {
    byDifficulty[parseInt(diff)] = shuffleArray(byDifficulty[parseInt(diff)]);
  });

  // Create balanced session (roughly equal distribution across difficulties)
  const session: Web3QuizQuestion[] = [];
  const difficulties = [1, 2, 3, 4, 5];
  
  for (let i = 0; i < sessionSize; i++) {
    const targetDifficulty = difficulties[i % difficulties.length];
    const availableQuestions = byDifficulty[targetDifficulty]?.filter(q => !session.includes(q));
    
    if (availableQuestions && availableQuestions.length > 0) {
      session.push(availableQuestions[0]);
    } else {
      // Fallback to any available question
      const allAvailable = questions.filter(q => !session.includes(q));
      if (allAvailable.length > 0) {
        session.push(allAvailable[Math.floor(Math.random() * allAvailable.length)]);
      }
    }
  }

  return shuffleArray(session);
}

// Function to generate randomized game questions
export function generateRandomizedQuestions(): Web3QuizQuestion[] {
  // Shuffle all questions except the required first one
  const shuffledQuestions = shuffleArray(convertedQuestions);
  
  // Create sessions with balanced difficulty
  const sessions: Web3QuizQuestion[][] = [];
  const questionsPerSession = 12;
  const totalSessions = 10; // 120 questions / 12 per session
  
  let usedQuestions: Web3QuizQuestion[] = [];
  
  for (let sessionIndex = 0; sessionIndex < totalSessions; sessionIndex++) {
    const availableQuestions = shuffledQuestions.filter(q => !usedQuestions.includes(q));
    const session = createBalancedSession(availableQuestions, questionsPerSession);
    sessions.push(session);
    usedQuestions = [...usedQuestions, ...session];
  }

  // Flatten sessions and add required first question at the beginning
  const allGameQuestions = sessions.flat();
  return [REQUIRED_FIRST_QUESTION, ...allGameQuestions.slice(0, 119)]; // 120 total with first question
}

// Export the main questions array (this will be called when the game starts)
export const web3QuizQuestions: Web3QuizQuestion[] = generateRandomizedQuestions();