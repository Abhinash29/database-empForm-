var express=require('express');

var router=express.Router();
var user_tbl=require('../Models/user_tbl');

router.get('/:Id1?',function(req,res,next){
    if (req.params.Id1){
        user_tbl.getEmployeeById(req.params.Id1,function(err,rows){
          
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
       });

    } 
    else{
    user_tbl.getAllTasks(function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
}
});
    router.post('/', function(req,res,next){
        user_tbl.adduser_tbl(req.body,function(err, rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    });
    router.delete('/:user_name',function(req,res,next){
        user_tbl.deleteuser_tbl(req.params.user_name,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    });
                
      router.put('/:Id',function(req,res,next)
      {
        user_tbl.updateuser_tbl(req.params.Id,req.body,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }

          });
      });
   module.exports=router;