const jwt = require('jsonwebtoken');

const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
        expiresIn: '3d'
    })

    res.cookie('jwt', token, {
        maxAge: 3 * 24 * 60 * 60 * 1000, //MS
        httpOnly: true,  //Prevent XSS attacks cross-site scripting attacks
        sameSite: 'strict',  // CSRF attacks cross-site request forget attacks
        secure: process.env.NODE_ENV !== 'development'
    })
}

module.exports = generateTokenAndSetCookie;