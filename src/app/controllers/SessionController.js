import User from '../models/User'
import jwt from 'jsonwebtoken'

import authConfig from '../../config/auth'

class SessionController {
    async store(req, res){
        const {email, password} =req.body

        const user = await User.findOne({where:{email}})

        if(!user){
            return res.status(400).json({error:"User not found"})
        }

        if(!(await user.checkPassword(password))){
            return res.status(400).json({error:"Password does not match"})
        }

        const {id, name} = user

        return res.status(200).json({
            user:{
                id,
                name,
                email
            },
            token: jwt.sign({id},authConfig.secret,{
                expiresIn: authConfig.expiresIn
            })
        })
    }
}

export default new SessionController()