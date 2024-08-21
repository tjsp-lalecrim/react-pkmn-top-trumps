import { useState } from "react";
import Card from './Card';
import HiddenCard from "./HiddenCard";
import Log from './Log';
import Score from './Score';
import { firstStagePack } from "../utils/PokemonCard";

export default function Game() {
    const [currentPack, setCurrentPack] = useState([]);
    const [yourDeck, setYourDeck] = useState([]);
    const [opponentDeck, setOpponentDeck] = useState([]);
    const [yourCard, setYourCard] = useState(null);
    const [opponentCard, setOpponentCard] = useState(null);
    const [yourTurn, setYourTurn] = useState(true);
    const [log, setLog] = useState([]);

    const buildPack = () => {
        setCurrentPack(firstStagePack);

        setCurrentPack((prevPack) => {
            const shuffledCards = [...prevPack].sort(() => Math.random() - 0.5);
            const half = Math.floor(shuffledCards.length / 2);
            setYourDeck(shuffledCards.slice(0, half));
            setOpponentDeck(shuffledCards.slice(half));
            return prevPack;
        });
    }

    const continueGame = () => {
        if (currentPack.length === 0) {
            buildPack();
        }

        if (yourTurn) {
            drawYourCard();
        } else {
            drawOpponentCard();
        }
    }

    const drawYourCard = () => {
        setYourDeck((prevDeck) => {
            const [newYourCard, ...remainingYourDeck] = prevDeck;
            setYourCard((newYourCard));
            addLog(`You draw ${newYourCard?.name}`);
            return remainingYourDeck;
        });

    }

    const drawOpponentCard = () => {
        setOpponentDeck((prevDeck) => {
            const [newOpponentCard, ...remainingOpponentDeck] = prevDeck;
            setOpponentCard(newOpponentCard);
            addLog(`Computer draw ${newOpponentCard?.name}`);
            return remainingOpponentDeck;
        });
    }

    const addLog = (message) => setLog([...log, message]);

    return (
        <div className="flex flex-col">
            {/* Phase */}
            <div className="w-full bg-slate-50 text-center text-slate-950 rounded py-1 mt-4">
                <p>{yourTurn ? 'Your Turn' : 'Opponent Turn'}</p>
            </div>

            {/* Score */}
            <Score yourScore={yourDeck.length} opponentScore={opponentDeck.length} />

            {/* Cards In-Game */}
            <div id="cards" className="flex justify-between text-slate-950 gap-1 md:gap-4 lg:gap-8">
                {yourCard
                    ? <Card card={yourCard} />
                    : <HiddenCard />
                }

                {opponentCard
                    ? <Card card={opponentCard} />
                    : <HiddenCard />
                }
            </div>

            {/* Types */}
            <div className="w-full flex">
                <span className="w-full text-center">{yourCard?.type || '???'}</span>
                <span className="w-full text-center">{opponentCard?.type || '???'}</span>
            </div>

            {/* Log */}
            <Log log={log} />

            {/* Continue Button */}
            <button type="button" className="text-white bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-emerald-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={continueGame}>
                {yourCard ? 'Continue' : 'Draw'}
            </button>
        </div>
    );
}
