const express= require('express');
const router = express.Router();
const Article = require('./models/article');



//get s list of ninjas from db
router.get('/articles',function(req,res ){

 Article.find({})
 .then(function(article){
   res.send(article);
       })
  
       });


//add  a new article to the db 
router.post('/articles', function(req, res,next){
 
  Article.create(req.body).then(function(article){
res.send(article).catch(next);

  });
  /*var article= new Article(req.body);
  article.save();*/
  }); 




// update  article in the db 
router.put('/articles/:id', function(req, res,next){
  Article.findByIdAndUpdate({_id:req.params.id},req.body)
  .then(function(article){
     Article.findOne({_id:req.params.id}).then(function(){
       res.send(article).catch(next);
     })
    
   });
  
  }); 
  

//delete  from the db 

router.delete('/articles/:id', function(req, res,next){
   Article.findByIdAndRemove({_id:req.params.id})
   .then(function(article){
    res.send(article).catch(next);
   });
  
 
  }); 

  module.exports=router;