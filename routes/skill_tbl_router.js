var express=require('express');

var router=express.Router();
var demo5=require('../Models/skill_tbl');

router.get('/', function(req,res,next) {

    demo5.getAllTasks5(function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }

        });
         
    });

router.get('/:id5?', function(req, res, next) {

    demo5.getSkillById(req.params.id5, function(err, rows)
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

    demo5.addskill_tbl(req.body, function(err,rows)
    {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    
    });
});
 
router.delete('/:id5',function(req,res,next)
{
    demo5.deleteskill_tbl(req.params.id5, function(err,rows)
    {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});


router.put('/:id5', function (req, res, next) {

    demo5.updateskill_tbl(req.params.id5, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
    
   module.exports=router;