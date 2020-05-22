import express from 'express'
import cors from 'cors'
import router from './routes/routes'
import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const app = express()

// Middlewares
app.set('port', process.env.PORT || 3000)

// Settings
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

// Documentation
// Extended: https://swagger.io/specification/#infoObject
const swaggerOptions = {
    swaggerDefinition: {
        info: {
        title: "Customer API",
        description: "Customer API Information",
        contact: {
            name: "Antonio Medel"
        },
        servers: ["http://localhost:3000/"]
        }
    },
    apis: ['./src/routes/*']
    //apis: ["server.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// Routes
app.use(router)

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));



export default app