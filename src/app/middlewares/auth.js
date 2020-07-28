import jwt from 'jsonwebtoken'
import authConfig from '../../config/auth'
import {promisify} from 'util'

export default async(req,res, next) =>{
    const authorization  = req.headers.authorization

    if(!authorization){
        return res.status(400).json({error:"Token not provided"})
    }

    const[,token] = authorization.split(' ')

   try {
       const encoded = await promisify(jwt.verify)(token, authConfig.secret)
       req.userId = encoded.id
       return next()
   } catch(error) {
       return res.status(400).json({error})
   }

}
