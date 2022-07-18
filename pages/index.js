import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import Card from '../src/components/card';


export default function Home() {

  const [pokemonList,setPokemonList] = useState(null);
  const [qtdPokemon, setQtdPokemon] = useState(3)
  const url = `https://pokeapi.co/api/v2/pokemon?limit=${qtdPokemon}&offset=0`;

  console.log(qtdPokemon);
  

  async function getPokemonList(){
    try{
      fetch(url).then((resposta)=>
        resposta.json()
      ).then((result)=>{
        setPokemonList(result.results);
      })
    }catch{
      console.log("Erro");
    }
  }

  useEffect(()=>{
    getPokemonList();
  },[qtdPokemon])

  return (
    <div className={styles.pageContainer}>
    <img className={styles.logo} src='/assets/Logo.svg'/>
    <input className={styles.input} type="text" placeholder="Pesquise a quantidade de pokemons!" onChange={((e)=>setQtdPokemon(e.target.value))}></input>
    <div className={styles.Container}>
        {pokemonList && pokemonList.map((pokemon,index)=>{
          return <Card key={index} pokemon={pokemon} index={index}/>
        })}
      {/* <Link href="./loja">Loja</Link> */}

    </div>
    </div>
  )
}
