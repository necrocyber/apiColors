import Color from '../models/color'

export async function findAll(req, res) {
    try {
        const colors = await Color.find()
        res.status(200).json(colors)
    } catch (error) {
        res.status(400).json({ message: 'Error al traer los colores'})
    }
    
}

export async function findId(req, res) {
    const id = req.body.id

    Color.findById(id, (err, post) => {
        if(err) {
            res.status(400).json({err})
        }

        res.status(200).json({post})
    })
    
}

export async function insertColor(req, res) {
    const color = {
        name: req.body.name,
        year: req.body.year,
        color: req.body.color,
        pantone_value: req.body.pantone
    }

    console.log(color)

    try {
        const data = await Color.create(color)
        res.status(200).json(data)
    } catch(e) {
        res.status(400).json({ message: 'Error al insertar un color' })
        console.log("insert error mongoose")
    }
}