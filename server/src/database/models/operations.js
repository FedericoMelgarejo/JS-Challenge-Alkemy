module.exports = (sequelize, dataTypes) => {

    let alias = "Operation"

    let cols = {
        id:{
            type: dataTypes.INTEGER(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        concept:{
            type: dataTypes.STRING(100),
            allowNull: true,
        },
        amount:{
            type: dataTypes.INTEGER(11),
            allowNull: true,
        },
        type:{
            type: dataTypes.STRING(45),
            allowNull: true,
        },
        date:{
            type: dataTypes.DATEONLY(),
            allowNull: true,
        },
    }

    let config = {
        tableName: "operation",
        timestamps: false
    }

    const operations = sequelize.define(alias,cols,config)
    return operations
}