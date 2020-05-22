import { Router } from 'express'
import { findAll, findId, insertColor } from '../controllers/controller'

const router = Router()

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
router.get('/colores', findAll)

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
router.get('/colores/:id', findId)

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
router.post('/colores', insertColor)



export default router