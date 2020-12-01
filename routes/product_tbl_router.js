var express=require('express');

var router=express.Router();
var product_tbl=require('../Models/product_tbl');

router.get('/:Id2?', function(req,res,next){

    if(req.params.Id2){
        product_tbl.getProductById(req.params.Id2,function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }

        });
         
    }
    else{
        product_tbl.show(function(err,rows){
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
        product_tbl.addproduct_tbl(req.body,function(err, rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
    });
    router.delete('/:pro_id',function(req,res,next){
        product_tbl.deleteproduct_tbl(req.params.pro_id,function(err,rows){ 
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
        product_tbl.updateproduct_tbl(req.params.Id,req.body,function(err,rows){
            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }

          });
      });
   module.exports=router;