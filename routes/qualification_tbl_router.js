var express=require('express');

var router=express.Router();
var demo4=require('../models/qualification_tbl');

router.get('/', function(req,res,next) {

    demo4.getAllTasks4(function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }

        });
         
    });
    router.get('/:id4?', function(req, res, next) {
    
        demo4.getQualificationById(req.params.id4, function(err, rows)
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
    
        demo4.addqualification_tbl(req.body, function(err,rows)
        {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        
        });
    });
     
    router.delete('/:id4',function(req,res,next)
    {
        demo4.deletequalification_tbl(req.params.id4, function(err,rows)
        {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    });
    
    
    router.put('/:id4', function (req, res, next) {
    
        demo4.updatequalification_tbl(req.params.id4, req.body, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    });
    
   module.exports=router;