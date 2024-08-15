import ImgCharmander from '../img/pokemons/Charmander.png';
import TypeFire from '../img/types/fire.png';

export default function Game() {
    return (
        <div className="flex flex-col">
            {/* Phase */}
            <div className="w-full bg-slate-50 text-center text-slate-950 rounded py-1 mt-4">
                <p>Your Turn</p>
            </div>

            {/* Score */}
            <table className='w-full flex flex-col items-center'>
                <thead className='flex justify-items-between'>
                    <tr>
                        <th className="text-center">You</th>
                        <th className="text-center">Opponent</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="text-center">30</td>
                        <td className="text-center">30</td>
                    </tr>
                </tbody>
            </table>

            {/* Cards In Game */}
            <div id="cards" className="flex justify-between text-slate-950 gap-1 md:gap-4 lg:gap-8">
                <div id="your-card" className='w-40 md:w-56 lg:w-64 bg-slate-50 rounded px-1 md:px-2 lg:px-4'>
                    <div className='w-full flex items-center justify-between py-1'>
                        <h5>Charmander</h5>
                        <img className="w-8" src={TypeFire} alt="Card Type" />
                    </div>
                    <img className="w-full" src={ImgCharmander} alt="Pokemon Card" />
                    <ul id="card-options" className="list-none flex flex-col py-2 gap-1 lg:gap-2">
                        <li className="flex justify-between bg-slate-200">
                            <span>HP</span>
                            <span>90</span>
                        </li>
                        <li className="flex justify-between bg-slate-200">
                            <span>Attack</span>
                            <span>45</span>
                        </li>
                        <li className="flex justify-between bg-slate-200">
                            <span>Defense</span>
                            <span>40</span>
                        </li>
                        <li className="flex justify-between bg-slate-200">
                            <span>Special Attack</span>
                            <span>55</span>
                        </li>
                        <li className="flex justify-between bg-slate-200">
                            <span>Special Defense</span>
                            <span>45</span>
                        </li>
                        <li className="flex justify-between bg-slate-200">
                            <span>Speed</span>
                            <span>60</span>
                        </li>
                    </ul>
                </div>

                <div id="opponent-card" className='w-40 md:w-56 lg:w-64 bg-slate-50 rounded px-1 md:px-2 lg:px-4'>
                    <div className='w-full flex items-center justify-between py-1'>
                        <h5>Charmander</h5>
                        <img className="w-8" src={TypeFire} alt="Card Type" />
                    </div>
                    <img className="w-full" src={ImgCharmander} alt="Pokemon Card" />
                    <ul id="card-options" className="list-none flex flex-col py-2 gap-1 lg:gap-2">
                        <li className="flex justify-between bg-slate-200">
                            <span>HP</span>
                            <span>90</span>
                        </li>
                        <li className="flex justify-between bg-slate-200">
                            <span>Attack</span>
                            <span>45</span>
                        </li>
                        <li className="flex justify-between bg-slate-200">
                            <span>Defense</span>
                            <span>40</span>
                        </li>
                        <li className="flex justify-between bg-slate-200">
                            <span>Special Attack</span>
                            <span>55</span>
                        </li>
                        <li className="flex justify-between bg-slate-200">
                            <span>Special Defense</span>
                            <span>45</span>
                        </li>
                        <li className="flex justify-between bg-slate-200">
                            <span>Speed</span>
                            <span>60</span>
                        </li>
                    </ul>
                </div>
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
            <div className='w-full bg-slate-50 text-center text-slate-950 rounded py-1 my-2'>
                <p>Bug Attack is increased against Fire Defense</p>
                <p>Attack VS. Defense</p>
                <p>140 VS. 55</p>
                <p>You win!</p>
            </div>

            {/* Continue Button */}

            <button type="button" class="text-white bg-emerald-700 hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-300 font-medium rounded text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800">
                Continue
            </button>

            <button type="button" class="text-white bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-emerald-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Continue
            </button>

        </div>
    );
}