import Bag from '../models/Bag'
import Tool from '../models/Tool'

class BagController{
    async store(req,res){
        const userId = req.userId
        const {id, quantity} = req.body
        const tool = await Tool.findByPk(id)
        await tool.decrementQuantity(quantity)
        const newBag = {id_user: userId, id_tool: id, quantity}
        await Bag.create(newBag)
        return res.status(201).json({success: "Proceed has been done successfully"})
    }

    async update(req,res){

    }
}

export default new BagController()
