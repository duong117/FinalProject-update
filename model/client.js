
module.exports=(sequelize,DataTypes) => {

    var Client=sequelize.define('Client',{
        name: {
            type: DataTypes.STRING,
            allowNull:false
        },when: {
            type: DataTypes.DATE,
            allowNull:false
        },type: {
            type: DataTypes.STRING,
            allowNull:true
        },malefemale: {
            type: DataTypes.STRING,
            allowNull:true
        },present:{
            type:DataTypes.BOOLEAN,
            allowNull:false,
            defaultValue:false
        }
        // todo add field for weight, body fat, and migrate 
        // also modify the database table 
    })
    Client.sync({force:false}).then(() => {
        console.log('synced table')
    })

    return Client
}
