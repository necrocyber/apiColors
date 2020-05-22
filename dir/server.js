"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _routes = require('./routes/routes'); var _routes2 = _interopRequireDefault(_routes);
var _swaggerjsdoc = require('swagger-jsdoc'); var _swaggerjsdoc2 = _interopRequireDefault(_swaggerjsdoc);
var _swaggeruiexpress = require('swagger-ui-express'); var _swaggeruiexpress2 = _interopRequireDefault(_swaggeruiexpress);

const app = _express2.default.call(void 0, )

// Middlewares
app.set('port', process.env.PORT || 3000)

// Settings
app.use(_express2.default.urlencoded({ extended: false }))
app.use(_express2.default.json())
app.use(_cors2.default.call(void 0, ))

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

const swaggerDocs = _swaggerjsdoc2.default.call(void 0, swaggerOptions);

// Routes
app.use(_routes2.default)

app.use("/api-docs", _swaggeruiexpress2.default.serve, _swaggeruiexpress2.default.setup(swaggerDocs));



exports. default = app