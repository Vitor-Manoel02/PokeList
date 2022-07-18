import { useState, useEffect } from 'react';
import styles from './Card.module.css';

export default function Card({pokemon}){
    const [pokemonData, setPokemonData] = useState()

    async function getPokemonData(){
        try{
          fetch(pokemon.url).then((resposta)=>
            resposta.json()
          ).then((result)=>{
            setPokemonData(result);
            console.log(result);
            console.log(pokemonData?.abilities[0].ability.name);
          })
        }catch{
          console.log("Erro");
        }
      }
    
      useEffect(()=>{
        getPokemonData();
      },[])
    return(
     <div>
        <div className={styles.card}>
          <h3 className={styles.title}>{pokemon.name}</h3>
          <img className={styles.img} src={pokemonData?.sprites.front_default}></img>
          <h3 className={styles.hb1}>Habilidade 1:{pokemonData?.abilities[0].ability.name}</h3>
        </div>
      </div>
    )
}