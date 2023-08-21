
import express,{Request,Response} from 'express'
import {fetchEvolutionChain} from './services/pokemonAPI'
import {app} from './app'
 
const PORT = process.env.PORT || 5000


app.listen(PORT,()=>{
    console.log(`server started on port ${PORT}`);
    
})