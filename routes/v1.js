const express = require('express');
const {verifyToken} = require('./middlewares');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const router = express.Router();
const {User} = require('../models');

router.post('/token', bodyParser.urlencoded({extended: false}), async (req, res) => {
    try {
        const user_data = req.body;

        const user = await User.find({
            where: user_data,
            attributes: ['name', 'email']
        });

        if (!user) {
            return res.status(401).json({
                code: 401,
                message: '등록되지 않은 유저입니다.'
            });
        }

        const token = jwt.sign({
            id: user.name,
            email: user.email
        }, process.env.JWT_SECRET, {
            expiresIn: '1h',
            issuer: 'trivial_api_project'
        });
        return res.status(200).json({
            code: 200,
            message: '토큰이 발급되었습니다.',
            token
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            code: 500,
            message: '서버 에러'
        });
    }
});

module.exports = router;