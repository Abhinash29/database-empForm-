var express=require('express');

var router=express.Router();
var demo=require('../models/basic_tbl');

router.get('/', function(req,res,next) {

    demo.getAllEmployee(function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }

        });
         
    });
        
    router.get('/:id?', function(req, res, next) {
    
        demo.getemployeeById(req.params.id, function(err, rows)
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
    
        demo.addbasic_tbl(req.body, function(err,rows)
        {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        
        });
    });
    
    
    
    router.delete('/:id',function(req,res,next)
    {
        demo.deletebasic_tbl(req.params.id, function(err,rows)
        {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    });
    
    
    router.put('/:id', function (req, res, next) {
    
        demo.updatebasic_tbl(req.params.id, req.body, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    
    });
    
    
    
    
    module.exports = router;



