import { useState } from "react";

import Card from './Card';
import Log from './Log';
import Score from './Score';
import { firstStagePack, midStagePack, lastStagePack } from "../utils/PokemonCard";

export default function Game() {
    const [yourTurn, setYourTurn] = useState(true);
    const [yourDeck, setYourDeck] = useState([]);
    const [opponentDeck, setOpponentDeck] = useState([]);
    const [yourCard, setYourCard] = useState(firstStagePack[0]);
    const [opponentCard, setOpponentCard] = useState(firstStagePack[3]);
    const [log, setLog] = useState(
        [
            'Bug Attack is increased against Fire Defense',
            'Attack VS. Defense',
            '140 VS. 55',
            'You win!'
        ]);

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
                <Card card={yourCard} />
                <Card card={opponentCard} />
            </div>

            {/* Types */}
            <table>
                <tbody>
                    <tr>
                        <td className="text-center">Fire</td>
                        <td className="text-center">Fire</td>
                    </tr>
                </tbody>
            </table>


            {/* Log */}
            <Log log={log} />

            {/* Continue Button */}
            <button type="button" class="text-white bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-emerald-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Continue
            </button>

        </div>
    );
}