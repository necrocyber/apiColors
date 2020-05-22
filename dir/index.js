"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _server = require('./server'); var _server2 = _interopRequireDefault(_server);
require('./database');

_server2.default.listen(_server2.default.get('port'), () => {
    console.log('Server Up!')
})