import Loader from "./comps/loader/Loader";

import Search from "./comps/search/Search";
import Pokemon from "./comps/PokemonCard/card/Card";
import { useSelector } from "react-redux";

import React from 'react'

const Pokeapi = () => {
    const { isLoading, data, error } = useSelector((state) => state.pokemon);

	return (
		<>
				<Search />
				{isLoading && <Loader />}
				{data && <Pokemon {...data} />}
				{error && <h2 style={{ color: "#FA6C6C" }}>{error}</h2>}
		</>
	);
}

export default Pokeapi