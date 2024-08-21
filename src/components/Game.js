import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import Card from './Card';
import HiddenCard from "./HiddenCard";
import Log from './Log';
import Score from './Score';
import { firstStagePack, midStagePack, lastStagePack } from "../utils/PokemonCard";

function useGameLogic() {
    const [searchParams] = useSearchParams();
    const [currentPack, setCurrentPack] = useState([]);
    const [yourDeck, setYourDeck] = useState([]);
    const [opponentDeck, setOpponentDeck] = useState([]);
    const [yourCard, setYourCard] = useState(null);
    const [opponentCard, setOpponentCard] = useState(null);
    const [yourTurn, setYourTurn] = useState(false);
    const [log, setLog] = useState([]);

    const initializePack = () => {
        const packValue = Number.parseInt(searchParams.get("pack")) || 1;
        let selectedPack;

        switch (packValue) {
            case 1:
                selectedPack = firstStagePack;
                break;
            case 2:
                selectedPack = midStagePack;
                break;
            case 3:
                selectedPack = lastStagePack;
                break;
            default:
                selectedPack = firstStagePack;
        }

        const shuffledCards = [...selectedPack].sort(() => Math.random() - 0.5);
        const half = Math.floor(shuffledCards.length / 2);

        setYourDeck(shuffledCards.slice(0, half));
        setOpponentDeck(shuffledCards.slice(half));
        setCurrentPack(shuffledCards);
    };

    const drawCard = (deck, setDeck, setCard, player) => {
        setDeck(prevDeck => {
            const [drawnCard, ...remainingDeck] = prevDeck;
            setCard(drawnCard);
            addLog(`${player} draw ${drawnCard?.name}`);
            return remainingDeck;
        });
    };

    const addLog = (message) => setLog(prevLog => [...prevLog, message]);

    const continueGame = () => {
        if (currentPack.length === 0) {
            initializePack();
        }

        if (yourTurn) {
            drawCard(yourDeck, setYourDeck, setYourCard, "You");
            setOpponentCard(null);
        } else {
            drawCard(opponentDeck, setOpponentDeck, setOpponentCard, "Computer");
            setYourCard(null);
        }

        setYourTurn(!yourTurn);
    };

    return { yourDeck, opponentDeck, yourCard, opponentCard, yourTurn, log, continueGame };
}

export default function Game() {
    const { yourDeck, opponentDeck, yourCard, opponentCard, yourTurn, log, continueGame } = useGameLogic();

    return (
        <div className="flex flex-col">
            <div className="w-full bg-slate-50 text-center text-slate-950 rounded py-1 mt-4">
                <p>{yourTurn ? 'Your Turn' : 'Opponent Turn'}</p>
            </div>
            <Score yourScore={yourDeck.length} opponentScore={opponentDeck.length} />
            <div id="cards" className="flex justify-between text-slate-950 gap-1 md:gap-4 lg:gap-8">
                {yourCard ? <Card card={yourCard} /> : <HiddenCard />}
                {opponentCard ? <Card card={opponentCard} /> : <HiddenCard />}
            </div>
            <div className="w-full flex">
                <span className="w-full text-center">{yourCard?.type || '???'}</span>
                <span className="w-full text-center">{opponentCard?.type || '???'}</span>
            </div>
            <Log log={log} />
            <button
                type="button"
                className="text-white bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-emerald-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={continueGame}
            >
                Continue
            </button>
        </div>
    );
}
