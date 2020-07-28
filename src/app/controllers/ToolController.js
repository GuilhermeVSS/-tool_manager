
import Tool from '../models/Tool'

class ToolController{
    async store(req,res){
        
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
    }

    async update(req, res){
        const tool = await Tool.findByPk(req.body.id)

        const {id, name, available, quantity} = tool.update(req.body) 

        return res.status(200).json({tool:{
            id,
            name,
            available,
            quantity
        }})
    }

    async read(req, res){
        const tools = await Tool.findAll()
        return res.status(200).json(tools)
    }
}

export default new ToolController();