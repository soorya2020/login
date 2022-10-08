var express = require('express');
var router = express.Router();
var userLogin = require('../uservalidation/login')

/* GET home page. */
router.get('/', function(req, res, next) {
let user = req.session.user



var products=[
  {
    name:'Iphone 14',
    price:149999,
    description:'this is the best phone in the world',
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzpPfvPgtrblejnrE8_9wPo5Z_v9yNjAebLg&usqp=CAU"
  },
  {
    name:'Iphone 13',
    price:139999,
    description:'this is the best phone in the world',
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfzg-FF3sD9D3JMaJ009_x4L6GYZV87z2x4Q&usqp=CAU"
  },
  {
    name:'Iphone 12',
    price:129999,
    description:'this is the best phone in the world',
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzpPfvPgtrblejnrE8_9wPo5Z_v9yNjAebLg&usqp=CAUU"
  },
  {
    name:'Iphone X',
    price:119999,
    description:'this is the best phone in the world',
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfzg-FF3sD9D3JMaJ009_x4L6GYZV87z2x4Q&usqp=CAU"
  },
  {
    name:'Iphone 14',
    price:149999,
    description:'this is the best phone in the world',
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzpPfvPgtrblejnrE8_9wPo5Z_v9yNjAebLg&usqp=CAU"
  },
  {
    name:'Iphone 13',
    price:139999,
    description:'this is the best phone in the world',
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfzg-FF3sD9D3JMaJ009_x4L6GYZV87z2x4Q&usqp=CAU"
  },
  {
    name:'Iphone 12',
    price:129999,
    description:'this is the best phone in the world',
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzpPfvPgtrblejnrE8_9wPo5Z_v9yNjAebLg&usqp=CAU"
  },
  {
    name:'Iphone X',
    price:119999,
    description:'this is the best phone in the world',
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfzg-FF3sD9D3JMaJ009_x4L6GYZV87z2x4Q&usqp=CAU"
  }
  
]
  
  var t = new Date(req.session.time);

  let formattedTime = `Last login time > ${t.getHours()}:${t.getMinutes()}.${t.getSeconds()}s`;

  res.render('index',{products,login:user,time:formattedTime});
});

router.get('/login',(req,res)=>{
  if(req.session.loggedIn){
    res.redirect('/')
  }else{
    
  res.render('user/login',{loginErr:req.session.loginErr,})
  req.session.loginErr=false;

  }
})



router.post('/login',(req,res)=>{
userLogin.doLogin(req.body).then((response)=>{
  if(response.status){
    req.session.loggedIn=true;
    req.session.user = response.user;
    req.session.time = new Date()
    setTimeout(()=>{
      res.redirect('/');
    },1000)
    
  }else{
    req.session.loginErr = true;
    res.redirect('/login');
  }
})
})

router.get('/logout',(req,res)=>{
  req.session.destroy();
  res.redirect("/login");
})






module.exports = router;



