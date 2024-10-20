
// No need to import key
export const PokemonCard =  ({pokeData})=>{


    return (
        <>
        <li className="w-60 rounded-md h-80 shadow-sm shadow-slate-500 bg-white transition-all duration-500 hover:scale-105">
            
            <figure>
            <img src={pokeData.sprites.front_default} className=" transition-all duration-500 hover:rotate-180 hover:bg-black mx-auto bg-green-200 rounded-full shadow-sm shadow-black mt-2" alt={pokeData.name} />
            </figure>
            
             <section className="mt-4 p-3">

              <div className="text-sm bg-green-500 rounded-lg text-center text-white font-semibold mb-3">
                   <p>
                    {
                        // thats how we handle data 
                        pokeData.types.map((curType)=>curType.type.name).join(",")
                    }
                   </p>
                </div>

            
           
            <p className="p-1 text-xs  text-justify">Name   : {pokeData.name}</p>
            <p className="p-1 text-xs  text-justify">Weight : {pokeData.weight}</p>
            <p className="p-1 text-xs  text-justify">Height : {pokeData.height}</p>
            <p className="p-1 text-xs  text-justify">Speed  : {pokeData.stats[5].base_stat}</p>
            <p className="p-1 text-xs  text-justify">Abilities :
                {
                    pokeData.abilities.map((curAbility)=>curAbility.ability.name).slice(0,2).join(",")
                }
            </p>
             </section>
            
            </li>
        </>
    )
}