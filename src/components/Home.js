import ImgCharmander from '../img/pokemons/Charmander.png';
import ImgCharmeleon from '../img/pokemons/Charmeleon.png';
import ImgCharizard from '../img/pokemons/Charizard.png';

export default function Home() {
    return (
        <div className='flex flex-col'>
            <p className="mt-3">Select a pack to start</p>
            <div className="grid grid-cols-3 gap-2 my-5">
                <div className='flex flex-col items-center gap-1'>
                    <img className='rounded w-32 md:w-48 lg:w-64 outline outline-offset-1 outline-gray-500' src={ImgCharmander} alt={ImgCharmander} />
                    <span>First Stage</span>
                </div>
                <div className='flex flex-col items-center gap-1'>
                    <img className='rounded w-32 md:w-48 lg:w-64 outline outline-offset-1 outline-gray-500' src={ImgCharmeleon} alt={ImgCharmeleon} />
                    <span>Mid Stage</span>
                </div>
                <div className='flex flex-col items-center gap-1'>
                    <img className='rounded w-32 md:w-48 lg:w-64 outline outline-offset-1 outline-gray-500' src={ImgCharizard} alt={ImgCharizard} />
                    <span>Last Stage</span>
                </div>
            </div>

            <ol className="list-inside list-decimal">
                <p>Rules:</p>
                <li>
                    Select a stat from your card.
                </li>
                <li>
                    If you choose HP or Speed, your stat will be compared with the HP or Speed of your opponent.
                </li>
                <li>
                    If you opt for Attack or Special Attack, your stat will be compared with the Defense or Special
                    Defense of your opponent.
                </li>
                <li>
                    If you pick Defense or Special Defense, your stat will be compared with the Attack or Special Attack
                    of your opponent.
                </li>
                <li>
                    A type multiplier will be applied when Attack, Defense, Special Attack, or Special Defense is
                    selected.
                </li>
            </ol>
        </div>
    );

}