import express,{Request,Response} from 'express'
import {json} from 'body-parser'
import {rootRoute} from '../rootRoutes'
//create basic express app 
const  app = express()
app.use(json());
rootRoute(app)
export {app}