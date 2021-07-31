const db = require('../database/models')

const operationsController = {
    //GET ALL OPERATIONS
    getOperations: function (req, res) {
        db.Operations.findAll()
            .then(function (ops) {
                if (ops) {
                    res.send(ops)
                } else {
                    res.send({ msg: 'Sorry, there are no operations to show.' })
                }
            })
            .catch(errors => {
                console.log(errors)
            })

    },
//GET SINGLE OPERATION
    getSingleOperation: function (req, res) {
        db.Operations.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (operation) {
                if (operation) {
                    res.send(operation)
                } else {
                    res.send({ msg: 'The operation does not exist' })
                }
            })
            .catch(errors => {
                console.log(errors)
            })

    },
    //CREATE
    createOperation: function (req, res) {
        db.Operations.create({
            concept: req.body.concept,
            amount: req.body.amount,
            date: req.body.date,
            type: req.body.type,
        })
            .then(result => {
                res.send({ msg: 'Operation created!' })
            })

            .catch(errors => {
                console.log(errors)
            })
    },
    //UPDATE
    updateOperation: function (req, res) {
        db.Operations.update({
            concept: req.body.concept,
            amount: req.body.amount,
            date: req.body.date,
            type: req.body.type,
        }, {
            where: {
                id: req.params.id
            }
        })
            .then(result => {
                res.send({ msg: 'Operation updated!' })
            })
            .catch(errors => {
                console.log(errors)
            })
    },
    //DELETE
    deleteOperation: function (req, res) {
        db.Operations.destroy({
            where: {
                id: req.params.id
            }
        })
        res.send({ msg: 'Operation deleted!' })
    },
}
module.exports = operationsController