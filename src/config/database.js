module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'postgres',
    database: 'toolManager',
    define:{
        timestamps:true,
        underscored: true,
        underscoredAll: true, 
    }
}