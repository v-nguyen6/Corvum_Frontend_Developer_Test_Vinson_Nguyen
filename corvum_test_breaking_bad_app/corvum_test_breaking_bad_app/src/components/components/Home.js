/*
----------------------------------------------------------------
General React Dependencies / Custom Imports & Components
----------------------------------------------------------------
*/
// React Dependencies
import React from 'react';
import { useState, useEffect } from 'react';
// Used to communicate with API's more easily
import axios from 'axios';

// Components 
import CharacterGrid from "./CharacterGrid";
import SearchBar from "../../components/widgets/SearchBar";

//--------------------------------------------------------------
const Home = () => {
    // For allowing user to scroll to top when clicking on arrow / nav functions
    useEffect(() => {window.scrollTo(0,0); }, []);

  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )

      console.log(result.data)

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

    return (
        <React.Fragment>
            <SearchBar getQuery={(q) => setQuery(q)} />
            <CharacterGrid isLoading={isLoading} items={items} />
        </React.Fragment>
    );
}

export default Home;