import ImgPokeball from '../img/pokeball.png';

export default function HiddenCard(){
    return (
        <div className='w-40 md:w-56 lg:w-64 bg-slate-50 rounded px-1 md:px-2 lg:px-4'>
                    <div className='w-full flex items-center justify-between py-1'>
                        <h5>???</h5>
                    </div>
                    <img className="w-full" src={ImgPokeball} alt="Pokemon Card" />
                    <ul id="card-options" className="list-none flex flex-col py-2 gap-1 lg:gap-2">
                        <li className="flex justify-between bg-slate-200">
                            <span>HP</span>
                            <span>???</span>
                        </li>
                        <li className="flex justify-between bg-slate-200">
                            <span>Attack</span>
                            <span>???</span>
                        </li>
                        <li className="flex justify-between bg-slate-200">
                            <span>Defense</span>
                            <span>???</span>
                        </li>
                        <li className="flex justify-between bg-slate-200">
                            <span>Special Attack</span>
                            <span>???</span>
                        </li>
                        <li className="flex justify-between bg-slate-200">
                            <span>Special Defense</span>
                            <span>???</span>
                        </li>
                        <li className="flex justify-between bg-slate-200">
                            <span>Speed</span>
                            <span>???</span>
                        </li>
                    </ul>
                </div>
    );
}