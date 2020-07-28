
import User from '../models/User'
import * as Yup from 'yup'

class UserController {
    async store(req, res){

        const schema = Yup.object().shape({
            name: Yup.string(),
            email: Yup.string().email(),
            password: Yup.string().min(6).required(),
            confirmPassword: Yup.string().when('password', (password, field)=> password? field.required().oneOf([Yup.ref('password')]): field)
        
        })
       
        const userExists = await User.findOne({where:{email:req.body.email}})
        if(userExists){
            return res.status(400).json({error:"User Already exists"})
        }
        const{id, name, email} = await User.create(req.body)

        return res.status(201).json({user:{
            id, name, email
        }})
        
    }
    async update(req, res) {
        
        const schema = Yup.object().shape({
            name: Yup.string(),
            email: Yup.string().email(),
            password: Yup.string().min(6),
           
        })

        if(!(await schema.isValid(req.body))){
            return res.status(400).json({error:"Validation fails"})
        }
        
        const {email, oldPassword} = req.body

        const user = await User.findByPk(req.userID)

        if(email !== user.email){
            const userExists = await User.findOne({where: {email} })
            
            if(userExists){
                return res.status(400).json({error: "User already exists"})
            }
        }

        if(oldPassword && !(await user.checkPassword(oldPassword))){
             return res.status(401).json({error: "Password does not match"})
        }

        const {id, name} = await user.update(req.body)
        
        return res.status(200).json({user:{
            id,
            name,
            email
        }})
    }
}

export default new UserController();