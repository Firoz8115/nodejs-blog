const express = require('express');
const router = express.Router();
const Post = require('../models.js/post');


router.get('/about',(req,res)=>{
    res.render('about');
});


router.get('/', async (req,res)=>{
    const locals ={
        title:"NodeJs Blog",
        description:"nodejs page"
    }

   try {
     
       const data = await  Post.find();
        res.render('index', {locals, data });
    } catch (error) {
        console.log(error.message);
    }
   
});


router.get('/post/:id', async (req,res)=>{
  
   try {
    const locals ={
        title:"NodeJs Blog",
        description:"nodejs page"
    }

     let slug = req.params.id;

       const data = await  Post.findById({_id: slug });
        res.render('post', {locals, data });
    } catch (error) {
        console.log(error.message);
    }
   
});



router.post('/search', async (req,res)=>{
    
   try {
    const locals ={
        title:"search",
        description:"nodejs page"
    }

    let searchTerm = req.body.searchTerm;
     console.log(searchTerm);
     
       //const data = await  Post.find();
        res.send(searchTerm);
    } catch (error) {
        console.log(error.message);
    }
   
});





module.exports =router;





/*function insertPost () {
    Post.insertMany([
    {
        title:"NodeJs Blog",
        description:"nodejs page"
    },
    {
        title:"NodeJs limiting network",
        description:"nodejs network"
    },
    {
        title:"NodeJs server",
        description:"nodejs server page"
    },
    {
        title:"learn morgan - HTTP Request logger for nodejs",
        description:"Learn Morgan"
    },

    ])
}
insertPost();
*/

/*

router.get('/', async (req,res)=>{
   
   try {
        const locals ={
            title:"NodeJs Blog",
            description:"nodejs page"
        }

        let perpage = 10;
        let page = req.query.page || 1;
        const data = await Post.aggregate([ {$sort: {createdAt: -1 } }])
        .skip(perpage * page - perpage)
        .limit(perpage)
        .exec();

        const count = await Post.count();
       const nextPage =  parseInt(page)+ 1;
        const hasNextPage = nextPage <= Math.ceil( count / perpage);


       // const data = await  Post.find();
        res.render('index', {
            locals, 
            data,
           current:page,
           nextPage: hasNextPage ? nextPage : null
        });
    } catch (error) {
        console.log(error.message);
    }
   
});
*/