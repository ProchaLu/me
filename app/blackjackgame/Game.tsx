'use client';

import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

// Types

type Suit = 'hearts' | 'diamonds' | 'clubs' | 'spades';
type Rank =
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | 'J'
  | 'Q'
  | 'K'
  | 'A';
type GameState = 'betting' | 'player-turn' | 'dealer-turn' | 'game-over';

type Card = {
  suit: Suit;
  rank: Rank;
  id: string; // for React key
};

type HandResult = 'win' | 'lose' | 'push' | 'blackjack' | undefined;

type Hand = {
  id: string;
  cards: Card[];
  bet: number;
  isActive: boolean;
  isComplete: boolean;
  isSplit: boolean;
  canSplit: boolean;
  canDoubleDown: boolean;
  result?: HandResult;
};

type GameProps = {
  balance: number;
  setBalance: (balance: number) => void;
};

// Constants
const SUITS: Suit[] = ['hearts', 'diamonds', 'clubs', 'spades'];
const RANKS: Rank[] = [
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
  'A',
];
const BET_AMOUNTS = [5, 10, 25, 50, 100];
const MAX_HANDS = 2; // Only allow one split

// Utility functions
function createDeck(numDecks: number): Card[] {
  const deck: Card[] = [];
  for (let d = 0; d < numDecks; d++) {
    for (const suit of SUITS) {
      for (const rank of RANKS) {
        deck.push({ suit, rank, id: uuidv4() });
      }
    }
  }
  // Shuffle
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

function calculateScore(cards: Card[]): number {
  let score = 0;
  let aces = 0;
  for (const card of cards) {
    if (card.rank === 'A') aces++;
    else if (['K', 'Q', 'J'].includes(card.rank)) score += 10;
    else score += parseInt(card.rank);
  }
  for (let i = 0; i < aces; i++) {
    if (score + 11 <= 21 - (aces - 1 - i)) score += 11;
    else score += 1;
  }
  return score;
}

function isBlackjack(cards: Card[]): boolean {
  return cards.length === 2 && calculateScore(cards) === 21;
}

// Card component
function PlayingCard({
  card,
  hidden = false,
}: {
  card: Card;
  hidden?: boolean;
}) {
  if (hidden) {
    return (
      <div className="w-16 h-24 bg-blue-600 rounded-lg flex items-center justify-center border-2 border-black">
        <div className="text-white text-2xl">🂠</div>
      </div>
    );
  }
  function getSUITSymbol(suit: Suit) {
    switch (suit) {
      case 'hearts':
        return '♥';
      case 'diamonds':
        return '♦';
      case 'clubs':
        return '♣';
      case 'spades':
        return '♠';
      default:
        return '';
    }
  }
  const isRed = card.suit === 'hearts' || card.suit === 'diamonds';
  return (
    <div className="w-16 h-24 bg-white rounded-lg flex flex-col items-center justify-center border-2 border-black p-1">
      <div
        className={`text-lg font-bold ${isRed ? 'text-red-600' : 'text-black'}`}
      >
        {card.rank}
      </div>
      <div className={`text-2xl ${isRed ? 'text-red-600' : 'text-black'}`}>
        {getSUITSymbol(card.suit)}
      </div>
    </div>
  );
}

// Hand component
function HandView({
  hand,
  isDealer = false,
  hideFirstCard = false,
  onHit,
  onStand,
  onDoubleDown,
  onSplit,
}: {
  hand: Hand;
  isDealer?: boolean;
  hideFirstCard?: boolean;
  onHit?: () => void;
  onStand?: () => void;
  onDoubleDown?: () => void;
  onSplit?: () => void;
}) {
  const score =
    isDealer && hideFirstCard
      ? calculateScore(hand.cards.slice(1))
      : calculateScore(hand.cards);
  const isWinning = hand.result === 'win' || hand.result === 'blackjack';
  const isLosing = hand.result === 'lose';
  const isPush = hand.result === 'push';
  function getResultText() {
    switch (hand.result) {
      case 'win':
        return ` Won $${hand.bet}`;
      case 'lose':
        return ` Lost $${hand.bet}`;
      case 'push':
        return 'Push';
      case 'blackjack':
        return ` Blackjack! Won $${Math.floor(hand.bet * 1.5)}`;
      default:
        return null;
    }
  }
  return (
    <div
      className={`relative p-3 rounded-lg min-w-[220px] ${
        hand.isActive
          ? 'bg-blue-50 border-2 border-blue-500'
          : hand.isComplete
            ? isWinning
              ? 'bg-green-50 border-2 border-green-500'
              : isLosing
                ? 'bg-red-50 border-2 border-red-500'
                : isPush
                  ? 'bg-gray-50 border-2 border-gray-500'
                  : 'bg-gray-50'
            : 'bg-gray-50'
      }`}
    >
      <div className="flex items-center justify-between mb-1">
        <span className="font-bold">
          {isDealer ? 'Dealer' : 'Player'}: {score}
        </span>
        {!isDealer && <span className="font-bold"> Bet: ${hand.bet}</span>}
        {hand.isComplete && hand.result && (
          <span
            className={`font-bold ${isWinning ? 'text-green-600' : isLosing ? 'text-red-600' : 'text-gray-600'}`}
          >
            {getResultText()}
          </span>
        )}
      </div>
      <div className="flex gap-1 mb-2">
        {hand.cards.map((card, idx) => (
          <PlayingCard
            key={card.id}
            card={card}
            hidden={isDealer && hideFirstCard && idx === 0}
          />
        ))}
      </div>
      {!isDealer && hand.isActive && !hand.isComplete && (
        <div className="flex gap-2">
          <button
            onClick={onHit}
            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Hit
          </button>
          <button
            onClick={onStand}
            className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Stand
          </button>
          {hand.canDoubleDown && onDoubleDown && (
            <button
              onClick={onDoubleDown}
              className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600"
            >
              Double Down
            </button>
          )}
          {hand.canSplit && onSplit && (
            <button
              onClick={onSplit}
              className="px-3 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            >
              Split
            </button>
          )}
        </div>
      )}
    </div>
  );
}

// Main Game component
export default function Game({ balance, setBalance }: GameProps) {
  const [gameState, setGameState] = useState<GameState>('betting');
  const [deck, setDeck] = useState<Card[]>([]);
  const [playerHands, setPlayerHands] = useState<Hand[]>([]);
  const [dealerHand, setDealerHand] = useState<Hand>({
    id: uuidv4(),
    cards: [],
    bet: 0,
    isActive: false,
    isComplete: false,
    isSplit: false,
    canSplit: false,
    canDoubleDown: false,
  });
  const [currentHandIndex, setCurrentHandIndex] = useState(0);
  const [numDecks, setNumDecks] = useState(6);
  const [message, setMessage] = useState('');

  // Start new game
  function startNewGame() {
    setDeck(createDeck(numDecks));
    setPlayerHands([]);
    setDealerHand({
      id: uuidv4(),
      cards: [],
      bet: 0,
      isActive: false,
      isComplete: false,
      isSplit: false,
      canSplit: false,
      canDoubleDown: false,
    });
    setCurrentHandIndex(0);
    setMessage('');
    setGameState('betting');
  }

  useEffect(() => {
    startNewGame();
    // eslint-disable-next-line
  }, []);

  // Add a hand (bet)
  function addHand(bet: number) {
    if (playerHands.length >= MAX_HANDS) return;
    if (bet > balance) return;
    setBalance(balance - bet);
    setPlayerHands((prev) => [
      ...prev,
      {
        id: uuidv4(),
        cards: [],
        bet,
        isActive: false,
        isComplete: false,
        isSplit: false,
        canSplit: false,
        canDoubleDown: false,
      },
    ]);
  }

  // Deal initial cards
  function dealInitialCards() {
    let newDeck = [...deck];
    const dealerCard1 = newDeck.pop();
    const dealerCard2 = newDeck.pop();
    if (!dealerCard1 || !dealerCard2) return;
    const newDealerHand: Hand = {
      id: uuidv4(),
      cards: [dealerCard1, dealerCard2],
      bet: 0,
      isActive: false,
      isComplete: false,
      isSplit: false,
      canSplit: false,
      canDoubleDown: false,
      result: undefined,
    };
    // Only create hands if both cards are present, using reduce
    const newPlayerHands: Hand[] = playerHands.reduce((acc: Hand[], hand) => {
      const card1 = newDeck.pop();
      const card2 = newDeck.pop();
      if (!card1 || !card2) return acc;
      const cards = [card1, card2];
      acc.push({
        id: typeof hand.id === 'string' && hand.id ? hand.id : String(uuidv4()),
        cards,
        isActive: false,
        isComplete: false,
        isSplit: typeof hand.isSplit === 'boolean' ? hand.isSplit : false,
        canSplit: !!(
          Array.isArray(cards) &&
          cards.length >= 2 &&
          cards[0] &&
          cards[1] &&
          cards[0].rank === cards[1].rank
        ),
        canDoubleDown: cards.length === 2,
        result: undefined,
        bet: typeof hand.bet === 'number' ? hand.bet : 0,
      });
      return acc;
    }, []);
    setDeck(newDeck);
    setDealerHand(newDealerHand);
    setPlayerHands(
      newPlayerHands.map((hand) => {
        // Guarantee all required fields at the start
        const id =
          typeof hand.id === 'string' && hand.id ? hand.id : String(uuidv4());
        const cards = Array.isArray(hand.cards) ? hand.cards : [];
        const bet = typeof hand.bet === 'number' ? hand.bet : 0;
        const isActive =
          typeof hand.isActive === 'boolean' ? hand.isActive : false;
        const isSplit =
          typeof hand.isSplit === 'boolean' ? hand.isSplit : false;
        const canSplit =
          typeof hand.canSplit === 'boolean' ? hand.canSplit : false;
        const canDoubleDown =
          typeof hand.canDoubleDown === 'boolean' ? hand.canDoubleDown : false;
        if (isBlackjack(cards)) {
          return {
            id,
            cards,
            bet,
            isActive,
            isComplete: true,
            isSplit,
            canSplit,
            canDoubleDown,
            result: 'push',
          };
        }
        return {
          id,
          cards,
          bet,
          isActive,
          isComplete: true,
          isSplit,
          canSplit,
          canDoubleDown,
          result: 'lose',
        };
      }) as Hand[],
    );
    // Check for dealer blackjack
    if (isBlackjack(newDealerHand.cards)) {
      setDealerHand({ ...newDealerHand, isComplete: true });
      setPlayerHands(
        newPlayerHands.map((hand) => {
          // Guarantee all required fields at the start
          const id =
            typeof hand.id === 'string' && hand.id ? hand.id : String(uuidv4());
          const cards = Array.isArray(hand.cards) ? hand.cards : [];
          const bet = typeof hand.bet === 'number' ? hand.bet : 0;
          const isActive =
            typeof hand.isActive === 'boolean' ? hand.isActive : false;
          const isSplit =
            typeof hand.isSplit === 'boolean' ? hand.isSplit : false;
          const canSplit =
            typeof hand.canSplit === 'boolean' ? hand.canSplit : false;
          const canDoubleDown =
            typeof hand.canDoubleDown === 'boolean'
              ? hand.canDoubleDown
              : false;
          if (isBlackjack(cards)) {
            return {
              id,
              cards,
              bet,
              isActive,
              isComplete: true,
              isSplit,
              canSplit,
              canDoubleDown,
              result: 'push',
            };
          }
          return {
            id,
            cards,
            bet,
            isActive,
            isComplete: true,
            isSplit,
            canSplit,
            canDoubleDown,
            result: 'lose',
          };
        }) as Hand[],
      );
      setGameState('game-over');
      return;
    }
    // Check for player blackjacks
    let allBlackjack = true;
    const resolvedHands: Hand[] = newPlayerHands.map((hand) => {
      // Guarantee all required fields at the start
      const id =
        typeof hand.id === 'string' && hand.id ? hand.id : String(uuidv4());
      const cards = Array.isArray(hand.cards) ? hand.cards : [];
      const bet = typeof hand.bet === 'number' ? hand.bet : 0;
      const isActive =
        typeof hand.isActive === 'boolean' ? hand.isActive : false;
      const isComplete =
        typeof hand.isComplete === 'boolean' ? hand.isComplete : false;
      const isSplit = typeof hand.isSplit === 'boolean' ? hand.isSplit : false;
      const canSplit =
        typeof hand.canSplit === 'boolean' ? hand.canSplit : false;
      const canDoubleDown =
        typeof hand.canDoubleDown === 'boolean' ? hand.canDoubleDown : false;
      const result =
        typeof hand.result === 'string'
          ? (hand.result as HandResult)
          : undefined;
      if (isBlackjack(cards)) {
        return {
          id,
          cards,
          bet,
          isActive,
          isComplete: true,
          isSplit,
          canSplit,
          canDoubleDown,
          result: 'blackjack',
        };
      }
      allBlackjack = false;
      return {
        id,
        cards,
        bet,
        isActive,
        isComplete,
        isSplit,
        canSplit,
        canDoubleDown,
        result,
      };
    }) as Hand[];
    setPlayerHands(resolvedHands);
    if (allBlackjack) {
      setGameState('game-over');
      return;
    }
    // Activate first non-blackjack hand
    const firstActive = resolvedHands.findIndex((h) => !h.isComplete);
    if (firstActive !== -1) {
      setPlayerHands((hands) =>
        hands.map((h, i) => ({ ...h, isActive: i === firstActive })),
      );
      setCurrentHandIndex(firstActive);
      setGameState('player-turn');
    }
  }

  // Player actions
  function hit() {
    setPlayerHands((prev) => {
      const hands = [...prev];
      const hand = { ...hands[currentHandIndex] };
      const newDeck = [...deck];
      const card = newDeck.pop();
      if (!card) return prev;
      hand.cards = [...(hand.cards ?? []), card];
      const score = calculateScore(hand.cards);
      hand.canSplit = false;
      hand.canDoubleDown = false;
      if (score > 21) {
        hand.isComplete = true;
        hand.result = 'lose';
        hand.isActive = false;
      }
      hands[currentHandIndex] = hand;
      setDeck(newDeck);
      // Move to next hand if bust
      if (hand.isComplete) {
        const nextIdx = hands.findIndex(
          (h, i) => i > currentHandIndex && !h.isComplete,
        );
        if (nextIdx !== -1) {
          hands.forEach((h, i) => (h.isActive = i === nextIdx));
          setCurrentHandIndex(nextIdx);
        } else {
          setGameState('dealer-turn');
          setTimeout(dealerPlay, 500);
        }
      }
      return hands;
    });
  }

  function stand() {
    setPlayerHands((prev) => {
      const hands = [...prev];
      hands[currentHandIndex] = {
        ...hands[currentHandIndex],
        isComplete: true,
        isActive: false,
      };
      // Move to next hand
      const nextIdx = hands.findIndex(
        (h, i) => i > currentHandIndex && !h.isComplete,
      );
      if (nextIdx !== -1) {
        hands.forEach((h, i) => (h.isActive = i === nextIdx));
        setCurrentHandIndex(nextIdx);
      } else {
        setGameState('dealer-turn');
        setTimeout(dealerPlay, 500);
      }
      return hands;
    });
  }

  function doubleDown() {
    setPlayerHands((prev) => {
      const hands = [...prev];
      const hand = { ...hands[currentHandIndex] };
      if (balance < (typeof hand.bet === 'number' ? hand.bet : 0)) return prev;
      setBalance(balance - (typeof hand.bet === 'number' ? hand.bet : 0));
      hand.bet = (typeof hand.bet === 'number' ? hand.bet : 0) * 2;
      const newDeck = [...deck];
      const card = newDeck.pop();
      if (!card) return prev;
      hand.cards = [...hand.cards!, card];
      const score = calculateScore(hand.cards);
      hand.canSplit = false;
      hand.canDoubleDown = false;
      hand.isComplete = true;
      hand.isActive = false;
      if (score > 21) hand.result = 'lose';
      hands[currentHandIndex] = hand;
      setDeck(newDeck);
      // Move to next hand
      const nextIdx = hands.findIndex(
        (h, i) => i > currentHandIndex && !h.isComplete,
      );
      if (nextIdx !== -1) {
        hands.forEach((h, i) => (h.isActive = i === nextIdx));
        setCurrentHandIndex(nextIdx);
      } else {
        setGameState('dealer-turn');
        setTimeout(dealerPlay, 500);
      }
      return hands;
    });
  }

  function split() {
    setPlayerHands((prev) => {
      if (prev.length >= MAX_HANDS) {
        return prev;
      }
      const hands = [...prev];
      const hand = { ...hands[currentHandIndex] };
      if (
        !hand.canSplit ||
        (typeof hand.bet === 'number' ? hand.bet : 0) > balance
      ) {
        return prev;
      }
      const bet = typeof hand.bet === 'number' ? hand.bet : 0;
      setBalance(balance - bet);
      // Split into two hands
      const card1 = hand.cards![0];
      const card2 = hand.cards![1];
      if (!card1 || !card2) return prev;
      const newDeck = [...deck];
      const newCard1 = newDeck.pop();
      const newCard2 = newDeck.pop();
      if (!newCard1 || !newCard2) return prev;
      const hand1: Hand = {
        id: uuidv4(),
        cards: [card1, newCard1],
        isActive: true,
        isComplete: false,
        isSplit: true,
        canSplit: card1.rank === newCard1.rank,
        canDoubleDown: true,
        result: undefined,
        bet,
      };
      const hand2: Hand = {
        id: uuidv4(),
        cards: [card2, newCard2],
        isActive: false,
        isComplete: false,
        isSplit: true,
        canSplit: card2.rank === newCard2.rank,
        canDoubleDown: true,
        result: undefined,
        bet,
      };
      hands.splice(currentHandIndex, 1, hand1, hand2);
      setDeck(newDeck);
      setCurrentHandIndex(currentHandIndex); // Stay on first split hand
      return hands.map((h, i) => ({
        id: typeof h.id === 'string' && h.id ? h.id : String(uuidv4()),
        cards: Array.isArray(h.cards) ? h.cards : [],
        bet: typeof h.bet === 'number' ? h.bet : 0,
        isActive: typeof h.isActive === 'boolean' ? h.isActive : false,
        isComplete: typeof h.isComplete === 'boolean' ? h.isComplete : false,
        isSplit: typeof h.isSplit === 'boolean' ? h.isSplit : false,
        canSplit: typeof h.canSplit === 'boolean' ? h.canSplit : false,
        canDoubleDown:
          typeof h.canDoubleDown === 'boolean' ? h.canDoubleDown : false,
        result:
          typeof h.result === 'string' ? (h.result as HandResult) : undefined,
      }));
    });
  }

  // Dealer logic
  function dealerPlay() {
    const newDeck = [...deck];
    const dealer = { ...dealerHand, cards: [...dealerHand.cards] };
    // Reveal hidden card and draw until 17+
    while (calculateScore(dealer.cards) < 17) {
      const card = newDeck.pop();
      if (!card) break;
      dealer.cards.push(card);
    }
    dealer.isComplete = true;
    dealer.isActive = false;
    dealer.bet = 0;
    dealer.canSplit = false;
    dealer.canDoubleDown = false;
    dealer.result = undefined;
    const dealerScore = calculateScore(dealer.cards);
    const dealerBlackjack = isBlackjack(dealer.cards);
    const dealerBust = dealerScore > 21;
    setDealerHand(dealer);
    setPlayerHands((prev) => {
      return prev.map((hand) => {
        if (hand.isComplete && hand.result) return hand;
        const playerScore = calculateScore(hand.cards);
        const playerBlackjack = isBlackjack(hand.cards);
        const playerBust = playerScore > 21;
        if (playerBust) return { ...hand, isComplete: true, result: 'lose' };
        if (dealerBust) return { ...hand, isComplete: true, result: 'win' };
        if (playerBlackjack && dealerBlackjack) {
          return { ...hand, isComplete: true, result: 'push' };
        }
        if (playerBlackjack) {
          return { ...hand, isComplete: true, result: 'blackjack' };
        }
        if (dealerBlackjack) {
          return { ...hand, isComplete: true, result: 'lose' };
        }
        if (playerScore > dealerScore) {
          return { ...hand, isComplete: true, result: 'win' };
        }
        if (playerScore < dealerScore) {
          return { ...hand, isComplete: true, result: 'lose' };
        }
        return { ...hand, isComplete: true, result: 'push' };
      });
    });
    setTimeout(() => resolvePayouts(), 300);
    setGameState('game-over');
  }

  // Payouts
  function resolvePayouts() {
    setPlayerHands((prev) => {
      let payout = 0;
      prev.forEach((hand) => {
        const bet = typeof hand.bet === 'number' ? hand.bet : 0;
        if (hand.result === 'win') payout += bet * 2;
        else if (hand.result === 'blackjack')
          payout += bet + Math.floor(bet * 1.5);
        else if (hand.result === 'push') payout += bet;
      });
      setBalance(balance + payout);
      return prev.map((hand) => {
        const id =
          typeof hand.id === 'string' && hand.id ? hand.id : String(uuidv4());
        const cards = Array.isArray(hand.cards) ? hand.cards : [];
        const bet = typeof hand.bet === 'number' ? hand.bet : 0;
        const isActive =
          typeof hand.isActive === 'boolean' ? hand.isActive : false;
        const isComplete =
          typeof hand.isComplete === 'boolean' ? hand.isComplete : false;
        const isSplit =
          typeof hand.isSplit === 'boolean' ? hand.isSplit : false;
        const canSplit =
          typeof hand.canSplit === 'boolean' ? hand.canSplit : false;
        const canDoubleDown =
          typeof hand.canDoubleDown === 'boolean' ? hand.canDoubleDown : false;
        const result =
          typeof hand.result === 'string'
            ? (hand.result as HandResult)
            : undefined;
        return {
          id,
          cards,
          bet,
          isActive,
          isComplete,
          isSplit,
          canSplit,
          canDoubleDown,
          result,
        };
      });
    });
  }

  // UI
  return (
    <div className="flex flex-col items-center gap-8 p-8">
      <div className="text-2xl font-bold text-gray-800">{message}</div>
      <div className="text-2xl font-bold">Balance: ${balance}</div>
      <div className="text-xl font-bold">Dealer</div>
      <HandView
        hand={dealerHand}
        isDealer={true}
        hideFirstCard={gameState === 'player-turn'}
      />
      <div className="text-xl font-bold">Your Hands</div>
      <div className="flex flex-wrap gap-4">
        {playerHands.map((hand) => (
          <HandView
            key={hand.id}
            hand={hand}
            onHit={hit}
            onStand={stand}
            onDoubleDown={doubleDown}
            onSplit={split}
          />
        ))}
      </div>
      {gameState === 'betting' && (
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <div className="text-lg font-semibold text-gray-700">
              Number of Decks:
            </div>
            <select
              value={numDecks}
              onChange={(e) => setNumDecks(Number(e.target.value))}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={playerHands.length > 0}
            >
              {[1, 2, 4, 6, 8].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? 'Deck' : 'Decks'}
                </option>
              ))}
            </select>
          </div>
          <div className="text-lg font-semibold text-gray-700">
            Place your bets:
          </div>
          <div className="flex gap-2">
            {BET_AMOUNTS.map((amount) => (
              <button
                key={amount}
                onClick={() => addHand(amount)}
                disabled={amount > balance || playerHands.length >= MAX_HANDS}
                className={`px-4 py-2 rounded-lg font-medium transition-colors
                  ${
                    amount > balance || playerHands.length >= MAX_HANDS
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-500 text-white hover:bg-blue-600'
                  }`}
              >
                ${amount}
              </button>
            ))}
          </div>
          {playerHands.length > 0 && (
            <button
              onClick={dealInitialCards}
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              Deal Cards
            </button>
          )}
        </div>
      )}
      {gameState === 'game-over' && (
        <div className="flex flex-col items-center gap-6">
          <button
            onClick={startNewGame}
            className="px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-lg font-semibold"
          >
            New Game
          </button>
        </div>
      )}
    </div>
  );
}
