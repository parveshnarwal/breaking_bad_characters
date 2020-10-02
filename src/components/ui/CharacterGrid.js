import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from './Spinner'


function CharacterGrid({items, isLoading}) {

    console.log("cg "+ isLoading)

    return (
       isLoading ? <Spinner/>
       : <section className="cards">
           { items.map((item) =>  <CharacterItem key={item.char_id} item={item}></CharacterItem> ) }
       </section>
    )
}

export default CharacterGrid
