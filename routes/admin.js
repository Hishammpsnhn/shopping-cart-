var express = require('express');
var router = express.Router();
var productHelper= require('../helpers/product-helpers')
/* GET users listing. */
router.get('/', function(req, res, next) {

productHelper.getAllProducts().then((products)=>{
  res.render('admin/view-products',{products,admin:true})
})  
});

router.get('/add-product', function(req, res, next) {
  res.render('admin/add-product')
});

router.post('/add-product',(req,res)=>{

  
 productHelper.addProduct(req.body,(id)=>{
    let image = req.files.Image
    image.mv('./public/product-images/'+id+".jpg",(err,done)=>{
      if(!err){
        res.render("admin/add-product")
      }else{
      console.log("error"+err)
      }
    })
  })
})
router.get("/delete-product/:id",(req,res)=>{
  let id = req.params.id
  console.log(id)
})

module.exports = router;
