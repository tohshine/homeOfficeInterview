import {app} from '../app'
import request from 'supertest' 

it('returns a 200 on successful pokemon request',async ()=>{
    return request(app)
           .post('/api/pokemon')
           .send({
            pokemon:'butterfree'
        })
           .expect(200)
           
})

