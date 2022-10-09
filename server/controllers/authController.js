const User = require('../models/user');
const bcrypt = require('bcryptjs');
const genrateToken = require('../Utils/genrateToken');
const register = async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const userExist = await User.exists({ email });
        if (!userExist) {
            const salt = await bcrypt.genSalt(10);
            const hashPassword = await bcrypt.hash(password, salt)
            const user = await User.create({
                email,
                username,
                password: hashPassword
            });
            const token = genrateToken(
                {
                    id: user._id
                });
            return res.status(201).json({
                email,
                username,
                token
            });
        } else {
            return res.status(401).json({
                error: true,
                message: 'User Already Exists'
            })
        }
    } catch (err) {
        console.log('exception');
        return res.status(401).json({
            error: true,
            Exception: err
        })
    }
}
const login = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const userFound = await User.findOne({ email });
        if (userFound && await bcrypt.compare(password, userFound.password)) {
            const token = genrateToken(
                {
                    id: userFound._id
                });
            return res.status(201).json({
                email,
                username,
                token
            })
        } else {
            return res.status(400).json({
                error: true,
                message: "invalid email or password"
            })
        }
    }
    catch (err) {
        return res.status(400).json({
            error: true,
            Exception: err
        })
    }
}

module.exports = { login, register };