import Sequelize from 'sequelize'
import databaseConfig from '../config/database'

import User from '../app/models/User'
import Tool from '../app/models/Tool'
import Bag from '../app/models/Bag'


const models =[User, Tool, Bag]

class Database {
    constructor(){
        this.init()
    }

    init(){
        this.connection = new Sequelize(databaseConfig)
        models.map(model => model.init(this.connection))
    }
}

export default new Database()