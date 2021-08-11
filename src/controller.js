//import sequelize
var Sequelize = require('sequelize');
// imporconst controller = {}
// import model
var Customers = require('./models/Customers');
const { Op } = require("sequelize");

const controller = {}

controller.list = async (req, res) =>{
    try {
        const response = await Customers.findAll()
        .then(function(data){
            const res = {
                success: true,
                message: "Load successful",
                data: data
            }
            return res;
        })
        .catch(error => {
            const res = {
                success: false,
                error: error,
            }
            return res
        })

        return res.json(response);

    } catch (error) {
        res.status(400).json({
            estado: false,
            msg: error
        });
    }
}

controller.create = async (req, res) => {
    try {
        const response = await Customers.create({
            name: req.body.name,
            email: req.body.email,
            address: req.body.address,
            phone: req.body.phone,
        }).then(function(data){
            const res = {
                success: true,
                message: "Created successful",
                data: data
            }
            return res;
        }).catch(error => {
            const res = {
                success: false,
                error: error,
            }
            return res
        })

        return res.json(response);

    } catch (error) {
        res.status(500).json({
            estado: false,
            msg: error
        });
    }
}

controller.update = async (req, res) => {
    try {

        const {id} = req.params;

        const response = await Customers.update({
            name: req.body.name,
            email: req.body.email,
            address: req.body.address,
            phone: req.body.phone,
        },
        {
            where: { id: id}
        }).then(function(data){
            const res = {
                success: true,
                message: "Updated successful",
                data: data
            }
            return res;
        }).catch(error => {
            const res = {
                success: false,
                error: error,
            }
            return res
        })

        return res.json(response);

    } catch (error) {
        res.status(500).json({
            estado: false,
            msg: error
        });
    }
}

controller.get = async (req, res) => {
    try {
        const { id } = req.params;

        const response = await Customers.findAll({
            where: {id: id}
            // where:{ // Multiples Id
            //     id: [1,2,3,4] 
            // }
            // like: { name: "%luis%"}  // Buscar por nombre Opcion 1
            // where: {                 //Opcion 2
            //     name: {
            //         [Op.like]: "%Luis%"
            //     }
            // }
        }).then(function(data) {
            const res = {
                success: true,
                message: "List successful",
                data: data
            }
            return res;
        }).catch(error => {
            const res = {
                success: false,
                error: error,
            }
            return res
        });

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
}

controller.delete = async (req, res) => {
    try {
        const { id } = req.params;

        const response = await Customers.destroy({
            where: {id: id}
        }).then(function(data){
            const res = {
                success: true,
                data: data,
                message: "Deleted Successful"
            }
            return res;
        }).catch(error => {
            const res = {
                success: false,
                error: error
            }
            return res;
        })

        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
}

// controller.

module.exports = controller;