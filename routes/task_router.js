var express=require('express');

var router=express.Router();
var task=require('../Models/task');

router.get('/:task_id?', function (req,res,next){

    if (req.params.task_id) {
         task.getTaskById(req.params.task_id,function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }

         });
    }
    else{
        task.getAlltasks(function(err,rows){
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
        task.addtask(req.body,function(err, rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    });
    router.delete('/:id',function(req,res,next){
        task.deletetask(req.params.id,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    });
                
      router.put('/:id',function(req,res,next)
      {
          task.updatetask(req.params.id,req.body,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }

          });
      });
   module.exports=router;