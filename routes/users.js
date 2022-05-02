const { response } = require('express');
var express = require('express');
var router = express.Router();
var productHelper = require('../helpers/product-helpers');
const userHelper = require('../helpers/user-helper');
/* GET home page. */
router.get('/', function (req, res, next) {

  productHelper.getAllProducts().then((products) => {
    console.log(products)
    res.render('user/view-products', { products, admin: false })
  })
});
router.get('/login', function (req, res) {
  res.render('user/login')
})
router.get('/signup', function (req, res) {
  res.render('user/signup')
})
router.post('/signup', (req, res) => {

  userHelper.doSignup(req.body).then((response) => {
    console.log(response)
  })
})

router.post('/login',(req,res)=>{
  userHelper.doLogin(req.body)
})

module.exports = router;
