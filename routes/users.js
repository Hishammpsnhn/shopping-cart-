var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let products =[
    {
      name:"IPHONE 13",
      catagory:"Mobile",
      desc:"New Edition of Iphone any desc",
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZITkN4RAy73o0rJUEgCb5RDDktkHwHmAycw&usqp=CAU'
    },
    {
      name:"ASUS ROG",
      catagory:"Laptop",
      desc:"New Edition of pc any desc",
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQMoL2SofNVQHOSUeM27UqOus_Rm2e6SzFYg&usqp=CAU'
    },
    {
      name:"AIRPOD",
      catagory:"Earphone",
      desc:"New Edition of earphone any desc",
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAsgCJVbD7JvnQ_wBxfox6TAVqrLXSe8Lu-A&usqp=CAU'
    },
    {
      name:"SUGAR",
      catagory:"Food",
      desc:"New Edition of food any desc",
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4Q9sJBhgMgynBOgR49fCbianNGOwHpKgtw&usqp=CAU'
    },
  ]
  res.render('index', {products,admin:false});
});

module.exports = router;
