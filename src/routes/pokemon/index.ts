import express,{Response,Request} from 'express'
import {fetchEvolutionChain} from '../../services/pokemonAPI'
const router = express.Router()

router.post('/api/pokemon',async (req:Request,res:Response)=>{
    

        //using post request, we can get the input value from the req.body by user
        const {pokemon} = req.body
    
        if(!pokemon)  return res.status(400).send("Bad request: no pokemon input")
    
       const result = await fetchEvolutionChain(pokemon)
        res.json(result)
    
  
})

export {router as pokemonRouter}