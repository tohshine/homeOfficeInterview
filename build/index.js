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
require("dotenv").config();
const express_1 = __importDefault(require("express"));
const pokemonAPI_1 = require("./services/pokemonAPI");
//create basic express app 
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //using post request, we can get the input value from the req.body by user
    const pokemonName = req.body;
    if (!process.env.POKEMON_NAME)
        return res.status(400).send('pokemon name is not added to env');
    const result = yield (0, pokemonAPI_1.fetchEvolutionChain)(process.env.POKEMON_NAME);
    res.json(result);
}));
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
});
