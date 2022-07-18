import Link from "next/dist/client/link";
import { useEffect, useState } from "react";

function GlobalStyle(){
    return(
        <>
           <style global jsx>{
            `
            body{
                font-family: arail;
                background-color: gray;
            } 
            ` 
}</style>
        </>
    )
}

function Title({children, as}){
    const Tag = as;
    return(
        <>
           <Tag>{children}</Tag>
           <style jsx>{
            `
            ${Tag}{
                color: white;
            }
            `
           }</style>
        </>
    )
}

function Subtitle({children, as}){
    const TagSub = as;
    return(
        <>
        <TagSub>{children}</TagSub>
        <style jsx>{
            `
            ${TagSub}{
                color: green;
            }
            `
}</style>
        </>
    )
}

export default function Loja(props){

    let number = 0
    const [apiGit,setApiGit] = useState(0);

    // async function testaApi(){
    //     try{
    //         await fetch("https://api.github.com/users/Vitor-Manoel02/repos").then((value)=>{
    //             value.json()
    //         }).then((event)=>{
    //             setApiGit(event)
    //         })
    //     }catch{
    //         console.log("Teste dee erro");
    //     }
    // }

    // testaApi()

    useEffect(()=>{
        document.title = apiGit;
    },[apiGit])//No array vai a dependência, caso seja somente uma vez,array deve estar vazio! 


    return(
        <div>
            <GlobalStyle/>
            <Title as="h1">Aqui é uma props para estilo</Title>
            <Link href="/">Voltar</Link>
            <div>
                <Subtitle as="h1">Olá</Subtitle>
            </div>

            <h1>{apiGit}</h1>

            <button onClick={()=>{setApiGit(apiGit + 1)}}>Somar + 1</button>
            <button onClick={()=>{setApiGit(apiGit - 1)}}>Subtrair - 1</button>


        </div>
    )
}