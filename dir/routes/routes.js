"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');
var _controller = require('../controllers/controller');

const router = _express.Router.call(void 0, )

/**
 * @swagger
 * /:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/', (req, res) => {
    res.status(200).send("Welcome to my API")
})


/**
 * @swagger
 * /colores:
 *  get:
 *    description: Get All Colors
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/colores', _controller.findAll)

/**
 * @swagger
 * /colores/{id}:
 *  get:
 *    description: Get One Color
 *    parameters:
 *      - name: id
 *        description: find by id
 *        in: path
 *        type: string
 *        required: true
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.get('/colores/:id', _controller.findId)

/**
 * @swagger
 * /colores:
 *  post:
 *    description: Insert Color
 *    parameters:
 *       - name: name
 *         description: color name
 *         in: formData
 *         type: string
 *         required: true
 *       - name: year
 *         description: year color
 *         in: formData
 *         type: number
 *         required: true
 *       - name: color
 *         description: color
 *         in: formData
 *         type: string
 *         required: true
 *       - name: pantone
 *         description: pantone_value
 *         in: formData
 *         type: string
 *         required: true
 *    produces:
 *      - application/json
 *    responses:
 *      '200':
 *        description: A successful response
 */
router.post('/colores', _controller.insertColor)



exports. default = router