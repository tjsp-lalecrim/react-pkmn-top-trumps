import { useEffect, useState } from "react";

const pokemonImages = require.context('../img/pokemons', true);
const typeImages = require.context('../img/types', true);

export default function Card(props) {
    let [pokemonImg, setPokemonImg] = useState('');
    let [typeImg, setTypeImg] = useState('');

    useEffect(() => {
        let pokemonSource = pokemonImages('./' + props.card.name + '.png');
        setPokemonImg(pokemonSource);

        let typeSource = typeImages('./' + props.card.type + '.png');
        setTypeImg(typeSource);
    }, [props.card]);


    const handleStatSelected = (stat) => {
        if (props.active) {
            props.handleStatCallBack(stat);
        }
    }

    return (
        <div id={`card-${props.card?.name}`} className='w-40 md:w-56 lg:w-64 bg-slate-50 rounded px-1 md:px-2 lg:px-4'>
            <div className='w-full flex items-center justify-between py-1'>
                <h5>{props.card?.name}</h5>
                <img className="w-8" src={typeImg} alt="Card Type" />
            </div>
            <img className="w-full" src={pokemonImg} alt="Pokemon Card" />
            <ul id="card-options" className="list-none flex flex-col py-2 gap-1 lg:gap-2">
                <li className={"flex justify-between bg-slate-200" + (props.active ? " cursor-pointer" : "")} onClick={() => handleStatSelected('HP')}>
                    <span>HP</span>
                    <span>{props.card.hp}</span>
                </li>
                <li className={"flex justify-between bg-slate-200" + (props.active ? " cursor-pointer" : "")} onClick={() => handleStatSelected('Attack')}>
                    <span>Attack</span>
                    <span>{props.card.attack}</span>
                </li>
                <li className={"flex justify-between bg-slate-200" + (props.active ? " cursor-pointer" : "")} onClick={() => handleStatSelected('Defense')}>
                    <span>Defense</span>
                    <span>{props.card.defense}</span>
                </li>
                <li className={"flex justify-between bg-slate-200" + (props.active ? " cursor-pointer" : "")} onClick={() => handleStatSelected('Special Attack')}>
                    <span>Special Attack</span>
                    <span>{props.card.specialAttack}</span>
                </li>
                <li className={"flex justify-between bg-slate-200" + (props.active ? " cursor-pointer" : "")} onClick={() => handleStatSelected('Special Defense')}>
                    <span>Special Defense</span>
                    <span>{props.card.specialDefense}</span>
                </li>
                <li className={"flex justify-between bg-slate-200" + (props.active ? " cursor-pointer" : "")} onClick={() => handleStatSelected('Speed')}>
                    <span>Speed</span>
                    <span>{props.card.speed}</span>
                </li>
            </ul>
        </div>
    );
}