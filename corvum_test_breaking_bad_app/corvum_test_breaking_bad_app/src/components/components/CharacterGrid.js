/*
----------------------------------------------------------------
General React Dependencies / Custom Imports & Components
----------------------------------------------------------------
*/
// React Dependencies
import React from "react";

// Components
import CharacterItem from "./CharacterItem";
import LoadingSpinner from "../widgets/LoadingSpinner";

//--------------------------------------------------------------
const CharacterGrid = ({ items, isLoading }) => {
    return isLoading ? (
      <LoadingSpinner />
    ) : (
      <section className='character-grid'>
        {items.map((item) => (
          <CharacterItem key={item.char_id} item={item}></CharacterItem>
        ))}
      </section>
    )
  }
  
  export default CharacterGrid