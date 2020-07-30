
import Tool from '../models/Tool'

class ToolController{
    async store(req,res){
        
        try{ 
            const toolExists = await Tool.findOne({where:{name: req.body.name}})

            if(toolExists){
                return res.status(400).json({error: "Tool already exists"})
            }
            const {id, name, specifications, available, quantity} = await Tool.create(req.body)

            return res.status(201).json({tool:{
                id,
                name,
                specifications,
                quantity,
                available
            }})
        }catch(error){
            return res.status(500).json({error})
        }
    }

    async update(req, res){
       try{
            const tool = await Tool.findByPk(req.body.id)

            const {id, name, available, quantity} = tool.update(req.body) 

            return res.status(200).json({tool:{
                id,
                name,
                available,
                quantity
            }})
        }catch(error){
            return res.status(500).json({error})
        }
    }

    async read(req, res){
        try{
            const tools = await Tool.findAll()
            return res.status(200).json(tools)
        }catch(error){
            return res.status(500).json({error})
        }
    }
}

export default new ToolController();