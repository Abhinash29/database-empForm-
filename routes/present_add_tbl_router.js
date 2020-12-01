var express=require('express');

var router=express.Router();
var demo2=require('../models/present_add_tbl');

router.get('/', function(req,res,next) {

    demo2.getAllTasks2(function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }

        });
         
    });
    router.get('/:id2?', function(req, res, next) {
    
        demo2.getPresentById(req.params.id, function(err, rows)
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
    
        demo2.addpresent_add_tbl(req.body, function(err,rows)
        {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        
        });
    });
    
    
    
    router.delete('/:id2',function(req,res,next)
    {
        demo2.deletepresent_add_tbl(req.params.id2, function(err,rows)
        {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    });
    
    
    router.put('/:id2', function (req, res, next) {
    
        demo2.updatepresent_add_tbl(req.params.id2, req.body, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    
    });
    
   module.exports=router;