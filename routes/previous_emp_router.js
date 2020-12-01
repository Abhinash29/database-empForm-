var express=require('express');

var router=express.Router();
var demo3=require('../models/previous_emp');

router.get('/', function(req,res,next) {

    demo3.getAllTasks3(function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }

        });
    });

        router.get('/:id3?', function(req, res, next) {
    
            demo3.getPreviousEmpById(req.params.id3, function(err, rows)
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
        
            demo3.addprevious_emp(req.body, function(err,rows)
            {
                if (err) {
                    res.json(err);
                }
                else {
                    res.json(rows);
                }
            
            });
        });
         
        router.delete('/:id3',function(req,res,next)
        {
            demo3.deleteprevious_emp(req.params.id3, function(err,rows)
            {
                if (err) {
                    res.json(err);
                }
                else {
                    res.json(rows);
                }
            });
        });
        
        
        router.put('/:id3', function (req, res, next) {
        
            demo3.updateprevious_emp(req.params.id3, req.body, function (err, rows) {
                if (err) {
                    res.json(err);
                }
                else {
                    res.json(rows);
                }
            });
        
         
    });
    
   module.exports=router;