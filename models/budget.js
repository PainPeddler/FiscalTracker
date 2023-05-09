const{Model,DataTypes}=require('sequelize');
const sequelize=require('../config/connection');

class Budget extends Model{}

Model.init(
    {
        id:{

            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        period_start:{
            
            type: DataTypes.DATE,
            allowNull:false
        },

        period_end:{
            
            type: DataTypes.DATE,
            allowNull:false
        },

        amount:{
            type: DataTypes.DECIMAL(10,2),
            allowNull:false
        },

        notes:{
            type: DataTypes.TEXT,
            allowNull:true
        },

        category_id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            references:{
                model:'category',
                key:'id',
                unique:false
            }
        }


    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'trip'
    }
);

module.exports=Budget;