const express = require('express');
const {verifyToken} = require('./middlewares');

const router = express.Router();

router.post('/token', async (req, res) => {
   const {clientSecret} = req.body;
   try {
       console.log(clientSecret);
       return res.json({
           code: 200,
           message: `${clientSecret}`
       })
   } catch(err) {
       console.err(err);
       return res.status(500).json({
          code: 500,
          message: '서버 에러'
       });
   }
});

module.exports = router;