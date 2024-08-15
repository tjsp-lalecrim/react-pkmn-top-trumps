import ImgCharmander from '../img/pokemons/Charmander.png';
import TypeFire from '../img/types/fire.png';

export default function Card({card}){
    return (
        <div className='w-40 md:w-56 lg:w-64 bg-slate-50 rounded px-1 md:px-2 lg:px-4'>
                    <div className='w-full flex items-center justify-between py-1'>
                        <h5>{card?.name}</h5>
                        <img className="w-8" src={TypeFire} alt="Card Type" />
                    </div>
                    <img className="w-full" src={ImgCharmander} alt="Pokemon Card" />
                    <ul id="card-options" className="list-none flex flex-col py-2 gap-1 lg:gap-2">
                        <li className="flex justify-between bg-slate-200">
                            <span>HP</span>
                            <span>{card?.hp}</span>
                        </li>
                        <li className="flex justify-between bg-slate-200">
                            <span>Attack</span>
                            <span>{card?.attack}</span>
                        </li>
                        <li className="flex justify-between bg-slate-200">
                            <span>Defense</span>
                            <span>{card?.defense}</span>
                        </li>
                        <li className="flex justify-between bg-slate-200">
                            <span>Special Attack</span>
                            <span>{card?.specialAttack}</span>
                        </li>
                        <li className="flex justify-between bg-slate-200">
                            <span>Special Defense</span>
                            <span>{card?.specialDefense}</span>
                        </li>
                        <li className="flex justify-between bg-slate-200">
                            <span>Speed</span>
                            <span>{card?.speed}</span>
                        </li>
                    </ul>
                </div>
    );
}