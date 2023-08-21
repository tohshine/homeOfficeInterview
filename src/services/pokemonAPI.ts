import axios from 'axios';

export interface EvolutionVariation {
  name: string;
  variations: EvolutionVariation[];
}

export async function fetchEvolutionChain(pokemonName: string): Promise<EvolutionVariation | null> {
  try {
    const response = await axios.get(`${process.env.BASE_URL}/${pokemonName}`);
    const speciesData = response.data;
    const evolutionChainUrl = speciesData.evolution_chain.url;

    const evolutionChainResponse = await axios.get(evolutionChainUrl);
    const evolutionChainData = evolutionChainResponse.data;

    return buildEvolutionVariations(evolutionChainData.chain);
  } catch (error) {
    console.error('Error fetching evolution chain:', error);
    return null;
  }
}

function buildEvolutionVariations(chain: any): EvolutionVariation {
  const variation: EvolutionVariation = {
    name: chain.species.name,
    variations: [],
  };

  if (chain.evolves_to.length > 0) {
    chain.evolves_to.forEach((evolution: any) => {
      variation.variations.push(buildEvolutionVariations(evolution));
    });
  }

  return variation;
}





