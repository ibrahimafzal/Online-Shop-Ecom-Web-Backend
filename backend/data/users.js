const bcrypt = require('bcryptjs')
const Users = [
    {
        name: 'admin',
        email: 'admin@gmail.com',
        password: bcrypt.hashSync('123456', 10), //10 is salt, it means yh 10 tk encrypt kr dy ga
        isAdmin: true
    },
    {
        name: 'hadi',
        email: 'hadi@gmail.com',
        password: bcrypt.hashSync('123456', 10), //10 is salt, it means yh 10 tk encrypt kr dy ga
        isAdmin: true
    },
    {
        name: 'ibrahim',
        email: 'ib@gmail.com',
        password: bcrypt.hashSync('123456', 10), //10 is salt, it means yh 10 tk encrypt kr dy ga
        isAdmin: true
    },
]

module.exports = Users