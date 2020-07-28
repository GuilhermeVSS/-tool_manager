import Sequelize, {Model} from 'sequelize'

class Tool extends Model {
    static init(sequelize){
        super.init({
            name: Sequelize.STRING,
            specifications: Sequelize.TEXT,
            quantity: Sequelize.INTEGER
        },
        {
            sequelize,
        })
        this.addHook('beforeSave', async(tool)=>{
            if(tool.quantity > 1){
                tool.available = true;
            }
        })
        return this
    }

    checkAvailable(){
        return this.quantity
    }

    decrementQuantity(quantity){
        this.quantity -= quantity
        return this
    }
}

export default Tool;