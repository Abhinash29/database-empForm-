var express=require('express');

var router=express.Router();
var demo1=require('../models/permanent_add_tbl');

router.get('/', function(req,res,next) {

    demo1.getAllTasks1(function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }

        });
         
    });
    router.get('/:id1?', function(req, res, next) {
    
        demo1.getPermanentById(req.params.id, function(err, rows)
        {  
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
        
        }); 
        
    
    router.post('/',function(req,res,next){
    
        demo1.addpermanent_add_tbl(req.body, function(err,rows)
        {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        
        });
    });
    
    
    
    router.delete('/:id1',function(req,res,next)
    {
        demo1.deletepermanent_add_tbl(req.params.id1, function(err,rows)
        {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    });
    
    
    router.put('/:id1', function (req, res, next) {
    
        demo1.updatepermanent_add_tbl(req.params.id1, req.body, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    
    });
    
   module.exports=router;