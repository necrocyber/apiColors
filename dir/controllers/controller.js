"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _color = require('../models/color'); var _color2 = _interopRequireDefault(_color);

 async function findAll(req, res) {
    try {
        const colors = await _color2.default.find()
        res.status(200).json(colors)
    } catch (error) {
        res.status(400).json({ message: 'Error al traer los colores'})
    }
    
} exports.findAll = findAll;

 async function findId(req, res) {
    const id = req.body.id

    _color2.default.findById(id, (err, post) => {
        if(err) {
            res.status(400).json({err})
        }

        res.status(200).json({post})
    })
    
} exports.findId = findId;

 async function insertColor(req, res) {
    const color = {
        name: req.body.name,
        year: req.body.year,
        color: req.body.color,
        pantone_value: req.body.pantone
    }

    console.log(color)

    try {
        const data = await _color2.default.create(color)
        res.status(200).json(data)
    } catch(e) {
        res.status(400).json({ message: 'Error al insertar un color' })
        console.log("insert error mongoose")
    }
} exports.insertColor = insertColor;