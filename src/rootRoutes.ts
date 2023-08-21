import express,{Express} from 'express'
import {pokemonRouter} from './routes/pokemon'

export const rootRoute =(app:Express)=>{
  app.use(pokemonRouter)
}