import { useEffect, useState } from "react"
import { PokemonCard } from "./PokemonCard";

export const Pokemon=()=>{

    const API = "https://pokeapi.co/api/v2/pokemon?limit=100";
    const [pokemon,setPokemon] = useState([]);

    // Handling Loading State And Error State 

    const [loading,setLoading]=useState(true);
    const [error,setError]= useState(null);
    const [inputVal,setInputVal] = useState("");


    const fetchPookie = async()=>{

        try {
            const res = await fetch(API);
            const data = await res.json();
            // console.log("reaxl",data)
            // har url pe fetch operation lagana hei result ke andar urls hei 
            const detailedData =  data.results.map(async(cur)=>{
                const res = await fetch(cur.url);
                const data = res.json();
                // console.log("hy",data);
                return data;
            })
            //here we get lots of responses
            //  console.log("det",detailedData)
            const detailedResponse = await Promise.all(detailedData);
            console.log(detailedResponse);
            // now we have set our responzs in state variable
            setPokemon(detailedResponse);
            setLoading(false);
        }
        catch (error) {
               setError(error);
               setLoading(false);
        }

    }



    useEffect(()=>{
        fetchPookie();
    },[])


    // Search functionality

    const searchData = pokemon.filter((cur)=>cur.name.toLowerCase().includes(inputVal.toLowerCase()))




    // Jab Tak Sara Promise Load Na nhojae niche wala codde execute kare
      if(loading)
      {
        return <h1>
            Loading....
        </h1>
      }

      if(error)
      {
        return <h1>
            {error.message};
        </h1>
      }


    return(
        <>
       <section className="bg-green-800 p-5">
        <header className="flex justify-center items-center">
            <h1 className="text-center w-96 text-black font-bold bg-slate-200 rounded-md shadow-sm shadow-black lg:text-3xl md:text-3xl text-xl pl-2 pr-2 pt-4 pb-4 ">Lets Catch Pokemon</h1>
        </header>
         
         <div className="flex justify-center items-center p-4">
            <input type="text" className=" p-2 rounded-md" value={inputVal} onChange={(e)=>setInputVal(e.target.value)} />
         </div>

        <div className="md:mt-2">
            <ul className="p-10 flex md:flex-row flex-col gap-6 flex-wrap justify-center items-center ">
                {
                    searchData.map((curPoke)=>{
                        return <PokemonCard key={curPoke.id} pokeData={curPoke}></PokemonCard>
                    })
                }
            </ul>
        </div>
       </section>
        </>
    )
}