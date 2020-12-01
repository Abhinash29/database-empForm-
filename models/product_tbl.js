var db=require('../dbConnection');
const { use } = require('../routes/product_tbl_router');

var product_tbl={
    show:function(callback){

        return db.query('select * from product_tbl',callback);
    },
    getProductById: function(Id2,callback){
        return db.query('select * from product_tbl where  pro_id=?',[Id2],callback)
    },
      addproduct_tbl:function(product_tbl,callback){
          return db.query('insert into product_tbl values(?,?,?,?,?,?,?)',[product_tbl.pro_id,product_tbl.pro_name,product_tbl.pro_price,product_tbl.pro_desc,product_tbl.pro_qty,product_tbl.pro_mfg,product_tbl.pro_img],callback);
      },
   deleteproduct_tbl:function(Id,callback){
       return db.query('delete from product_tbl where pro_id=?',[Id],callback);
   },
    updateproduct_tbl:function(Id,product_tbl,callback){
       return db.query('update product_tbl set pro_name=?,pro_price=?,pro_desc=?,pro_qty=?,pro_mfg=?,pro_img=? where pro_id=?',[product_tbl.pro_name,product_tbl.pro_price,product_tbl.pro_desc,product_tbl.pro_qty,product_tbl.pro_mfg,product_tbl.pro_img, Id],callback);
   }
};

  module.exports=product_tbl;
