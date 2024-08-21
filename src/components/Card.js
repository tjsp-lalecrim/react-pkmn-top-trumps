import { useEffect, useState } from "react";

const pokemonImages = require.context('../img/pokemons', true);
const typeImages = require.context('../img/types', true);

const selectStat = (stat, value) => {
    console.log(stat, value);
}

export default function Card({ card }) {
    let [pokemonImg, setPokemonImg] = useState('');
    let [typeImg, setTypeImg] = useState('');

    useEffect(() => {
        let pokemonSource = pokemonImages('./' + card.name + '.png');
        setPokemonImg(pokemonSource);

        let typeSource = typeImages('./' + card.type + '.png');
        setTypeImg(typeSource);
    }, [card]);


    return (
        <div id={`card-${card?.name}`} className='w-40 md:w-56 lg:w-64 bg-slate-50 rounded px-1 md:px-2 lg:px-4'>
            <div className='w-full flex items-center justify-between py-1'>
                <h5>{card?.name}</h5>
                <img className="w-8" src={typeImg} alt="Card Type" />
            </div>
            <img className="w-full" src={pokemonImg} alt="Pokemon Card" />
            <ul id="card-options" className="list-none flex flex-col py-2 gap-1 lg:gap-2">
                <li className="flex justify-between bg-slate-200 cursor-pointer" onClick={() => selectStat('HP', card?.hp)}>
                    <span>HP</span>
                    <span>{card?.hp}</span>
                </li>
                <li className="flex justify-between bg-slate-200 cursor-pointer" onClick={() => selectStat('Attack', card?.attack)}>
                    <span>Attack</span>
                    <span>{card?.attack}</span>
                </li>
                <li className="flex justify-between bg-slate-200 cursor-pointer" onClick={() => selectStat('Defense', card?.defense)}>
                    <span>Defense</span>
                    <span>{card?.defense}</span>
                </li>
                <li className="flex justify-between bg-slate-200 cursor-pointer" onClick={() => selectStat('Special Attack', card?.specialAttack)}>
                    <span>Special Attack</span>
                    <span>{card?.specialAttack}</span>
                </li>
                <li className="flex justify-between bg-slate-200 cursor-pointer" onClick={() => selectStat('Special Defense', card?.specialDefense)}>
                    <span>Special Defense</span>
                    <span>{card?.specialDefense}</span>
                </li>
                <li className="flex justify-between bg-slate-200 cursor-pointer" onClick={() => selectStat('Speed', card?.speed)}>
                    <span>Speed</span>
                    <span>{card?.speed}</span>
                </li>
            </ul>
        </div>
    );
}