const checkUsersCredentials = require('../auth/auth.controllers')
const jwt = require('jsonwebtoken')
const response = require('../utils/responses.handler')

const loginUser = (req, res) => {
    const { email, password } = req.body
    checkUsersCredentials(email, password)
        .then(data => {
            if(data){
                console.log(data)
                const token = jwt.sign({
                    id: data.id,
                    email: data.email
                }, 'academlo')
                response.success({
                    res,
                    status: 200,
                    message: 'Correct credentials',
                    data: token
                    
                })
            } else {
                response.error({
                    res,
                    status: 401,
                    message: 'Wrong Credentials :('
                })
            }
        })
        .catch(err => {
            response.error({
                err,
                status: 400,
                message: 'Something Wrong',
                data
            })
        })
}


module.exports = loginUser