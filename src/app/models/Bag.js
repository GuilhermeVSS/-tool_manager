import Sequelize , {Model} from 'sequelize'

class Bag extends Model {
    static init(sequelize){
        super.init({
            id_user: Sequelize.INTEGER,
            id_tool: Sequelize.INTEGER,
            quantity: Sequelize.INTEGER
        },
        {
            sequelize
        })
        return this
    }
}

export default Bag