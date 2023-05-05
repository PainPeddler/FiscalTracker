const{Model,DataTypes}=require('sequelize');
const sequelize=require('../config/connection');

const Transaction extends Model{}
Model.Init(
    {
        id:
        {
            type:DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
            allowNull:false
        },

        user_id:
        {
            type:DataTypes.INTEGER,
            allowNull:false,
            references:{
                model: 'User',
                key:'id',
                unique:false
            }

        },

        description:
        {
            type:DataTypes.TEXT,
            allowNull:false

        },

        amount:
        {
            type: DataTypes.DECIMAL(10,2),
            allowNull:false
        },

        transact_date:
        {
            type:DataTypes.DATE,
            allowNull:false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'transaction'
    }
    
    );

    module.exports= Transaction;