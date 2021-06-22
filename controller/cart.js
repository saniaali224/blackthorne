const db = require("../models");
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const config = require("../config/config");

const CartController = {


    //creating customers 
    create: async (req, res) => {
        const response = {};
        let { items, discount, tax, total, subTotal } = req.body;
        console.log(req.body);
        await db.models.cart.create({
            items: items,
            discount: discount,
            tax: tax,
            total: total,
            subTotal: subTotal
        }).then(async ress => {
         

            response.statusCode = 200;
            response.body = JSON.stringify({
                message: 'Cart has been created',
                data: ress,
                
            }
            );
            await res.status(response.statusCode).send(response.body);
        }).catch(err => {
            console.log("err", err);
            response.statusCode = 500;
            response.body = JSON.stringify({ "errors: ": err });
            res.status(response.statusCode).send(response.body);
        })
    },

    //getting one customer details by id
    getOne: async (req, res) => {

        const response = {};
        if ("undefined" !== req.params.id) {

            db.models.cart.findOne({

                where: { id: req.params.id }
            }).then(data => {
                response.statusCode = 200;
                response.body = JSON.stringify(
                    {
                        message: "ok",
                        data: data
                    }
                );
                res.status(response.statusCode).send(response.body);

            }).catch(err => {
                console.log("error", err);
                response.statusCode = 500;
                response.body = JSON.stringify({ err });
                res.status(response.statusCode).send(response.body);
            })
        }
    },




}
module.exports = CartController;