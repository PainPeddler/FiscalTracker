const{Model,DataTypes}=require('sequelize');
const sequelize=require('../config/connection');

class IncomeCategory extends Model{}

Model.init(
    {
        id:{

            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        name:{
            
            type: DataTypes.STRING,
            allowNull:false
        },
        rate:{
            type :DataTypes.STRING,
            allowNull:false
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'category'
    }
);

module.exports=IncomeCategory;