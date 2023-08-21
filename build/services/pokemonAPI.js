"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchEvolutionChain = void 0;
const axios_1 = __importDefault(require("axios"));
function fetchEvolutionChain(pokemonName) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get(`${process.env.BASE_URL}/${pokemonName}`);
            const speciesData = response.data;
            const evolutionChainUrl = speciesData.evolution_chain.url;
            const evolutionChainResponse = yield axios_1.default.get(evolutionChainUrl);
            const evolutionChainData = evolutionChainResponse.data;
            return buildEvolutionVariations(evolutionChainData.chain);
        }
        catch (error) {
            console.error('Error fetching evolution chain:', error);
            return null;
        }
    });
}
exports.fetchEvolutionChain = fetchEvolutionChain;
function buildEvolutionVariations(chain) {
    const variation = {
        name: chain.species.name,
        variations: [],
    };
    if (chain.evolves_to.length > 0) {
        chain.evolves_to.forEach((evolution) => {
            variation.variations.push(buildEvolutionVariations(evolution));
        });
    }
    return variation;
}
