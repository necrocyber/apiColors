import Server from './server'
import './database'

Server.listen(Server.get('port'), () => {
    console.log('Server Up!')
})